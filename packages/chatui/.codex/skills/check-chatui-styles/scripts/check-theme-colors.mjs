import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const skillDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const rootDir = path.resolve(skillDir, '..', '..', '..');
const stylesPath = path.join(rootDir, 'src', 'styles.css');
const tailwindPath = path.join(rootDir, 'tailwind.config.ts');
const tokenPrefix = '--chatui-';
const errors = [];

const read = (filePath) => fs.readFileSync(filePath, 'utf8');

const findCssFiles = (directory) => fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
  if (entry.name === 'node_modules' || entry.name === 'dist') return [];
  const entryPath = path.join(directory, entry.name);
  if (entry.isDirectory()) return findCssFiles(entryPath);
  return entry.isFile() && entry.name.endsWith('.css') ? [entryPath] : [];
});

const findStyleConsumers = (directory) => fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
  const entryPath = path.join(directory, entry.name);
  if (entry.isDirectory()) return findStyleConsumers(entryPath);
  return entry.isFile() && /\.(?:css|html|js|jsx|ts|tsx)$/.test(entry.name) ? [entryPath] : [];
});

const extractObjectBlock = (source, key) => {
  const match = new RegExp(`\\b${key}\\s*:\\s*\\{`).exec(source);
  if (!match) return null;
  const start = source.indexOf('{', match.index);
  let depth = 0;
  for (let index = start; index < source.length; index += 1) {
    if (source[index] === '{') depth += 1;
    if (source[index] === '}') depth -= 1;
    if (depth === 0) return source.slice(start + 1, index);
  }
  return null;
};

const stylesSource = fs.existsSync(stylesPath) ? read(stylesPath) : '';
const tailwindSource = fs.existsSync(tailwindPath) ? read(tailwindPath) : '';

if (!stylesSource) errors.push('Missing or empty src/styles.css.');
if (!tailwindSource) errors.push('Missing or empty tailwind.config.ts.');

for (const cssPath of findCssFiles(rootDir)) {
  if (path.resolve(cssPath) === path.resolve(stylesPath)) continue;
  const cssSource = read(cssPath);
  const relativePath = path.relative(rootDir, cssPath);

  for (const match of cssSource.matchAll(/^\s*(--[A-Za-z0-9_-]+)\s*:/gm)) {
    errors.push(`${relativePath} defines ${match[1]}; shared theme tokens belong in src/styles.css.`);
  }

  for (const match of cssSource.matchAll(/#[0-9A-Fa-f]{3,8}\b|rgba?\(|hsla?\(/g)) {
    const line = cssSource.slice(0, match.index).split('\n').length;
    errors.push(`${relativePath}:${line} contains a color literal; use a configured Tailwind utility or shared token.`);
  }
}

const tokenDefinitions = [...stylesSource.matchAll(/^\s*(--[A-Za-z0-9_-]+)\s*:/gm)].map(
  (match) => match[1],
);
const definedTokens = new Set(tokenDefinitions);

for (const token of tokenDefinitions) {
  if (!token.startsWith(tokenPrefix)) {
    errors.push(`Theme token ${token} must use the ${tokenPrefix} prefix.`);
  }
  if (token.endsWith('-rgb')) {
    errors.push(`Theme token ${token} duplicates a color representation; keep one HEX token only.`);
  }
}

for (const token of new Set(tokenDefinitions.filter((value, index) => tokenDefinitions.indexOf(value) !== index))) {
  errors.push(`Theme token ${token} is defined more than once.`);
}

const validateTokenizedEntries = (blockName) => {
  const block = extractObjectBlock(tailwindSource, blockName);
  if (!block) {
    errors.push(`Unable to find theme.extend.${blockName}.`);
    return 0;
  }

  let count = 0;
  const entryPattern = /^\s*(?:[A-Za-z0-9_-]+|'[^']+'|"[^"]+")\s*:\s*(['"`])([^'"`]+)\1\s*,?\s*$/gm;
  for (const match of block.matchAll(entryPattern)) {
    count += 1;
    const tokenMatch = /var\((--chatui-[A-Za-z0-9_-]+)\)/.exec(match[2]);
    if (!tokenMatch) {
      errors.push(`Tailwind ${blockName} value "${match[2]}" must reference a ${tokenPrefix} token.`);
    } else if (!definedTokens.has(tokenMatch[1])) {
      errors.push(`Tailwind ${blockName} references undefined token ${tokenMatch[1]}.`);
    }
  }
  return count;
};

const colorCount = validateTokenizedEntries('colors');
validateTokenizedEntries('boxShadow');

for (const match of stylesSource.matchAll(/rgba?\(|hsla?\(/g)) {
  const line = stylesSource.slice(0, match.index).split('\n').length;
  errors.push(`src/styles.css:${line} uses a functional color; define fixed colors and alpha as HEX tokens.`);
}

for (const match of tailwindSource.matchAll(/<alpha-value>|--chatui-[A-Za-z0-9_-]+-rgb\b/g)) {
  const line = tailwindSource.slice(0, match.index).split('\n').length;
  errors.push(`tailwind.config.ts:${line} permits color mutation or references an RGB duplicate; use var(--chatui-...) directly.`);
}

for (const match of tailwindSource.matchAll(/#[0-9A-Fa-f]{3,8}\b|rgba?\((?!var\()|hsla?\(/g)) {
  const line = tailwindSource.slice(0, match.index).split('\n').length;
  errors.push(`tailwind.config.ts:${line} contains a color literal; define it in src/styles.css.`);
}

const opacityColorPattern = /\b(?:bg|text|border|outline|ring|from|via|to|fill|stroke|caret|accent)-[A-Za-z0-9_-]+\/(?:\d{1,3}|\[[^\]]+\])/g;
const builtInPalettePattern = /\b(?:bg|text|border|outline|ring|ring-offset|divide|decoration|placeholder|from|via|to|fill|stroke|caret|accent)-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|[1-9]\d{2}|[1-9])(?:\/(?:\d{1,3}|\[[^\]]+\]))?\b/g;
for (const directory of ['src', 'showcase'].map((name) => path.join(rootDir, name))) {
  for (const filePath of findStyleConsumers(directory)) {
    const source = read(filePath);
    for (const match of source.matchAll(opacityColorPattern)) {
      const line = source.slice(0, match.index).split('\n').length;
      errors.push(`${path.relative(rootDir, filePath)}:${line} mutates a color with "${match[0]}"; add an explicit fixed-alpha token instead.`);
    }
    for (const match of source.matchAll(builtInPalettePattern)) {
      const line = source.slice(0, match.index).split('\n').length;
      errors.push(`${path.relative(rootDir, filePath)}:${line} uses generic palette utility "${match[0]}"; add and use a functionally named ChatUI color token instead.`);
    }
  }
}

if (errors.length > 0) {
  console.error('ChatUI style check failed:\n');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(
  `ChatUI style check passed: ${definedTokens.size} prefixed tokens and ${colorCount} Tailwind colors validated.`,
);

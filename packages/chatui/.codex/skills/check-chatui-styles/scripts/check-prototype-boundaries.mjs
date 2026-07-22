import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const skillDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const uiRoot = path.resolve(skillDir, '..', '..', '..');
const prototypeRoot = process.env.CHATUI_PROTOTYPE_ROOT
  ? path.resolve(process.env.CHATUI_PROTOTYPE_ROOT)
  : path.resolve(uiRoot, '..', '..');
const pagesDir = path.join(prototypeRoot, 'src', 'pages');
const localChatDir = path.join(prototypeRoot, 'src', 'components', 'chat');
const localCommonIndex = path.join(prototypeRoot, 'src', 'components', 'common', 'index.ts');
const errors = [];

const read = (filePath) => fs.readFileSync(filePath, 'utf8');
const sourceFiles = (directory) => fs.readdirSync(directory, { withFileTypes: true })
  .filter((entry) => entry.isFile() && /\.(?:ts|tsx)$/.test(entry.name))
  .map((entry) => path.join(directory, entry.name));

if (!fs.existsSync(pagesDir) || !fs.existsSync(localChatDir) || !fs.existsSync(localCommonIndex)) {
  console.log('ChatUI prototype boundary check skipped: the packaged release does not include the high-fidelity prototype host.');
  process.exit(0);
}

for (const pagePath of sourceFiles(pagesDir)) {
  const source = read(pagePath);
  const relativePath = path.relative(prototypeRoot, pagePath);
  if (path.basename(pagePath) !== 'ComponentShowcase.tsx' && !source.includes("from '@bioagent/chatui'")) {
    errors.push(`${relativePath} must consume its shared UI from @bioagent/chatui.`);
  }
  for (const match of source.matchAll(/from\s+['"]\.\.\/components\/(?:chat|common)(?:\/[^'"]*)?['"]/g)) {
    const line = source.slice(0, match.index).split('\n').length;
    errors.push(`${relativePath}:${line} imports a prototype presentation component; import the same public name from @bioagent/chatui.`);
  }
}

const assertCompatibilityForwarder = (filePath) => {
  const source = read(filePath);
  const relativePath = path.relative(prototypeRoot, filePath);
  if (!source.includes("from '@bioagent/chatui'")) {
    errors.push(`${relativePath} must forward public names from @bioagent/chatui.`);
  }
  const implementationPattern = /\b(?:className|useState|useEffect|useMemo|createElement)\b|return\s*\(|<[A-Z][A-Za-z0-9.]*(?:\s|>)/;
  if (implementationPattern.test(source)) {
    errors.push(`${relativePath} contains an implementation; compatibility files must remain pure re-exports.`);
  }
};

for (const filePath of sourceFiles(localChatDir)) assertCompatibilityForwarder(filePath);
assertCompatibilityForwarder(localCommonIndex);

if (errors.length > 0) {
  console.error('ChatUI prototype boundary check failed:\n');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(
  `ChatUI prototype boundary check passed: ${sourceFiles(pagesDir).length} pages and ${sourceFiles(localChatDir).length + 1} compatibility forwarders validated.`,
);

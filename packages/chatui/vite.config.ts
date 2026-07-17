import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const externalPackages = [
  'classnames',
  'highlight.js',
  'katex',
  'lucide-react',
  'mermaid',
  'react',
  'react-dom',
  'react-markdown',
  'rehype-highlight',
  'rehype-katex',
  'remark-emoji',
  'remark-gfm',
  'remark-math',
];

const isExternal = (id: string) =>
  !id.endsWith('.css') &&
  externalPackages.some((packageName) => id === packageName || id.startsWith(`${packageName}/`));

export default defineConfig({
  plugins: [react()],
  build: {
    // Preserve the prototype's Vite 4 production browser floor after upgrading
    // the builder. The Next.js application remains responsible for app-level
    // legacy-browser policy.
    target: ['es2020', 'chrome87', 'edge88', 'firefox78', 'safari14'],
    lib: {
      entry: {
        index: path.resolve(__dirname, 'src/index.ts'),
        showcase: path.resolve(__dirname, 'src/showcase/index.ts'),
      },
      formats: ['es'],
      fileName: (_format, entryName) => `${entryName}.js`,
      cssFileName: 'style',
    },
    rollupOptions: {
      external: isExternal,
    },
  },
  server: {
    host: true,
    port: 5174,
  },
});

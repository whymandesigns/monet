import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  // Declarations come from `tsc` instead: tsup's bundled rollup-plugin-dts
  // pins TypeScript 5.7 internally and crashes on TypeScript 7.
  dts: false,
  clean: true,
  treeshake: true,
  external: ['react', 'react-dom'],
});

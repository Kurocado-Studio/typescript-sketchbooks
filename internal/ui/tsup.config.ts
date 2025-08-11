/* eslint import/no-default-export: 0 */
import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
  ...options,
  bundle: true,
  entry: ['./src/index.ts'],
  target: ['esnext'],
  format: ['esm'],
  outDir: 'dist',
  dts: true,
  clean: true,
  splitting: true,
  treeshake: true,
}));

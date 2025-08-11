/* eslint import/no-default-export: 0 */
import { defineConfig } from 'tsup';
import {execSync} from "node:child_process";

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
  onSuccess: async (): Promise<void> => {
    const stdio = 'inherit';
    execSync('copyfiles -u 1 "src/domain/{styles,fonts}/**/*" dist', {
      stdio,
    });
    execSync('copyfiles -u 1 "src/domain/tokens/tokens.json" dist', {
      stdio,
    });
  },
}));

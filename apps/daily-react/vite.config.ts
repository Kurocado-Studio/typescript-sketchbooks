/* eslint-disable */
/* eslint-disable import/no-named-as-default */
import tailwindcssVite from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tailwindcssVite(), react(), tsconfigPaths()],
});

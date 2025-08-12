import {
  composeDesignSystem,
  designTokens,
} from '@kurocado-studio/ui-react-research-and-development';

const { tailwindTheme } = composeDesignSystem(designTokens);

export const content = [
  './src/**/*.{ts,tsx,css}',
  './stories/**/*.{ts,tsx}',
  './.storybook/**/*.{ts,tsx}',
  './node_modules/@kurocado-studio/ui-react-research-and-development',
  '../../internal/ui',
];

export const theme = tailwindTheme;

import {
  composeDesignSystem,
  designTokens,
} from '@kurocado-studio/ui-react-research-and-development';

const { tailwindTheme } = composeDesignSystem(designTokens);

export const content = [
  './src/**/*.{ts,tsx}',
  './stories/**/*.{ts,tsx}',
  './.storybook',
  './node_modules/@kurocado-studio/ui-react-research-and-development',
];

export const theme = tailwindTheme;

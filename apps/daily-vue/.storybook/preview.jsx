/* eslint import/no-default-export: 0 */
import designTokens from '@kurocado-studio/ui-research-and-development/tokens.json';
import '@kurocado-studio/ui-research-and-development/typography.css';
import { ThemeProvider } from '@kurocado-studio/ui-vue-research-and-development';
import { themes } from '@storybook/theming';

import '../tailwind.css';

const LIGHT_THEME = 'Light setup';
const DARK_THEME = 'Dark setup';

const preview = {
  globalTypes: {
    theme: {
      description: 'Global setup for components',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [LIGHT_THEME, DARK_THEME],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'light',
  },
  parameters: {
    controls: {
      matchers: {},
    },
    docs: {
      theme: window.matchMedia('(prefers-color-scheme: dark)').matches
        ? themes.dark
        : themes.light,
    },
  },
  tags: ['autodocs'],
};

export const decorators = [
  (storyFn, context) => {
    const selectedTheme = context.globals.theme === LIGHT_THEME;

    if (typeof window !== 'undefined') {
      document.documentElement.classList.toggle('dark', !selectedTheme);
    }

    return {
      components: { ThemeProvider, Story: storyFn() },
      setup() {
        return { designTokens };
      },
      template: `
        <ThemeProvider :theme="designTokens">
          <Story />
        </ThemeProvider>
      `,
    };
  },
];

export default preview;

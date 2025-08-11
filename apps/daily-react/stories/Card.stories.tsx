/* eslint import/no-default-export: 0 */
import type { Meta, StoryObj } from '@storybook/react';

import { Daily001 } from '../src/views/Daily001';

const meta: Meta = {
  component: Daily001,
  title: 'Screens/Daily UI 001 (Login)',
  parameters: {
    layout: 'fullscreen',
  },
  tags: [],
};

export const Preview: StoryObj = {
  name: 'Login Page',
};

export default meta;

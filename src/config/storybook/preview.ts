import { addDecorator } from '@storybook/react';
import { Themes } from '../../app/providers/ThemeProvider';
import { StyleDecorator } from '../../shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from '../../shared/config/storybook/RouterDecorator/RouterDecorator';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  ThemeDecorator(Themes.NORMAL),
  StyleDecorator,
  RouterDecorator,
];

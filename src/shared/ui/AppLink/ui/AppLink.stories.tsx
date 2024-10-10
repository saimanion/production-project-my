import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Themes } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from '../../../../shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { AppLink, AppLinkTheme } from './AppLink';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
  to: '/',
  theme: AppLinkTheme.PRIMARY,
};
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: 'Text',
  to: '/',
  theme: AppLinkTheme.PRIMARY,
};
PrimaryDark.decorators = [ThemeDecorator(Themes.DARK)];

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Text',
  to: '/',
  theme: AppLinkTheme.SECONDARY,
};

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
  children: 'Text',
  to: '/',
  theme: AppLinkTheme.SECONDARY,
};
SecondaryDark.decorators = [ThemeDecorator(Themes.DARK)];

export const Red = Template.bind({});
Red.args = {
  children: 'Text',
  to: '/',
  theme: AppLinkTheme.RED,
};
export const RedDark = Template.bind({});
RedDark.args = {
  children: 'Text',
  to: '/',
  theme: AppLinkTheme.RED,
};
RedDark.decorators = [ThemeDecorator(Themes.DARK)];

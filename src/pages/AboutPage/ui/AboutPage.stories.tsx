import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Themes } from 'app/providers/ThemeProvider';
import AboutPage from './AboutPage';
import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator/ThemeDecorator';

export default {
  title: 'pages/AboutPage',
  component: AboutPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = (args) => <AboutPage />;

export const Primary = Template.bind({});
Primary.args = {};
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {

};
PrimaryDark.decorators = [ThemeDecorator(Themes.DARK)];

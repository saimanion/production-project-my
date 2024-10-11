import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Navbar } from './Navbar';

export default {
  title: 'widgets/Navbar',
  component: Navbar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Navbar>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import './avatar.css';
import { Avatar } from './Avatar';

export default {
  title: 'Example/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => (
  <div className="full">
    <Avatar {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

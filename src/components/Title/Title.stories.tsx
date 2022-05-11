import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Title from '.';

export default {
  title: 'Components/Title',
  component: Title,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Boas-vindas',
};

export const Small = Template.bind({});
Small.args = {
  children: 'Small',
};

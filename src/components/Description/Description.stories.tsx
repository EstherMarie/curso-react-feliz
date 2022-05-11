import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Description from '.';

export default {
  title: 'components/Description',
  component: Description,
} as ComponentMeta<typeof Description>;

const Template: ComponentStory<typeof Description> = (args) => (
  <Description {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'Estamos felizes em te ver por aqui mais uma vez!',
};

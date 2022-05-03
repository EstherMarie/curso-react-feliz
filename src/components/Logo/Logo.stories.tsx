import { ComponentMeta, ComponentStory } from '@storybook/react';
import Logo from '.';

export default {
  title: 'components/Logo',
  component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {
  simple: false,
};

export const Simple = Template.bind({});
Simple.args = {
  simple: true,
};

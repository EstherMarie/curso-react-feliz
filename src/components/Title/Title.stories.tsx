import React from 'react';
import Title from '.';

export default {
  title: 'Components/Title',
  component: Title,
}

const Template = (args) => <Title {...args} />

export const Default = Template.bind({});
Default.args = {
  children: 'Default Title'
}

export const Small = Template.bind({});
Small.args = {
  children: "Small"
}
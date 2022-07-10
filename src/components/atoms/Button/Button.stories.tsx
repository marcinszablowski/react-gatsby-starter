import React from 'react';

import { Button } from './Button';

const Template = args => <Button {...args} />;

export const Primary = Template.bind({});

export default {
  component: Button,
  title: 'Atoms/Button',
  argTypes: {},
};

Primary.args = {};

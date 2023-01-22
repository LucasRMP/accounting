import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './button'

export default {
  title: 'ui/Button',
  component: Button,
  argTypes: {
    children: {
      name: 'Text',
      type: { name: 'string', required: true },
      defaultValue: 'Button',
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const Primary = Template.bind({})

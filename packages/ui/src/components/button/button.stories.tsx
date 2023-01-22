import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './button'

export default {
  title: 'ui/Button',
  component: Button,
  argTypes: {
    children: {
      type: { name: 'string', required: true },
      defaultValue: 'Button',
      description: 'The text to display inside the button',
    },
    fullWidth: {
      type: { name: 'boolean', required: false },
      defaultValue: false,
      description:
        'Whether the button should take up the full width of its container',
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const Primary = Template.bind({})

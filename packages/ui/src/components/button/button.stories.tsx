import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button, ButtonColor, ButtonVariant, ButtonSize } from './button'

export default {
  title: 'ui/Button',
  component: Button,
  args: {
    children: 'Hello World',
    color: ButtonColor.PRIMARY,
    variant: ButtonVariant.CONTAINED,
    size: ButtonSize.MEDIUM,
    fullWidth: false,
  },
  argTypes: {
    children: {
      type: { name: 'string', required: true },
      defaultValue: 'Button',
      description: 'The text to display inside the button',
    },
    color: {
      options: Object.values(ButtonColor),
      mapping: ButtonColor,
      control: {
        type: 'select',
      },
    },
    variant: {
      options: Object.values(ButtonVariant),
      mapping: ButtonVariant,
      control: {
        type: 'select',
      },
    },
    size: {
      options: Object.values(ButtonSize),
      mapping: ButtonSize,
      control: {
        type: 'select',
      },
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

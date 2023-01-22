import React from 'react'
import { cva } from 'class-variance-authority'

import {
  ButtonColor,
  ButtonSize,
  ButtonVariant,
  COMPOUND_VARIANTS,
} from './constants'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean
  color?: ButtonColor
  variant?: ButtonVariant
  size?: ButtonSize
}

const buttonStyles = cva(
  'font-bold text-xs text-lh-100 rounded-md transition-all uppercase',
  {
    variants: {
      color: {
        primary: '',
        success: '',
        error: '',
      },
      variant: {
        contained: 'text-white',
        outlined:
          'bg-transparent hover:bg-transparent border-2 hover:opacity-75',
        text: 'bg-transparent hover:bg-transparent border-0',
      },
      size: {
        sm: 'h-6 px-3 py-1',
        md: 'h-9 px-3 py-2',
      },
      fullWidth: {
        true: 'w-full',
        false: '',
      },
      disabled: {
        true: 'cursor-not-allowed',
        false: '',
      },
    },
    compoundVariants: COMPOUND_VARIANTS,
    defaultVariants: {
      color: 'primary',
      variant: 'contained',
      size: 'md',
    },
  },
)

export const Button: React.FC<ButtonProps> = ({
  children,
  fullWidth,
  color,
  variant,
  size,
  disabled,
  ...props
}) => {
  return (
    <button
      type="button"
      role="button"
      className={buttonStyles({ color, variant, size, fullWidth, disabled })}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

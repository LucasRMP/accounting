import React from 'react'
import clsx from 'clsx'
import { cva } from 'class-variance-authority'

export enum ButtonColor {
  PRIMARY = 'primary',
  SUCCESS = 'success',
  ERROR = 'error',
}

export enum ButtonVariant {
  OUTLINED = 'outlined',
  CONTAINED = 'contained',
}

export enum ButtonSize {
  SMALL = 'sm',
  MEDIUM = 'md',
  LARGE = 'lg',
}

export interface ButtonProps {
  fullWidth?: boolean
  color?: ButtonColor
  variant?: ButtonVariant
  size?: ButtonSize
}

const colorToClassName = {
  [ButtonColor.PRIMARY]: 'blue',
  [ButtonColor.SUCCESS]: 'green',
  [ButtonColor.ERROR]: 'red',
}

const compoundVariants = (
  [
    [ButtonColor.PRIMARY, ButtonVariant.OUTLINED],
    [ButtonColor.SUCCESS, ButtonVariant.OUTLINED],
    [ButtonColor.ERROR, ButtonVariant.OUTLINED],
  ] as [ButtonColor, ButtonVariant][]
).map(([color, variant]) => ({
  color,
  variant,
  className: `border-${colorToClassName[color]}-500 text-${colorToClassName[color]}-500`,
}))

const buttonStyles = cva('font-bold py-2 px-4 rounded-3xl transition-all', {
  variants: {
    color: {
      [ButtonColor.PRIMARY]: '',
      [ButtonColor.SUCCESS]: '',
      [ButtonColor.ERROR]: '',
    },
    variant: {
      [ButtonVariant.CONTAINED]: '',
      [ButtonVariant.OUTLINED]:
        'bg-transparent hover:bg-transparent border-2 hover:opacity-75',
    },
    size: {
      [ButtonSize.SMALL]: 'h-10 py-1 px-4',
      [ButtonSize.MEDIUM]: 'h-12',
      [ButtonSize.LARGE]: 'h-16',
    },
  },
  compoundVariants: [
    {
      color: ButtonColor.PRIMARY,
      size: ButtonSize.SMALL,
      className: 'uppercase',
    },
    ...compoundVariants,
  ],
  defaultVariants: {
    color: ButtonColor.PRIMARY,
    variant: ButtonVariant.CONTAINED,
    size: ButtonSize.MEDIUM,
  },
})

export const Button: React.FC<ButtonProps> = ({
  children,
  fullWidth,
  color,
  variant,
  size,
}) => {
  return (
    <button
      type="button"
      role="button"
      className={clsx(buttonStyles({ color, variant, size }), {
        'w-full': fullWidth,
      })}
    >
      {children}
    </button>
  )
}

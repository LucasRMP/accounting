import React from 'react'

import { ButtonColor, ButtonSize, ButtonVariant } from './constants'
import { buttonStyles } from './styles'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean
  color?: ButtonColor
  variant?: ButtonVariant
  size?: ButtonSize
}

export const Button: React.FC<ButtonProps> = ({
  children,
  fullWidth,
  color,
  variant,
  size,
  ...props
}) => {
  return (
    <button
      type="button"
      role="button"
      className={buttonStyles({
        color,
        variant,
        size,
        fullWidth,
      })}
      {...props}
    >
      {children}
    </button>
  )
}

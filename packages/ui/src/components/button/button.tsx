import React from 'react'
import clsx from 'clsx'

export interface ButtonProps {
  fullWidth?: boolean
}

export const Button: React.FC<ButtonProps> = ({ children, fullWidth }) => {
  return (
    <button
      type="button"
      role="button"
      className={clsx(
        'bg-blue-500 hover:bg-blue-700 h-12 text-white font-bold py-2 px-4 rounded-3xl transition-all',
        {
          'w-full': fullWidth,
        },
      )}
    >
      {children}
    </button>
  )
}

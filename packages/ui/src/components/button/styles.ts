import { cva } from 'class-variance-authority'
import { COMPOUND_VARIANTS } from './constants'

export const buttonStyles = cva(
  'font-semibold tracking-wider text-xs text-lh-100 rounded-md transition-all uppercase',
  {
    variants: {
      color: {
        primary: '',
        success: '',
        error: '',
      },
      variant: {
        contained: 'text-white dark:text-black',
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
    },
    compoundVariants: COMPOUND_VARIANTS,
    defaultVariants: {
      color: 'primary',
      variant: 'contained',
      size: 'md',
    },
  },
)

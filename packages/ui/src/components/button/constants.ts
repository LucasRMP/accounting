export type ButtonColor = 'primary' | 'success' | 'error'
export enum ButtonColorEnum {
  PRIMARY = 'primary',
  SUCCESS = 'success',
  ERROR = 'error',
}

export type ButtonVariant = 'outlined' | 'contained' | 'text'
export enum ButtonVariantEnum {
  OUTLINED = 'outlined',
  CONTAINED = 'contained',
  TEXT = 'text',
}

export type ButtonSize = 'sm' | 'md'
export enum ButtonSizeEnum {
  SMALL = 'sm',
  MEDIUM = 'md',
}

const colorToClassName = {
  [ButtonColorEnum.PRIMARY]: {
    [ButtonVariantEnum.CONTAINED]: 'bg-blue-500 hover:bg-blue-700',
    [ButtonVariantEnum.OUTLINED]: 'border-blue-500 text-blue-500',
    [ButtonVariantEnum.TEXT]: 'text-blue-500',
  },
  [ButtonColorEnum.SUCCESS]: {
    [ButtonVariantEnum.CONTAINED]: 'bg-green-500 hover:bg-green-700',
    [ButtonVariantEnum.OUTLINED]: 'border-green-500 text-green-500',
    [ButtonVariantEnum.TEXT]: 'text-green-500',
  },
  [ButtonColorEnum.ERROR]: {
    [ButtonVariantEnum.CONTAINED]: 'bg-red-500 hover:bg-red-700',
    [ButtonVariantEnum.OUTLINED]: 'border-red-500 text-red-500',
    [ButtonVariantEnum.TEXT]: 'text-red-500',
  },
}

export const COMPOUND_VARIANTS = [
  ...Object.values(ButtonColorEnum).reduce((acc, color) => {
    Object.values(ButtonVariantEnum).forEach(variant => {
      acc.push({
        color,
        variant,
        className: colorToClassName[color][variant],
      })
    })

    return acc
  }, [] as any[]),
  {
    variant: 'outlined',
    disabled: true,
    className: 'border-gray-500 text-gray-500 hover:opacity-100',
  },
  {
    variant: 'contained',
    disabled: true,
    className: 'bg-gray-500 hover:bg-gray-500',
  },
  {
    variant: 'text',
    disabled: true,
    className: 'text-gray-500',
  },
]

import resolveConfig from 'tailwindcss/resolveConfig'

const tailwindConfig = require('../../tailwind.config.js')
const fullConfig = resolveConfig(tailwindConfig)

interface ITheme {
  colors: {
    disabled: string
    primary: string
    secondary: string
    info: string
    success: string
    warning: string
    danger: string
    transparent: string
    muted: string
    'disabled-outline': string
    'primary-outline': string
    'secondary-outline': string
    'info-outline': string
    'success-outline': string
    'warning-outline': string
    'danger-outline': string
    'transparent-outline': string
    'muted-outline': string
    'info-background': string
  }
  fontSize: {
    xs: string
    sm: string
    md: string
    base: string
    lg: string
    xl: string
    '2xl': string
    '3xl': string
    '4xl': string
    '5xl': string
    '6xl': string
    '7xl': string
    '8xl': string
    '9xl': string
    '20xl': string
  }
}

// @ts-ignore
const theme: ITheme = fullConfig.theme

export default {
  ...theme,
  backdropColor: 'rgba(0, 0, 0, 0.5)',
}

import { transparentize } from 'polished'

export const theme = {
  colors: {
    primary: '#ffd836',
    primaryHover: transparentize(0.3, '#ffd836'),
    white: '#ffffff',
    black: '#212121',
    blackHover: transparentize(0.3, '#212121'),

    text: '#616161',
    textHover: transparentize(0.3, '#616161'),
    background: '#fafafa',
    shape: '#ffffff',
    darkShape: '#f1f1f1'
  },
  transitions: {
    default: 'all 300ms ease'
  },
  shadows: {
    default: `0px 0px 16px 0px ${transparentize(0.94, '#000000')}`
  },
  mediaquerys: {
    laptopStart: 1024
  }
} as const

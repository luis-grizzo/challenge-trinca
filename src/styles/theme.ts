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
    shape: '#ffffff',
    background: '#fafafa',
  },
  transitions: {
    default: 'all 300ms ease'
  }
} as const
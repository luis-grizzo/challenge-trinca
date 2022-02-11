import { darken, lighten, transparentize } from 'polished'

export const theme = {
  colors: {
    primary: '#ffd836',
    primaryHover: darken(0.3, '#ffd836'),
    white: '#ffffff',
    black: '#212121',
    blackHover: lighten(0.1, '#212121'),
    disabled: '#e0e0e0',
    darkDisabled: darken(0.3, '#e0e0e0'),

    text: '#616161',
    textHover: darken(0.3, '#616161'),

    background: '#fafafa',
    opaqueBackground: transparentize(0.7, '#212121'),

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

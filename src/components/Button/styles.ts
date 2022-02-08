import styled, { css, DefaultTheme } from 'styled-components'

import { ButtonProps } from '.'

type StyledButtonProps = Pick<ButtonProps, 'fullWidth' | 'variant'>

const modifiers = {
  fullWidth: () => css`
    width: 100%;
  `
}

const variants = {
  default: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.black};
    color: ${theme.colors.white};
    padding: 1.4rem 1.6rem;

    &:hover {
      background-color: ${theme.colors.blackHover};
    }
  `,
  ghost: (theme: DefaultTheme) => css`
    background-color: transparent;
    color: ${theme.colors.text};
    padding: 1rem;

    &:hover {
      color: ${theme.colors.textHover};
    }
  `
}

export const Button = styled.button<StyledButtonProps>`
  ${({ theme, fullWidth, variant }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    font-size: 1.8rem;
    font-weight: 700;
    border-radius: 0.2rem;

    ${fullWidth && modifiers.fullWidth()}
    ${variant && variants[variant](theme)}
  `}
`

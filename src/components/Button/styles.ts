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

    &:hover:not(:disabled) {
      background-color: ${theme.colors.blackHover};
    }
  `,
  ghost: (theme: DefaultTheme) => css`
    background-color: transparent;
    color: ${theme.colors.black};
    padding: 1rem;

    &:hover:not(:disabled) {
      color: ${theme.colors.blackHover};
    }
  `,
  outlined: (theme: DefaultTheme) => css`
    background-color: transparent;
    color: ${theme.colors.black};
    border: 0.2rem solid ${theme.colors.black};
    padding: 1.4rem 1.6rem;
    backdrop-filter: blur(0.4rem);

    &:hover:not(:disabled) {
      color: ${theme.colors.blackHover};
      border-color: ${theme.colors.blackHover};
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
    transition: ${theme.transitions.default};

    &:disabled {
      background-color: ${theme.colors.disabled};
      color: ${theme.colors.darkDisabled};
      cursor: not-allowed;
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 0.3rem ${theme.colors.blackHover};
    }

    ${fullWidth && modifiers.fullWidth()}
    ${variant && variants[variant](theme)}
  `}
`

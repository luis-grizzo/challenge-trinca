import styled, { css } from "styled-components";

import { ButtonProps } from ".";

type StyledButtonProps = Pick<ButtonProps, 'fullWidth'>

const modifiers = {
  fullWidth: () => css`
    width: 100%;
  `
}

export const Button = styled.button<StyledButtonProps>`
  ${({theme, fullWidth}) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 1.4rem 1.8rem;
    border-radius: 1.8rem;

    background-color: ${theme.colors.black};
    
    font-size: 1.8rem;
    font-weight: 700;
    color: ${theme.colors.white};

    ${fullWidth && modifiers.fullWidth()}
  `}
`
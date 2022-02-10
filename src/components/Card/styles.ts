import styled, { css, DefaultTheme } from 'styled-components'

import { CardProps } from '.'

type StyledCardProps = Pick<CardProps, 'type'>

const modifiers = {
  display: (theme: DefaultTheme) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 10rem auto;
    gap: 1rem;

    background-color: ${theme.colors.shape};

    .c__event-date {
      grid-column-start: span 2;

      font-size: 2.8rem;
      font-weight: 800;
    }

    .c__description {
      grid-column-start: span 2;

      font-size: 2.1rem;
      font-weight: 700;
      color: ${theme.colors.text};
    }

    .c__guests-number,
    .c__amount {
      display: flex;
      align-items: center;
      gap: 1rem;

      font-size: 2.1rem;
      font-weight: 500;
    }

    .c__amount {
      justify-content: flex-end;
    }
  `,
  create: (theme: DefaultTheme) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    background-color: ${theme.colors.darkShape};

    .c__image-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 8rem;
      aspect-ratio: 1/1;

      border-radius: 50%;
      background-color: ${theme.colors.primary};
    }

    .c__description {
      font-size: 2.1rem;
      font-weight: 700;
    }
  `
}

export const Card = styled.div<StyledCardProps>`
  ${({ theme, type }) => css`
    padding: 2rem 2.5rem;
    border-radius: 0.2rem;
    box-shadow: ${theme.shadows.default};
    cursor: pointer;

    ${type && modifiers[type](theme)}
  `}
`

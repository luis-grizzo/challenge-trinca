import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-start;
    gap: 1.6rem;

    width: 100%;

    .w__checkbox {
      position: absolute;
      opacity: 0;
      visibility: hidden;
    }

    .w__checkbox:not(:checked) + .w__label::before,
    .w__checkbox + .w__label::before {
      content: '';

      width: 2.5rem;
      aspect-ratio: 1/1;
      border-radius: 50%;
      transition: ${theme.transitions.default};
      cursor: pointer;
    }

    .w__checkbox:not(:checked) + .w__label::before {
      background-color: ${theme.colors.primary};
    }

    .w__checkbox + .w__label::before {
      background-color: ${theme.colors.darkShape};
    }

    .w__label {
      display: flex;
      align-items: center;
      gap: 1rem;

      font-size: 2.1rem;
      font-weight: 500;
    }
  `}
`

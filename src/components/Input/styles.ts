import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.6rem;

    width: 100%;

    .w__label {
      font-size: 2.1rem;
      font-weight: 500;
    }

    .w__input {
      padding: 1.4rem 2rem;
      border-radius: 0.2rem;
      background-color: ${theme.colors.shape};
      border: 1px solid ${theme.colors.darkShape};

      width: 100%;

      &::placeholder {
        font-style: italic;
      }
    }
  `}
`

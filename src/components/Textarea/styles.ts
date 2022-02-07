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
      font-weight: 700;
    }

    .w__textarea {
      width: 100%;
      max-height: 50rem;

      padding: 1.4rem 2rem;
      border-radius: 0.2rem;
      resize: vertical;
      background-color: ${theme.colors.shape};

      &::placeholder {
        font-style: italic;
      }
    }
  `}
`

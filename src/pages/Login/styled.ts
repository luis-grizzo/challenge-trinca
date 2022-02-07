import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;

    .w__form {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 5rem;

      max-width: 50rem;

      @media only screen and (max-width: ${String(
          theme.mediaquerys.laptopStart
        )}) {
        max-width: unset;
      }
    }
  `}
`

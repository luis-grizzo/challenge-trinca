import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;

    .w__form {
      display: flex;
      flex-direction: column;
      gap: 5rem;

      width: 100%;
      max-width: 50rem;

      @media only screen and (max-width: ${String(
          theme.mediaquerys.laptopStart
        )}) {
        max-width: unset;
      }
    }

    .wm__register-form {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 5rem;

      width: 100%;
    }
  `}
`

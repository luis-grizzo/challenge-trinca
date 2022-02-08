import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .w__controls {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .w__page {
      display: flex;
      flex-direction: column;
      gap: 5rem;

      padding: 5rem;
      background-color: ${theme.colors.shape};
      border-radius: 0.2rem;
      box-shadow: ${theme.shadows.default};

      .wp__header {
        display: grid;
        grid-template-columns: 1fr auto;
        grid-auto-rows: auto;
        justify-content: space-between;
        gap: 2rem;

        .wph__date {
          font-size: 2.8rem;
          font-weight: 800;
        }

        .wph__title {
          font-size: 3.6rem;
          font-weight: 700;
        }

        .wph__guests,
        .wph__money {
          display: flex;
          align-items: center;
          gap: 1rem;

          font-size: 2.1rem;
          font-weight: 500;
        }

        .wph__additional-information {
          padding: 2rem;
          border-left: 0.4rem solid ${theme.colors.text};
          color: ${theme.colors.text};
        }
      }

      .wp__list {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 2rem;

        .wpl__row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;

          padding: 1rem 0;
          border-bottom: 2px solid ${theme.colors.primary};

          .wplr__amount {
            font-size: 2.1rem;
            font-weight: 700;
          }
        }
      }
    }

    .wm__form {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 5rem;

      width: 100%;

      .wmf__money {
        display: flex;
        align-items: center;
        gap: 1rem;

        width: 100%;
      }
    }
  `}
`

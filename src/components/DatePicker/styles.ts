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

      width: 100%;
      border-radius: 0.2rem;
      background-color: ${theme.colors.shape};
      border: 1px solid ${theme.colors.darkShape};

      &::placeholder {
        font-style: italic;
      }
    }

    .rmdp-container {
      width: 100%;

      .rmdp-shadow {
        box-shadow: ${theme.shadows.default};
      }

      .rmdp-calendar {
        display: flex;
        flex-direction: column;
        gap: 2rem;

        .rmdp-header-values,
        .rmdp-week-day {
          color: ${theme.colors.black};
          font-weight: 800;
        }

        .rmdp-day {
          .sd,
          span {
            color: ${theme.colors.text};
            transition: ${theme.transitions.default};
            font-weight: 700;
          }

          &:hover:not(.rmdp-disabled):not(.rmdp-day-hidden) {
            .sd,
            span {
              background-color: ${theme.colors.primary};
              color: ${theme.colors.black};
            }
          }

          &.rmdp-disabled {
            .sd,
            span {
              color: ${theme.colors.textHover};
              font-weight: 300;
            }
          }
        }

        .rmdp-today {
          .sd,
          span {
            background-color: ${theme.colors.black};
            color: ${theme.colors.white};
          }
        }

        .rmdp-selected {
          .sd,
          span {
            background-color: ${theme.colors.primary};
            color: ${theme.colors.black};
            box-shadow: none;
          }
        }
      }
    }
  `}
`

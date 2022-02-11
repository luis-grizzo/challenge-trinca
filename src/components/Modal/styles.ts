import styled, { css } from 'styled-components'

export const Modal = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 100vh;
    width: 100vw;

    .m__content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 5rem;

      max-height: 90vh;
      width: 90vw;
      max-width: 720px;

      padding: 5rem;
      background-color: ${theme.colors.background};
      box-shadow: ${theme.shadows.default};
      overflow: auto;
      z-index: 20;

      .mc__header {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 2rem;

        width: 100%;

        .mch__title {
          font-size: 3.6rem;
          font-weight: 800;
        }

        .mch__close-button {
          background-color: ${theme.colors.darkShape};
          border: none;
          border-radius: 50%;
          padding: 0.5rem;
        }
      }
    }

    .m__overlay {
      position: absolute;
      top: 0;
      left: 0;

      height: 100vh;
      width: 100vw;

      backdrop-filter: blur(2px);
      background-color: ${theme.colors.opaqueBackground};
      cursor: pointer;
      z-index: 10;
    }
  `}
`

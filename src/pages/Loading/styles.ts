import styled, { css, keyframes } from 'styled-components'

import pattern_bbq from 'assets/pattern_bbq.svg'

const indeterminateAnimation = keyframes`
  0% {
    transform:  translateX(0) scaleX(0);
  }
  40% {
    transform:  translateX(0) scaleX(0.4);
  }
  100% {
    transform:  translateX(100%) scaleX(0.5);
  }
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 100vh;
    overflow: hidden;

    background-color: ${theme.colors.primary};
    background-image: url(${pattern_bbq});
    background-size: cover;

    .w__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4rem;

      .wc__image {
        width: 20rem;
        aspect-ratio: 1/1;

        box-shadow: ${theme.shadows.default};
        backdrop-filter: blur(0.4rem);
      }

      .wc__progress-bar {
        height: 0.5rem;
        background-color: ${theme.colors.opaqueBackground};
        width: 100%;
        overflow: hidden;

        .wcpb__bar {
          width: 100%;
          height: 100%;
          background-color: ${theme.colors.black};
          animation: ${indeterminateAnimation} 1s infinite linear;
          transform-origin: 0% 50%;
        }
      }
    }
  `}
`

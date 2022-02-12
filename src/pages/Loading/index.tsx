import { useSpring, animated } from 'react-spring'

import logo_trinca from 'assets/logo_trinca.svg'

import * as S from './styles'

export const Loading = (): React.ReactElement => {
  const contentAnimation = useSpring({
    from: { opacity: 0, y: 500 },
    to: { opacity: 1, y: 0 }
  })

  return (
    <S.Wrapper>
      <animated.div style={contentAnimation} className="w__content">
        <img src={logo_trinca} alt="Logo Trinca" className="wc__image" />
        <div className="wc__progress-bar">
          <div className="wcpb__bar" />
        </div>
      </animated.div>
    </S.Wrapper>
  )
}

import { Outlet } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'

import logo_trinca from 'assets/logo_trinca.svg'

import * as S from './styles'

const AuthLayout = (): React.ReactElement => {
  const titleAnimation = useSpring({
    from: { opacity: 0, y: -300 },
    to: { opacity: 1, y: 0 }
  })

  const footerAnimation = useSpring({
    from: { opacity: 0, y: 300 },
    to: { opacity: 1, y: 0 }
  })

  return (
    <S.Body>
      <div className="b__header">
        <animated.h1 style={titleAnimation} className="bh__title">
          Agenda de Churras
        </animated.h1>
      </div>
      <div className="b__page-container">
        <Outlet />
      </div>
      <footer className="b__footer">
        <animated.img
          style={footerAnimation}
          src={logo_trinca}
          alt="Trinca's logo"
          className="bf__image"
        />
      </footer>
    </S.Body>
  )
}

export default AuthLayout

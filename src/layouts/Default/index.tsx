import { Outlet } from 'react-router-dom'

import logo_trinca from 'assets/logo_trinca.svg'

import * as S from './styles'

const DefaultLayout = (): React.ReactElement => {
  return (
    <S.Body>
      <div className="b__header">
        <h1 className="bh__title">Agenda de Churras</h1>
      </div>
      <div className="b__page-container">
        <Outlet />
      </div>
      <footer className="b__footer">
        <img src={logo_trinca} alt="Trinca's logo" className="bf__image" />
      </footer>
    </S.Body>
  )
}

export default DefaultLayout

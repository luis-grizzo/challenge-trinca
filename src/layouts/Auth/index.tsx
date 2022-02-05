import { Outlet } from 'react-router-dom'

import trincalogo from 'assets/trincalogo.svg'

import * as S from './styles'

const AuthLayout = (): React.ReactElement => {
  return (
    <S.Body>
      <div className="b__header">
        <h1 className="bh__title">Agenda de Churras</h1>
      </div>
      <div className="b__page-container">
        <Outlet />
      </div>
      <div className="b__footer">
        <img src={trincalogo} alt="Trinca's logo" className="bf__image" />
      </div>
    </S.Body>
  )
}

export default AuthLayout

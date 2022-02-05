import Button from 'components/Button'

import * as S from './styled'

const Login = (): React.ReactElement => {
  return (
    <S.Wrapper>
      <h1>Login</h1>
      <Button fullWidth>Entrar</Button>
    </S.Wrapper>
  )
}

export default Login

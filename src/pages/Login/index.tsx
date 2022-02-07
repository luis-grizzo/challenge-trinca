import Input from 'components/Input'
import Button from 'components/Button'

import * as S from './styled'

const Login = (): React.ReactElement => {
  return (
    <S.Wrapper>
      <form className="w__form">
        <Input type="email" label="Login" placeholder="e-mail" />
        <Input type="password" label="Senha" placeholder="senha" />
        <Button type="submit" fullWidth>
          Entrar
        </Button>
      </form>
    </S.Wrapper>
  )
}

export default Login

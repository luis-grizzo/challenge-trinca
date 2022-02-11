import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { MdCreate } from 'react-icons/md'

import { validateLoginInStorage, setLoginInStorage } from 'services/logins'
import { useAuth } from 'shared/hooks/auth'
import { Input, Button, Modal } from 'components'

import * as S from './styled'

interface ILoginInputs {
  email: string
  password: string
}

interface IRegisterInputs {
  email: string
  password: string
}

const Login = (): React.ReactElement => {
  const { login } = useAuth()

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [loginForm, setLoginForm] = useState<ILoginInputs>({
    email: '',
    password: ''
  })
  const [registerForm, setRegisterForm] = useState<IRegisterInputs>({
    email: '',
    password: ''
  })

  const onLoginSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    const { email, password } = loginForm

    const authenticated = validateLoginInStorage(email, password)

    if (authenticated) {
      login(authenticated)
      setLoginForm({
        email: '',
        password: ''
      })
    }
  }

  const onRegisterSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    const { email, password } = registerForm

    setLoginInStorage(email, password)

    setModalIsOpen(false)
    setRegisterForm({
      email: '',
      password: ''
    })

    toast.success('Login cadastrado com sucesso!')
  }

  return (
    <S.Wrapper>
      <form onSubmit={onLoginSubmit} className="w__login-form">
        <Input
          value={loginForm.email}
          onChange={(event) =>
            setLoginForm((prevValue) => ({
              ...prevValue,
              email: event.target.value
            }))
          }
          label="E-mail"
          type="email"
          placeholder="exemplo@exemplo.com"
          autoFocus
        />

        <Input
          value={loginForm.password}
          onChange={(event) =>
            setLoginForm((prevValue) => ({
              ...prevValue,
              password: event.target.value
            }))
          }
          name="password"
          label="Senha"
          type="password"
          placeholder="Sua senha"
        />

        <Button variant="default" type="submit" fullWidth>
          Entrar
        </Button>
      </form>

      <Button variant="ghost" onClick={() => setModalIsOpen(true)}>
        Primeira vez? Cadastre-se!
      </Button>

      <Modal
        isOpen={modalIsOpen}
        modalTitle="Adicionar Conta"
        onClose={() => setModalIsOpen(false)}
      >
        <form onSubmit={onRegisterSubmit} className="wm__register-form">
          <Input
            value={registerForm.email}
            onChange={(event) =>
              setRegisterForm((prevValue) => ({
                ...prevValue,
                email: event.target.value
              }))
            }
            label="E-mail"
            type="email"
            placeholder="Seu email, tipo: exemplo@exemplo.com"
            autoFocus
          />

          <Input
            value={registerForm.password}
            onChange={(event) =>
              setRegisterForm((prevValue) => ({
                ...prevValue,
                password: event.target.value
              }))
            }
            label="Senha"
            type="password"
            placeholder="Sua senha secreta ;)"
          />

          <Button
            variant="default"
            fullWidth
            icon={<MdCreate />}
            type="submit"
            disabled={!registerForm.email || !registerForm.password}
          >
            Adicionar
          </Button>
        </form>
      </Modal>
    </S.Wrapper>
  )
}

export default Login

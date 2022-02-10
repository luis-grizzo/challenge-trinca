import { useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { MdCreate } from 'react-icons/md'

import { useAuth } from 'shared/hooks/auth'

import { validateLoginInStorage, setLoginInStorage } from 'services/logins'

import { Input, Button, Modal } from 'components'

import * as S from './styled'

type LoginInputs = {
  email: string
  password: string
}

type RegisterInputs = {
  email: string
  password: string
}

const Login = (): React.ReactElement => {
  const { login } = useAuth()

  const [modalIsOpen, setModalIsOpen] = useState(false)

  const registerForm = useForm<RegisterInputs>({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const loginForm = useForm<LoginInputs>({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onLoginSubmit: SubmitHandler<LoginInputs> = ({ email, password }) => {
    const response = validateLoginInStorage(email, password)
    response && login()
  }

  const onRegisterSubmit: SubmitHandler<RegisterInputs> = ({
    email,
    password
  }) => {
    setLoginInStorage(email, password)
    setModalIsOpen(false)
    toast.success('Login cadastrado com sucesso!')
  }

  return (
    <S.Wrapper>
      <form
        onSubmit={loginForm.handleSubmit(onLoginSubmit)}
        className="w__login-form"
      >
        <Controller
          name="email"
          control={loginForm.control}
          render={({ field }) => (
            <Input
              label="E-mail"
              type="email"
              placeholder="exemplo@exemplo.com"
              {...field}
            />
          )}
        />

        <Controller
          name="password"
          control={loginForm.control}
          render={({ field }) => (
            <Input
              label="Senha"
              type="password"
              placeholder="Sua senha"
              {...field}
            />
          )}
        />

        <Button type="submit" fullWidth>
          Entrar
        </Button>
      </form>

      <Button variant="ghost" onClick={() => setModalIsOpen(true)}>
        Primeira vez? Cadastre-se!
      </Button>

      <Modal
        isOpen={modalIsOpen}
        modalTitle="Cadastro"
        onClose={() => setModalIsOpen(false)}
      >
        <form
          onSubmit={registerForm.handleSubmit(onRegisterSubmit)}
          className="wm__register-form"
        >
          <Controller
            name="email"
            control={registerForm.control}
            render={({ field }) => (
              <Input
                label="E-mail"
                type="email"
                placeholder="exemplo@exemplo.com"
                {...field}
              />
            )}
          />

          <Controller
            name="password"
            control={registerForm.control}
            render={({ field }) => (
              <Input
                label="Senha"
                type="password"
                placeholder="Sua senha"
                {...field}
              />
            )}
          />

          <Button
            fullWidth
            icon={<MdCreate />}
            type="submit"
            disabled={!registerForm.formState.isDirty}
          >
            Criar Conta
          </Button>
        </form>
      </Modal>
    </S.Wrapper>
  )
}

export default Login

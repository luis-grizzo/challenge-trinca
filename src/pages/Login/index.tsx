import { useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { MdCreate } from 'react-icons/md'

import { useAuth } from 'shared/hooks/auth/use-auth'

import { ILogin } from 'shared/types/login'

import Input from 'components/Input'
import Button from 'components/Button'
import Modal from 'components/Modal'

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
    const logins = localStorage.getItem('logins')

    if (logins) {
      const loginsArray = JSON.parse(logins) as Array<ILogin>

      loginsArray.filter(
        (item) => item.email === email && item.password === password
      ).length > 0
        ? login()
        : toast.error('Login não confere.')
    } else {
      toast.error('Não há logins cadastrados.')
    }
  }

  const onRegisterSubmit: SubmitHandler<RegisterInputs> = ({
    email,
    password
  }) => {
    const logins = localStorage.getItem('logins')

    if (logins) {
      const loginsArray = JSON.parse(logins)
      const newLoginsArray = [
        ...loginsArray,
        {
          id: `${Math.round(Math.random() * 10000)}`,
          email,
          password
        }
      ]

      localStorage.setItem('logins', JSON.stringify(newLoginsArray))
    } else {
      localStorage.setItem(
        'logins',
        JSON.stringify([
          { id: `${Math.round(Math.random() * 10000)}`, email, password }
        ])
      )
    }

    setModalIsOpen(false)
    toast.success('Login cadastrado com sucesso!')
  }

  return (
    <S.Wrapper>
      <form
        onSubmit={loginForm.handleSubmit(onLoginSubmit)}
        className="w__form"
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

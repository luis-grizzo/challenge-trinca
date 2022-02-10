import { useState, useLayoutEffect } from 'react'

import { AuthContext } from './use-auth'

import { ILogin } from 'shared/types'

import {
  setAuthSessionInStorage,
  removeAuthSessionInStorage,
  getAuthSessionInStorage
} from 'services/auth'

type AuthProviderProps = {
  children: React.ReactNode
}

export const AuthProvider = ({
  children
}: AuthProviderProps): React.ReactElement => {
  const [isLogged, setIsLogged] = useState(false)

  useLayoutEffect(() => {
    const authenticated = getAuthSessionInStorage()

    setIsLogged(authenticated)
  }, [])

  const login = (login: ILogin) => {
    setAuthSessionInStorage(login)
    setIsLogged(true)
  }

  const logout = () => {
    removeAuthSessionInStorage()
    setIsLogged(false)
  }

  return (
    <AuthContext.Provider value={{ isLogged, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

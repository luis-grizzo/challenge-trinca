import { useState } from 'react'

import { AuthContext } from './use-auth'

type AuthProviderProps = {
  children: React.ReactNode
}

export const AuthProvider = ({
  children
}: AuthProviderProps): React.ReactElement => {
  const [isLogged, setIsLogged] = useState(false)

  const login = () => setIsLogged(true)

  const logout = () => setIsLogged(false)

  return (
    <AuthContext.Provider value={{ isLogged, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

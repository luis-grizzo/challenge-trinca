import { createContext, useContext } from 'react'

type UseAuthData = {
  isLogged: boolean
  login: () => void
  logout: () => void
}

export const AuthContext = createContext<UseAuthData | undefined>(undefined)

export const useAuth = (): UseAuthData => {
  const context = useContext(AuthContext)

  if (!context)
    throw new Error(
      'useAuth can only be called inside of a AuthProvider component'
    )

  return context
}

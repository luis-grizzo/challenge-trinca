import { toast } from 'react-toastify'

import { getParsedLoginsStorage } from './getParsedLoginsStorage'

export const validateLoginInStorage = (
  email: string,
  password: string
): boolean => {
  const parsedStorage = getParsedLoginsStorage()

  const filter = parsedStorage.filter(
    (login) => login.email === email && login.password === password
  )

  if (filter[0]) return true

  toast.error('Login inválido.')
  return false
}

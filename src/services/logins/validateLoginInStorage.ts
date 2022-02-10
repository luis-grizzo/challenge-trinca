import { toast } from 'react-toastify'
import { ILogin } from 'shared/types'

import { getParsedLoginsStorage } from './getParsedLoginsStorage'

export const validateLoginInStorage = (
  email: string,
  password: string
): ILogin | null => {
  const parsedStorage = getParsedLoginsStorage()

  const filter = parsedStorage.filter(
    (login) => login.email === email && login.password === password
  )

  if (filter[0]) return filter[0]

  toast.error('Login inválido.')
  return null
}

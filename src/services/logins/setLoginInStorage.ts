import { ILogin } from 'shared/types'
import { generateId } from 'shared/utils'

import { getParsedLoginsStorage } from './getParsedLoginsStorage'

export const setLoginInStorage = (email: string, password: string) => {
  const parsedStorage = getParsedLoginsStorage()

  const newStorage: ILogin[] = [
    ...parsedStorage,
    {
      id: generateId(),
      email,
      password
    }
  ]

  localStorage.setItem('@churras-trinca/logins', JSON.stringify(newStorage))
}

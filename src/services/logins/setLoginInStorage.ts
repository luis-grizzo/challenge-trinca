import { ILogin } from 'shared/types/login'

import { generateId } from 'utils/generate-id'

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

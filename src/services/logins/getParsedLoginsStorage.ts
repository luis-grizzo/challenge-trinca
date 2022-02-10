import { ILogin } from 'shared/types/login'

export const getParsedLoginsStorage = (): ILogin[] => {
  !localStorage.getItem('@churras-trinca/logins') &&
    localStorage.setItem('@churras-trinca/logins', JSON.stringify([]))

  const storage = localStorage.getItem('@churras-trinca/logins')

  const parsedStorage = storage && JSON.parse(storage)

  return parsedStorage
}

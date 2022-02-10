import { ILogin } from 'shared/types'

export const setAuthSessionInStorage = (login: ILogin) => {
  sessionStorage.setItem('@churras-trinca/auth', JSON.stringify(login))
}

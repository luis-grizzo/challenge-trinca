export const getAuthSessionInStorage = () => {
  const session = sessionStorage.getItem('@churras-trinca/auth')

  return !!session
}

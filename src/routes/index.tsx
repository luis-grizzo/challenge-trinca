import { useRoutes } from 'react-router-dom'

import { useAuth } from 'shared/hooks/auth/use-auth'

import { protectedRoutes } from './protected'
import { publicRoutes } from './public'

const AppRoutes = (): React.ReactElement => {
  const { isLogged } = useAuth()

  const routes = isLogged ? protectedRoutes : publicRoutes

  const element = useRoutes(routes)

  return <>{element}</>
}

export default AppRoutes

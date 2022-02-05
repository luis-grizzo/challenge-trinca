import { useRoutes } from 'react-router-dom'

import { protectedRoutes } from './protected'
import { publicRoutes } from './public'

const AppRoutes = (): React.ReactElement => {
  const auth = false

  const routes = auth ? protectedRoutes : publicRoutes

  const element = useRoutes(routes)

  return (
    <>
      {element}
    </>
  )
}

export default AppRoutes

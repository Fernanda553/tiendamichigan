import { Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../routes/routes'
import PrivateRoute from '../routes/PrivateRoute'
import PublicRoute from '../routes/PublicRoute'

export const AllRoutes = () => {
  return (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route
          key={path}
          path={path}
          element={<PublicRoute> <Component /> </PublicRoute>}
        />
      ))}
      {privateRoutes.map(({ path, Component }) => (
        <Route
          key={path}
          path={path}
          element={<PrivateRoute> <Component /> </PrivateRoute>}
        />
      ))}
    </Routes>
  )
}

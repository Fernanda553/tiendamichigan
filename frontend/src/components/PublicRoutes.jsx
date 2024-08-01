import { Route, Routes } from 'react-router-dom'
import { publicRoutes } from '../routes/routes'
import PublicRoute from '../routes/PublicRoute'

export const PublicRoutes = () => {
  return (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route
          key={path}
          path={path}
          element={<PublicRoute> <Component /> </PublicRoute>}
        />
      ))}
    </Routes>
  )
}

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import * as components from './components'
import MichiContext from './context/MichiContex'
import useCart from './hooks/useCart'
import { publicRoutes, privateRoutes } from './routes/routes'
import PublicRoute from './routes/PublicRoute'

function App () {
  const allState = useCart()

  return (
    <MichiContext.Provider value={allState}>
      <BrowserRouter>
        <components.Navigation />
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
              element={<privateRoutes> <Component /> </privateRoutes>}
            />
          ))}

        </Routes>
        <components.Footer />
      </BrowserRouter>
    </MichiContext.Provider>
  )
}

export default App

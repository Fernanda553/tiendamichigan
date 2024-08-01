import { BrowserRouter, Routes, Route } from 'react-router-dom'
import * as components from './components'
import MichiContext from './context/MichiContex'
import useCart from './hooks/useCart'
import { privateRoutes } from './routes/routes'
import { PublicRoutes } from './components/PublicRoutes'

function App () {
  const allState = useCart()

  return (
    <MichiContext.Provider value={allState}>
      <BrowserRouter>
        <components.Navigation />
        <PublicRoutes />
        <Routes>

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

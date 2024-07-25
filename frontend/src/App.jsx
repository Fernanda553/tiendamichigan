import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PublicRoute, PrivateRoute } from './routes'
import * as components from './components'
import * as viewsStore from './views/index'
import MichiContext from './context/MichiContex'
import useCart from './hooks/useCart'

function App () {
  const allState = useCart()

  return (
    <MichiContext.Provider value={allState}>
      <BrowserRouter>
        <components.Navigation />
        <Routes>
          <Route
            path='/'
            element={<PublicRoute> <viewsStore.Home /></PublicRoute>}
          />
          <Route
            path='/carrito'
            element={<PrivateRoute><viewsStore.Carrito /></PrivateRoute>}
          />
          <Route
            path='/login'
            element={<PublicRoute><viewsStore.Login /></PublicRoute>}
          />
          <Route
            path='/register'
            element={<PublicRoute><viewsStore.Register /></PublicRoute>}
          />
          <Route
            path='/products/:id'
            element={<PublicRoute><viewsStore.Product /></PublicRoute>}
          />
          <Route
            path='/newproduct'
            element={<PrivateRoute><viewsStore.NewProduct /></PrivateRoute>}
          />
          <Route
            path='/profile'
            element={<PrivateRoute><viewsStore.Profile /></PrivateRoute>}
          />
          <Route path='/thanks' element={<viewsStore.Thanks />} />
          <Route path='*' element={<viewsStore.NotFound />} />
        </Routes>
        <components.Footer />
      </BrowserRouter>
    </MichiContext.Provider>
  )
}

export default App

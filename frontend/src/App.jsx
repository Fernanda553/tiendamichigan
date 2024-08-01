import { BrowserRouter } from 'react-router-dom'
import * as components from './components'
import MichiContext from './context/MichiContex'
import useCart from './hooks/useCart'
import { AllRoutes } from './components/AllRoutes'

function App () {
  const allState = useCart()

  return (
    <MichiContext.Provider value={allState}>
      <BrowserRouter>
        <components.Navigation />
        <AllRoutes />
        <components.Footer />
      </BrowserRouter>
    </MichiContext.Provider>
  )
}

export default App

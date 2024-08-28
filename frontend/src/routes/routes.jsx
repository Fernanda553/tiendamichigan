import * as views from '../views'

export const publicRoutes = [
  {
    path: '/',
    Component: views.Home

  },
  {
    path: '/products',
    Component: views.Product

  },
  {
    path: '/login',
    Component: views.Login

  },
  {
    path: '/register',
    Component: views.Register

  },

  {
    path: '/thanks',
    Component: views.Thanks

  },
  {
    path: '*',
    Component: views.NotFound

  }

]

export const privateRoutes = [
  {
    path: '/carrito',
    Component: views.Carrito

  },
  {
    path: '/newproduct',
    Component: views.NewProduct

  },
  {
    path: '/profile',
    Component: views.Profile

  },
  {
    path: '/products/:id',
    Component: views.Product

  }

]

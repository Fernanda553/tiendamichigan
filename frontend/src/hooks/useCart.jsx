import { useEffect, useState } from 'react'

import { ENDPOINT } from '../config/constans'

const useCart = () => {
  const [user, setUser] = useState({ email: '', password: '' })
  const [productos, setProductos] = useState([])
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState('0')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [token, setToken] = useState('')

  const login = (jwt) => {
    setIsAuthenticated(true)
    setToken(jwt)
  }

  const logout = () => {
    setIsAuthenticated(false)
    setToken('')
  }

  const getProducts = async () => {
    try {
      const response = await fetch(ENDPOINT.products)
      const products = await response.json()
      if (products?.code) {
        throw new Error(products.message)
      }
      setProductos(products)
    } catch (error) {
      console.error()
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  const addCart = (producto) => {
    setTotal(+total + +producto.precio)

    const productoInCart = cart.findIndex((item) => item.id === producto.id)

    if (productoInCart >= 0) {
      const newCart = structuredClone(cart)
      newCart[productoInCart].quantity += 1

      return setCart(newCart)
    }

    setCart((prevState) => [
      ...prevState,
      {
        ...producto,
        quantity: 1
      }
    ])
  }

  const clearCart = () => {
    setCart([])
    setTotal('0')
  }

  const removeFromCart = (producto) => {
    const newCart = cart.flatMap((p) => {
      if (p.id === producto.id) {
        setTotal(+total - +producto.precio)
        if (p.quantity > 1) {
          p.quantity -= 1
          return p
        }
        return []
      }
      return p
    })
    setCart(newCart)
  }

  const addOneMore = (producto) => {
    setTotal(+total + +producto.precio)
    const productoInCart = cart.findIndex((item) => item.id === producto.id)

    if (productoInCart >= 0) {
      const newCart = structuredClone(cart)
      newCart[productoInCart].quantity += 1

      return setCart(newCart)
    }
  }

  return {
    user,
    setUser,
    isAuthenticated,
    token,
    login,
    logout,
    productos,
    total,
    cart,
    addCart,
    addOneMore,
    clearCart,
    removeFromCart
  }
}

export default useCart

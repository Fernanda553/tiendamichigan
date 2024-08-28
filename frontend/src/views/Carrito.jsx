import { useContext } from 'react'
import { Container, Button } from 'react-bootstrap'

import MichiContext from '../context/MichiContex.jsx'
import { useNavigate } from 'react-router-dom'

const Carrito = () => {
  const { addOneMore, cart, clearCart, total, removeFromCart } =
    useContext(MichiContext)
  const navigate = useNavigate()

  const handlerCart = () => {
    navigate('/thanks')
    clearCart()
  }

  return (
    <Container fluid className='m-0'>
      <div className='cart'>
        <h4 className='text-dark p-4'>Detalles del pedido:</h4>
        <div className='cart_cards'>
          <ul>
            {cart?.map((producto) => (
              <li key={producto?.id} className='cart-total'>

                <img
                  src={producto?.img}
                  alt={producto?.titulo}
                  className='logo p-3'
                />{' '}
                <h4 className='text-dark p-2'>{producto?.titulo}</h4>
                <div>
                  <Button
                    className='mx-4'
                    variant='outline-danger'
                    onClick={() => removeFromCart(producto)}
                  >
                    -
                  </Button>
                  <span className='text-dark'>{producto?.quantity}</span>
                  <Button
                    className='mx-4'
                    variant='outline-info'
                    onClick={() => addOneMore(producto)}
                  >
                    +
                  </Button>
                </div>
                <h4 className='text-dark'>${producto?.quantity * producto?.precio}</h4>
              </li>
            ))}
          </ul>
        </div>
        <div className='m-4'>
          <h2 className='text-dark'>
            Total: $ <span className='text-success'>{total}</span>
          </h2>
          <Button className='m-4' variant='outline-warning' onClick={clearCart}>
            Limpiar carrito
          </Button>
          <Button className='m-4' variant='outline-success' onClick={handlerCart}>
            Ir a pagar
          </Button>
        </div>
      </div>
    </Container>
  )
}

export default Carrito

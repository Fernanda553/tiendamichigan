import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Card, Col } from 'react-bootstrap'
import MichiContext from '../context/MichiContex.jsx'

const Galeria = ({ products }) => {
  const { addCart } = useContext(MichiContext)
  const navigate = useNavigate()

  const handlerClick = (id) => {
    navigate(`/products/${id}`)
  }

  return (
    <>
      {products?.map((producto) => {
        return (
          <Col key={producto?.id} className='m-0'>
            <Card className='galeria_card'>
              <Card.Img variant='top' src={producto?.img} />
              <Card.Body className='text-center'>
                <Card.Title>{producto?.titulo}</Card.Title>
                <Card.Text className='text-dark'>
                  Precio: $ {producto?.precio}
                </Card.Text>
                <Button
                  className='m-2'
                  variant='outline-primary'
                  onClick={() => handlerClick(producto.id)}
                >
                  Ver más 👀
                </Button>
                <Button
                  className='m-2'
                  variant='outline-danger'
                  onClick={() => addCart(producto)}
                >
                  Añadir 🛒
                </Button>
              </Card.Body>
            </Card>
          </Col>
        )
      })}
    </>
  )
}

export default Galeria

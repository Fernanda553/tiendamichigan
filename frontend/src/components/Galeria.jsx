import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Card, Col, Row } from 'react-bootstrap'
import MichiContext from '../context/MichiContex.jsx'

const Galeria = ({ products }) => {
  const { addCart } = useContext(MichiContext)
  const navigate = useNavigate()

  const handlerClick = (id) => {
    navigate(`/products/${id}`)
  }

  return (
    <Row>
      {products?.map((producto) => (

        <Col key={producto.id}>
          <Card
            className='galery-card'
            onClick={() => handlerClick(producto.id)}
          >
            <Card.Img variant='top' src={producto?.img} />
            <Card.Body className='text-center'>
              <Card.Title>{producto?.titulo}</Card.Title>
              <Card.Text className='text-success'>
                Precio:<span className='text-caveat'> ${producto.precio}</span>
              </Card.Text>
              <Button variant='primary' onClick={() => addCart(producto)}>Añadir 🛒</Button>
            </Card.Body>
          </Card>
        </Col>

      ))}
    </Row>
  )
}

export default Galeria

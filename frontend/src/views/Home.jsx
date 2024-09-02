import { useContext } from 'react'
import { Welcome } from './Welcome'
import MichiContext from '../context/MichiContex'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const { isAuthenticated } = useContext(MichiContext)
  const navigate = useNavigate()

  const handlerNewProduct = () => {
    navigate('/newproduct')
  }
  return (
    <>
      {!isAuthenticated
        ? <Welcome />
        : (
          <Container>
            <Row className='justify-content-center'>
              <Col xs={12} sm={10} md={8} lg={6}>
                <Card className='text-center add-product-card'>
                  <Card.Body>
                    <Card.Title><span className='add-product-title' />📦 ¡Vende tu producto!</Card.Title>
                    <Card.Text className='add-product-text'>
                      💼 ¿Tienes algo que ofrecer? <br />
                      🛒 ¡Agrega un nuevo producto y empieza a vender!
                    </Card.Text>
                    <Button
                      variant='success'
                      size='lg'
                      onClick={handlerNewProduct}
                    >➕ Agregar Producto
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
          )}
    </>
  )
}

export default Home

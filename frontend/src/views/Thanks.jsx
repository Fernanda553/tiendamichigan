import { Container } from 'react-bootstrap'
import GatitoLevi from '../imgs/michilevi.jpg'

const Thanks = () => {
  return (
    <Container fluid className='thanks'>
      <h1 className='p-4'>Gracias por preferirnos! 😻</h1>
      <img src={GatitoLevi} alt='Michi levi' />
    </Container>
  )
}

export default Thanks

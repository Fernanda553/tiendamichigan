import { Container } from 'react-bootstrap'
import GatitoImage2 from '../imgs/gatito2.png'


const NotFound = () => {
  return (
    <Container fluid className='notFound'>
      <h2 className='m-5'>La página que solícito no existe</h2>
      <img src={GatitoImage2} alt='NotFound' />
    </Container>
  )
}

export default NotFound

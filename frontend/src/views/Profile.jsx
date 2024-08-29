import { useContext } from 'react'
import { Button, Container } from 'react-bootstrap'
import MichiContext from '../context/MichiContex'

const Profile = () => {
  const { logout } = useContext(MichiContext)

  const { user } = useContext(MichiContext)

  const logOut = () => logout()
  return (
    <Container fluid className='profile'>

      <h1 className='text-danger'>
        Bienvenido <span className='fw-bold text-dark'>{user?.email}</span>
      </h1>
      <Button className='text-dark m-3' variant='outline-info' onClick={logOut}>Cerrar sesíon</Button>

    </Container>
  )
}

export default Profile

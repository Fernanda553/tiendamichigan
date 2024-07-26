import axios from 'axios'
import { useContext } from 'react'
import MichiContext from '../context/MichiContex.jsx'
import { ENDPOINT } from '../config/constans.jsx'
import { Button, Container, Form } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'

const Login = () => {
  const { login, user, setUser } = useContext(MichiContext)
  const navigate = useNavigate()

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value })
  }

  const getData = (event) => {
    event.preventDefault()
    axios.post(ENDPOINT.login, user)
      .then(({ data }) => {
        if (data?.token) { login(data.token) }
        navigate('/')
      })
      .catch((error) => {
        window.alert(`${error.response.data.message} 🙁.`)
      })
  }

  return (
    <Container fluid className='text-center'>
      <h1 className='text-center text-dark p-4'>
        Iniciar sesión
      </h1>
      <Form onSubmit={getData} className='containers'>
        <Form.Group controlId='user.email'>
          <Form.Label className='text-dark'>Email address: </Form.Label>
          <Form.Control
            className='text-center'
            type='email'
            value={user.email}
            onChange={handleChange}
            name='email'
            placeholder='name@example.com'
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='user.password'>
          <Form.Label className='text-dark pt-4'>Contraseña: </Form.Label>
          <Form.Control
            className='text-center'
            type='password'
            value={user.password}
            onChange={handleChange}
            name='password'
            placeholder='Password'
          />
        </Form.Group>
        <Button
          variant='outline-info
        ' type='submit'
          className='mt-3'
        >
          Iniciar sesíon
        </Button>
      </Form>
      <p className='text-success pt-4'>No tienes una cuenta? Haz clic <NavLink to='/register'>aquí</NavLink></p>
    </Container>
  )
}

export default Login

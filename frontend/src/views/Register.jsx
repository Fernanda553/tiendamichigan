import axios from 'axios'
import { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { ENDPOINT } from '../config/constans'

const Register = () => {
  const [userRegister, setUserRegister] = useState({ nombre: '', email: '', password: '' })

  const handleChange = (event) => {
    setUserRegister({ ...userRegister, [event.target.name]: event.target.value })
  }

  const getData = async (event) => {
    try {
      event.preventDefault()
      const response = await axios.post(ENDPOINT.register, userRegister)
      window.alert('Usuario registrado con éxito 😀.')
      console.log(response.data)
    } catch (error) {
      window.alert(`${error.response.data.message} 🙁.`)
    }
  }
  return (
    <Container fluid>
      <h1 className='p-3'>Registrate</h1>
      <Form onSubmit={getData} className='form_register'>
        <Form.Group controlId='nombre'>
          <Form.Label>Nombre: </Form.Label>
          <Form.Control
            className='text-center'
            type='text'
            value={userRegister.name}
            onChange={handleChange}
            name='nombre'
            placeholder='Fernanda Nuñez'
          />
        </Form.Group>
        <Form.Group controlId='email'>
          <Form.Label>Email address: </Form.Label>
          <Form.Control
            className='text-center'
            type='email'
            value={userRegister.email}
            onChange={handleChange}
            name='email'
            placeholder='name@example.com'
          />
        </Form.Group>
        <Form.Group controlId='contraseña'>
          <Form.Label>Contraseña: </Form.Label>
          <Form.Control
            className='text-center'
            type='password'
            value={userRegister.password}
            onChange={handleChange}
            name='password'
            placeholder='Password'
          />
        </Form.Group>
        <Button className='m-4' variant='outline-warning' type='submit'>Registrarme</Button>{' '}
      </Form>
    </Container>
  )
}

export default Register

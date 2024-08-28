import axios from 'axios'
import { useState } from 'react'
import { Container, Button, Form } from 'react-bootstrap'
import { ENDPOINT } from '../config/constans'

const NewProduct = () => {
  const [newProduct, setNewProduct] = useState({ titulo: '', img: '', descripcion: '', precio: '' })

  const handleChange = (event) => {
    setNewProduct({ ...newProduct, [event.target.name]: event.target.value })
  }

  const getData = async (event) => {
    try {
      event.preventDefault()
      const response = await axios.post(ENDPOINT.newproduct, newProduct)
      window.alert('Producto ingresado con éxito 😀.')
      console.log(response.data)
    } catch (error) {
      window.alert(`${error.response.data.message} 🙁.`)
    }
  }

  return (
    <Container fluid className='newProduct'>
      <h1 className='text-danger p-4'>Nuevo Producto</h1>
      <div>
        <Form onSubmit={getData} className='form-newProduct'>
          <Form.Group controlId='titulo'>
            <Form.Label>Titulo  </Form.Label>
            <Form.Control
              className='text-center'
              type='text'
              value={newProduct.titulo}
              onChange={handleChange}
              name='titulo'
              placeholder='Disfraz'
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='img'>
            <Form.Label>Img  </Form.Label>
            <Form.Control
              className='text-center'
              type='text'
              value={newProduct.img}
              onChange={handleChange}
              name='img'
              placeholder='https://'
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='descripcion'>
            <Form.Label>Descripción  </Form.Label>
            <Form.Control
              className='text-center'
              type='text'
              value={newProduct.descripcion}
              onChange={handleChange}
              name='descripcion'
              placeholder='Vestido gatita'
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='precio'>
            <Form.Label>Precio </Form.Label>
            <Form.Control
              className='text-center'
              type='text'
              value={newProduct.precio}
              onChange={handleChange}
              name='precio'
              placeholder='15000'
            />
          </Form.Group>
          <Button variant='outline-light' type='submit'>Crear ✨</Button>
        </Form>
      </div>
    </Container>
  )
}

export default NewProduct

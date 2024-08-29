import { Form, Row } from 'react-bootstrap'
import Galeria from '../components/Galeria'
import { useState, useContext } from 'react'
import MichiContext from '../context/MichiContex'

const AllProducts = () => {
  const { productos } = useContext(MichiContext)
  const [selector, setSelector] = useState('Todas')

  const handlerBusqueda = (e) => {
    setSelector(e.target.value)
  }

  const filter = () => productos?.filter((p) => {
    if (selector === 'Todas') return p
    return p.categoria === selector
  })

  return (
    <>
      {productos?.length > 0
        ? (
          <>
            <div className='aside'>
              <p className='p-0 m-0'>¿Qué estás buscando?</p>
              <Form>
                <Form.Select
                  className='bg-light text-dark'
                  aria-label='Default select example'
                  value={selector}
                  onChange={handlerBusqueda}
                >
                  <option className='bg-light text-dark' value='Todas'>Todas</option>
                  {productos?.map((p) => (
                    <option className='bg-light text-dark' key={p.id} value={p.categoria}>{p.categoria}</option>
                  ))}
                </Form.Select>
              </Form>
            </div>
            <div className='section'>
              <Row className='m-0'>
                <Galeria products={filter()} />
              </Row>
            </div>
          </>
          )
        : null}

    </>
  )
}

export default AllProducts

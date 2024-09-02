import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import GatitoImage from '../imgs/gatito.png'
import MichiContext from '../context/MichiContex'

const Navigation = () => {
  const { total, isAuthenticated } = useContext(MichiContext)

  const isActiveLink = ({ isActive }) => {
    return isActive ? 'text-info text-decoration-none p-2' : 'text-dark text-decoration-none p-2'
  }

  return (

    <Navbar className='bg-body-tertiary p-0 m-0' expand='lg'>
      <Container fluid className='navigation'>
        <Navbar.Brand as={NavLink} to='/' className='d-flex align-items-center'>
          <img className='logo' src={GatitoImage} alt='icono' width='30' height='30' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='offcanvasNavbar' />
        <Navbar.Offcanvas
          id='offcanvasNavbar'
          aria-labelledby='offcanvasNavbarLabel'
          placement='end'
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id='offcanvasNavbarLabel'>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className='d-flex flex-column justify-content-end flex-grow-1 pe-3'>
              {isAuthenticated && (
                <NavLink
                  to='/profile'
                  className={isActiveLink}
                  onClick={() => document.getElementById('offcanvasNavbar').classList.remove('show')}
                >
                  Mi cuenta
                </NavLink>
              )}
              {!isAuthenticated && (
                <NavLink
                  to='/register'
                  className={isActiveLink}
                  onClick={() => document.getElementById('offcanvasNavbar').classList.remove('show')}
                >
                  Registrarse
                </NavLink>
              )}
              {!isAuthenticated && (
                <NavLink
                  to='/login'
                  className={isActiveLink}
                  onClick={() => document.getElementById('offcanvasNavbar').classList.remove('show')}
                >
                  Iniciar sesión
                </NavLink>
              )}
              <NavLink
                to='/products'
                className={isActiveLink}
                onClick={() => document.getElementById('offcanvasNavbar').classList.remove('show')}
              >
                Galería
              </NavLink>
              {isAuthenticated && (
                <NavLink
                  to='/newproduct'
                  className={isActiveLink}
                  onClick={() => document.getElementById('offcanvasNavbar').classList.remove('show')}
                >
                  Nuevo producto
                </NavLink>
              )}
              {isAuthenticated && (
                <NavLink
                  to='/carrito'
                  className={isActiveLink}
                  onClick={() => document.getElementById('offcanvasNavbar').classList.remove('show')}
                >
                  🛒 $ {total}
                </NavLink>
              )}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>

  )
}

export default Navigation

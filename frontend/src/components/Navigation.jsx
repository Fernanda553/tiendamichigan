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
    <>
      {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => (
        <Navbar key={expand} expand={expand} className='p-0 m-0'>
          <Container fluid className='navigation'>
            <NavLink to='/' className='d-flex align-items-center'>
              <img className='logo' src={GatitoImage} alt='icono' />
            </NavLink>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement='end'
            >
              <Offcanvas.Body>
                <Nav className='d-flex flex-column justify-content-end flex-grow-1 pe-3'>
                  {isAuthenticated
                    ? (
                      <NavLink to='/profile' className={isActiveLink}>
                        Mi cuenta
                      </NavLink>
                      )
                    : null}
                  {!isAuthenticated
                    ? (
                      <NavLink to='/register' className={isActiveLink}>
                        Registrarse
                      </NavLink>
                      )
                    : null}
                  {!isAuthenticated
                    ? (
                      <NavLink to='/login' className={isActiveLink}>
                        Iniciar sesión
                      </NavLink>
                      )
                    : null}
                  {isAuthenticated
                    ? (
                      <NavLink to='/newproduct' className={isActiveLink}>
                        Nuevo producto
                      </NavLink>
                      )
                    : null}
                  {isAuthenticated
                    ? (
                      <NavLink to='/carrito' className={isActiveLink}>
                        🛒 $ {total}
                      </NavLink>
                      )
                    : null}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  )
}

export default Navigation

import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import MichiContext from '../context/MichiContex.jsx'
import { useContext } from 'react'
import GatitoImage from '../imgs/gatito.png'

const Navigation = () => {
  const { total, isAuthenticated } = useContext(MichiContext)

  const isActiveLink = ({ isActive }) => {
    const styleActive = 'text-decoration-none p-2'
    return isActive ? `text-info ${styleActive}` : ` text-dark ${styleActive}`
  }

  return (
    <>
      {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => (
        <Navbar key={expand} expand={expand} className='nav p-0 m-0'>
          <Container fluid className='navigation'>
            <NavLink to='/'><img className='logo' src={GatitoImage} alt='icono' /></NavLink>
            <NavLink to='/' className='text-decoration-none'>
              <Navbar.Text className='nav_text'>
                Michigan
              </Navbar.Text>
            </NavLink>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement='end'
            >
              <Offcanvas.Body>
                <Nav className='d-flex flex-column justify-content-end flex-grow-1 pe-3'>
                  {isAuthenticated ? <NavLink to='/profile' className={isActiveLink}>Mi cuenta</NavLink> : null}
                  {isAuthenticated ? null : <NavLink to='/register' className={isActiveLink}>Registrarse</NavLink>}
                  {isAuthenticated ? null : <NavLink to='/login' className={isActiveLink}>Iniciar sesión</NavLink>}
                  {isAuthenticated ? <NavLink to='/newproduct' className={isActiveLink}>Nuevo producto</NavLink> : null}
                  {isAuthenticated
                    ? <NavLink to='/carrito' className={isActiveLink}> 🛒 $ {total}</NavLink>
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

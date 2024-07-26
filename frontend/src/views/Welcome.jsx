import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'
import { Container } from 'react-bootstrap'

export const Welcome = () => {
  const welcomeElement = useRef()

  useEffect(() => {
    const tl = gsap.timeline()

    tl.to(welcomeElement.current, { y: -10, duration: 0.2, ease: 'ease.out' })
      .to(welcomeElement.current, { y: 10, duration: 1, ease: 'bounce.out' })
  }, [])

  return (
    <Container fluid className='text-center pt-4'>
      <h1 ref={welcomeElement}>Bienvenido</h1>
      <h2 className='pt-4 text-dark'>
        Inicia sesión para ver nuestra galería!😸
      </h2>
    </Container>
  )
}

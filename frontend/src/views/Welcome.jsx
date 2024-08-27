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
    <Container fluid className='welcome'>
      <h1>
        Bienvenido
      </h1>
      <p ref={welcomeElement}>🧸</p>
    </Container>
  )
}

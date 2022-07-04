import React from 'react'
import Image from 'next/image'

// import AppHandSVG from '../../assets/SVG/AppMão.svg'
import InputSearch from '../InputSearch'

import { Container, Col, HeadingGroup, Text, IllustrationImg } from './styles'

const Hero: React.FC = () => {
  return (
    <Container>
      <Col className="zIndex-20">
        <HeadingGroup>
          <h1>+100 Cursos </h1>
          <h1>
            Profissionalizantes <br /> em Angola
          </h1>
        </HeadingGroup>
        <Text>Procure por aqui um curso ou centro que você mais gosta.</Text>

        <InputSearch />
      </Col>

      <Col>
        <IllustrationImg src="/assets/SVG/AppMão.svg" />
      </Col>
    </Container>
  )
}

export default Hero

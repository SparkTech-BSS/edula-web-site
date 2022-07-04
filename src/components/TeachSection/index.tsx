import React from 'react'
import { Wrapper } from '../../styles/global'

import { Container, Flex, Col, ButtonStart } from './styles'

const TeachSection: React.FC = () => {
  return (
    <Container id="teach">
      <Wrapper>
        <Flex>
          <Col>
            <img className="illustration" src="./assets/SVG/Teach.svg" />
          </Col>
          <Col>
            <h1>
              Faça parte do time de <span>Centros da Edula</span>
            </h1>
            <p>
              Começe agora mesmo a divulgar seu Centro e a ter a gestão academia
              e financeira que todo centro sonha em receber.
            </p>
            <ButtonStart>COMEÇAR AGORA</ButtonStart>
          </Col>
        </Flex>
      </Wrapper>
    </Container>
  )
}

export default TeachSection

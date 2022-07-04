import React from 'react'
import { Wrapper } from '../../styles/global'

import { BsInstagram, BsFacebook } from 'react-icons/bs'
import { FaEnvelope } from 'react-icons/fa'
import { RiLinkedinFill } from 'react-icons/ri'
import { IoIosArrowUp } from 'react-icons/io'

import {
  Container,
  Row,
  ColLeft,
  ColRight,
  RowFooter,
  Content,
  SocialNetworkGroup,
  GoToUp
} from './styles'

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <Container id="#contact">
      <Wrapper>
        <Row>
          <ColLeft>
            <img src="./assets/SVG/Edula.svg" alt="Edula Logo" />

            <span>Edula 2022</span>

            <span>Todos os direitos reservados</span>
          </ColLeft>

          <ColRight>
            <ul>
              <h4>Ajuda</h4>
              <li>
                <a href="#">Termos de uso</a>
              </li>
              <li>
                <a href="#">Politicas de privacidade</a>
              </li>
              <li>
                <a href="#">Duvidas Gerais</a>
              </li>
            </ul>
            <ul>
              <h4>Serviços</h4>
              <li>
                <a href="#">Time de Centros</a>
              </li>
              <li>
                <a href="#">Seja um Estudante</a>
              </li>
              <li>
                <a href="#">Procure um curso</a>
              </li>
            </ul>
            <ul>
              <h4>Contato</h4>
              <li>
                <a href="#">Fale Conosco</a>
              </li>
              <li>
                <a href="#">Central de Ajuda</a>
              </li>
            </ul>
          </ColRight>
        </Row>
      </Wrapper>
      <RowFooter>
        <Wrapper>
          <Content>
            <SocialNetworkGroup>
              <a>
                <BsInstagram />
              </a>
              <a>
                <BsFacebook />
              </a>
              <a>
                <FaEnvelope />
              </a>
              <a>
                <RiLinkedinFill />
              </a>
            </SocialNetworkGroup>

            <GoToUp onClick={scrollToTop}>
              <IoIosArrowUp />
            </GoToUp>
          </Content>
        </Wrapper>
      </RowFooter>
    </Container>
  )
}

export default Footer

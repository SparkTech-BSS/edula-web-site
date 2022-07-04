import React, { useContext } from 'react'
import Link from 'next/link'

import { motion } from 'framer-motion'

import MenuHamburguer from '../MenuHamburguer'

import { Wrapper } from '../../styles/global'

import { Context } from '../../context/AppContext'

import Hero from '../Hero'

import {
  WrapperNavigation,
  Container,
  NavigationBar,
  ButtonGroup,
  Button
} from './styles'

const Header: React.FC = () => {
  const { toggleMenu } = useContext(Context)

  return (
    <Container>
      <WrapperNavigation>
        <NavigationBar isActive={toggleMenu}>
          <a className="logo" href="#">
            <img src="/assets/SVG/EdulaLogo.svg" alt="" />
          </a>
          {/* <Image
                        src="/assets/PNG/EdulaLogo.png"
                        width={79}
                        height={28}
                    /> */}
          <ul>
            <li>
              <Link href="#about">
                <a className="link">
                  <span>Sobe</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="#services">
                <a className="link">
                  <span>Serviços</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="#teach">
                <a className="link">
                  <span>Ensine na Edula</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="#contact">
                <a className="link">
                  <span>Contato</span>
                </a>
              </Link>
            </li>
            <ButtonGroup>
              <Button isOutlined>Entrar</Button>
              <Button isOutlined={false}>Cadastre-se</Button>
            </ButtonGroup>
          </ul>

          <MenuHamburguer />
        </NavigationBar>
      </WrapperNavigation>
      <Wrapper>
        <Hero />
      </Wrapper>
    </Container>
  )
}

export default Header

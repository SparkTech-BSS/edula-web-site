import React, { useState, useContext } from 'react'

import { Context } from '../../context/AppContext'

import { Container } from './styles'

interface Props {
  isActive: boolean
}

const MenuHamburguer: React.FC = () => {
  const { toggleMenu, setToggleMenu, handleToogleMenu } = useContext(Context)

  return (
    <Container
      className={`menu-container ${toggleMenu ? 'on' : ''}`}
      onClick={handleToogleMenu}
    >
      <div className="menu-toggle">
        <div className="one"></div>
        <div className="two"></div>
        <div className="three"></div>
      </div>
    </Container>
  )
}

export default MenuHamburguer

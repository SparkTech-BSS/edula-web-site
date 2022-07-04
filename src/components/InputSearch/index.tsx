import React from 'react'

import { BiSearchAlt2 } from 'react-icons/bi'

import { Container, ButtonSearch, SearchIcon } from './styles'

const InputSearch: React.FC = () => {
  return (
    <Container>
      <SearchIcon />
      <input type="text" placeholder="Procure aqui" />
      <ButtonSearch>Procurar Agora</ButtonSearch>
    </Container>
  )
}

export default InputSearch

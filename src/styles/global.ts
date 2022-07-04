import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export default createGlobalStyle`
  *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

  html{
    font-size: 62.5%;
    width: 100%;
  }


  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.secondary};
    font: 400 16px 'Poppins', sans-serif;
    scroll-behavior: smooth;
    overflow-x: hidden;
    min-height: 100vh;
    width: 100%;
    height: 100%;
    -webkit-font-smoothing: antialiased;

  }

  a {
    color: ${(props) => props.theme.colors.background};
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`

export const Wrapper = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  width: 100%;

  @media screen and (max-width: 1150px) {
    padding: 4rem;
  }

  @media screen and (max-width: 768px) {
    padding: 2rem;
  }

  @media screen and (max-width: 600px) {
    padding: 1.5rem;
  }
`

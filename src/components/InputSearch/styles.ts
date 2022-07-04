import styled from 'styled-components'

import { BiSearchAlt2 } from 'react-icons/bi'

export const Container = styled.div`
  position: relative;
  max-width: 56.1rem;
  height: 6rem;

  @media (max-width: 768px) {
    max-width: 100% important;
    width: 100%;
  }

  input {
    width: 100%;
    height: 100%;
    padding-left: 4rem;
    padding-right: 16rem;
    border-radius: 0.5rem;
    color: #141f4f;
    font-size: 1.6rem;
    border: 0.2rem solid #fff;
    outline: none;
    transition: all 0.3s;

    ::-webkit-input-placeholder {
      /* Edge */
      color: #868cad;
    }

    :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: #868cad;
    }

    ::placeholder {
      color: #868cad;
    }
  }
`

export const SearchIcon = styled(BiSearchAlt2)`
  color: #868cad;
  font-size: 2.5rem;

  position: absolute;
  top: 1.8rem;
  left: 1rem;
`

export const ButtonSearch = styled.button`
  background-color: #f26834;
  align-items: center;
  justify-content: center;
  padding: 1.3rem 2rem;
  color: ${({ theme }) => theme.colors.text};
  border-radius: 0.5rem;
  border: none;
  transition: all 0.5s;

  position: absolute;
  right: 1rem;
  top: 0.9rem;

  font-weight: 700;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    position: static;
    width: 100%;
    margin-top: 1rem;
    padding: 2rem;
  }
`

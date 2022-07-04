import styled from 'styled-components'

export const Container = styled.div``

export const Flex = styled.section`
  display: flex;
  align-items: flex-start;
  gap: 4rem;
  padding: 10rem 0;

  @media (max-width: 960px) {
    flex-direction: column;
    justify-content: center;
  }
`

export const Col = styled.div`
  h1 {
    font-size: 4.8rem;
    font-weight: 700;

    span {
      color: #0a66c2;
    }
  }

  p {
    margin: 3rem 0;
    font-size: 1.6rem;
    font-weight: 500;
  }

  .illustration {
    max-width: 492px;
    width: 100%;
    object-fit: cover;
  }

  @media (max-width: 960px) {
    h1 {
      font-size: 3rem;
    }
  }
`

export const ButtonStart = styled.button`
  background-color: #0a66c2;
  color: ${({ theme }) => theme.colors.text};

  font-size: 1.6rem;
  font-weight: 700;
  padding: 1.5rem 2.5rem;
  border-radius: 0.5rem;
  border: none;
  transition: all 0.3s;

  &:hover {
    opacity: 0.8;
  }
`

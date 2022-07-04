import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 10rem 0;

  h1 {
    color: ${({ theme }) => theme.colors.text};
    text-align: center;
    padding: 0 0 8rem;

    span {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`

export const Cards = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 20rem;
  gap: 2rem;
`

export const CardService = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  img {
    width: 4.8rem;
    height: 4.8rem;
    object-fit: cover;
  }

  h2 {
    color: ${({ theme }) => theme.colors.text};
    font-size: 2.4rem;
    margin-top: 1rem;
  }

  p {
    color: #abb0cb;
    font-size: 1.4rem;
    margin-top: 2rem;
  }
`

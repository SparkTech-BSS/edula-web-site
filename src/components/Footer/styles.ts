import styled from 'styled-components'

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 5rem 0 0;
`

export const Row = styled.div`
  display: flex;
  align-items: center;

  padding: 2rem 0 8rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const ColLeft = styled.div`
  flex: 1 1 30%;

  display: flex;
  flex-direction: column;

  span {
    color: #abb0cb;
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }

  img {
    max-width: 15rem;
    width: 100%;
    object-fit: cover;
    margin-bottom: 4rem;
  }
`

export const ColRight = styled.div`
  flex: 1 1 70%;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  h4 {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.6rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  a {
    color: #abb0cb;
    font-size: 1.4rem;
    font-weight: 400;
    transition: all 0.3s;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      height: 0.2rem;
      width: 0%;
      bottom: -0.5rem;
      transition: all 0.3s;
      background-color: ${({ theme }) => theme.colors.primary};
    }

    &:hover:before {
      width: 100%;
    }
  }
`

export const RowFooter = styled.div`
  border-top: 0.1rem solid #1e2d6b;
  padding: 2rem;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const SocialNetworkGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  a {
    background-color: #37468b;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all 0.3s;

    & > * {
      color: #f26834;
      transition: all 0.3s;
    }

    &:hover {
      background-color: #f26834;
      & > * {
        color: #fff;
      }
    }
  }
`

export const GoToUp = styled.a`
  background-color: #4658a9;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    opacity: 0.8;
  }
`

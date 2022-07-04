import styled from 'styled-components'

interface ButtonProps {
  isOutlined: boolean
}

interface NavigationProps {
  isActive: boolean
}

export const WrapperNavigation = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  width: 100%;
`

export const Container = styled.section`
  background: ${(props) => props.theme.colors.secondary};
  height: 100%;

  min-height: 90rem;

  @media (max-width: 768px) {
    min-height: 65rem;
  }
`

export const NavigationBar = styled.nav<NavigationProps>`
  display: flex;
  align-items: center;
  height: 88px;

  img {
  }

  a.logo {
    cursor: pointer;
    img {
      object-fit: cover;
    }
  }

  ul {
    list-style-type: none;
    display: flex;
    gap: 2rem;
    align-items: center;
    margin-left: auto;

    a {
      font-size: 1.6rem;
      transition: all 0.3s;

      &:hover {
        color: ${(props) => props.theme.colors.primary};
      }
    }
  }

  @media (max-width: 1150px) {
    padding: 2rem;
  }

  @media (max-width: 850px) {
    justify-content: space-between;
    position: fixed;
    top: 0rem;
    left: 0;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.secondary};
    z-index: 9999;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    ul {
      display: ${({ isActive }) => (isActive ? 'flex' : 'none')};
      flex-direction: column;
      background-color: ${({ theme }) => theme.colors.secondary};
      min-height: 100vh;
      height: 100%;
      width: 100%;

      position: fixed;
      top: 8rem;
      left: 0;

      overflow-y: auto;

      align-items: center;

      padding: 8rem 2rem 2rem;
    }

    li {
      width: 100%;
    }

    a.link {
      color: #abb0cb;
      background: linear-gradient(90deg, #1b2861 0%, rgba(27, 40, 97, 0) 100%);
      overflow: hidden;
      border-radius: 1rem;
      padding: 2rem;
      display: flex;
      align-items: center;
      width: 100%;
      margin: 0;
      position: relative;

      span {
        z-index: 10;
      }

      &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        transform-origin: 0% 0%;
        background: linear-gradient(
          90deg,
          #101736 0%,
          rgba(16, 23, 54, 0) 100%
        );
        left: 0;
        border-radius: 1rem;
        transition: all 0.3s ease-in-out, transform 0.3s ease-out;
        transform: translateX(-100%);
      }

      &:after {
        content: '';
        position: absolute;
        width: 0.35rem;
        height: 100%;
        background-color: ${({ theme }) => theme.colors.primary};
        border-radius: 1rem 0 0 1rem;
        left: 0;
      }

      &:hover {
        color: ${(props) => props.theme.colors.text} !important;

        background: linear-gradient(
          90deg,
          #101736 0%,
          rgba(16, 23, 54, 0) 100%
        );
      }

      &:hover:before {
        transform: translateX(0%);
      }
    }
  }
`

export const LogoLink = styled.a`
  cursor: pointer;
`

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-left: 5rem;

  @media (max-width: 850px) {
    width: 100%;
    margin: 6rem 0 0 0;
  }
`

export const Button = styled.button<ButtonProps>`
  background-color: ${({ isOutlined, theme }) =>
    isOutlined ? 'transparent' : theme.colors.primary};
  color: ${({ isOutlined, theme }) =>
    isOutlined ? theme.colors.primary : theme.colors.text};
  height: 4rem;
  padding: 1rem 2.5rem;
  border-radius: 0.5rem;
  font-weight: 700;
  border: 0.1rem solid ${(props) => props.theme.colors.primary};
  transition: all 0.3s;

  &:hover {
    opacity: 0.5;
  }

  @media (max-width: 850px) {
    width: 100%;
    order: ${({ isOutlined }) => (isOutlined ? 2 : 1)};
    height: 6rem;
  }
`

import styled from 'styled-components'
import { GoAlert } from 'react-icons/go'
//GoAlert

interface TabProps {
  eventKey: string
  isActive: boolean
}

export const NavigationTab = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  padding: 1rem 0 1.5rem;
  width: 100%;
  border-bottom: 0.1rem solid rgba(171, 176, 203, 0.4);
  margin-top: 0rem;
`

export const TabButton = styled.button`
  background: rgba(0, 0, 0, 0);
  color: #abb0cb;
  box-shadow: none;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 2rem;
  font-weight: 700;
  display: block;
  position: relative;
  font-family: inherit;
  margin-right: 5rem;
  transition: all 0.3s;

  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 3rem;

  img {
    margin-right: 1rem;
  }

  &:hover {
    color: var(--primary-color);
    transform: scale(1.05);
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 3.8rem;
    left: 0;
    width: 100%;
    height: 0.6rem;
    border-radius: 2rem;
    background: ${({ theme }) => theme.colors.primary};
    opacity: 0;
    visibility: hidden;
    transition: visibility 0s, opacity 0.4s ease-in-out;
  }

  &.active {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary};
  }

  &.active::after {
    opacity: 1;
    visibility: visible;
    transition: visibility 0s, opacity 0.4s ease-in-out;
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
    margin-right: 2rem;
  }

  @media (max-width: 560px) {
    font-size: 1.2rem;
    margin-right: 1rem;
    padding-left: 1rem;

    img {
      max-width: 1.6rem;
      width: 100%;
    }

    &:after {
      top: 2.8rem;
    }
  }
`

export const TabContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const Tab = styled.div<TabProps>`
  flex-direction: column;
  display: ${(props) => (props.isActive ? 'flex' : 'none')};
  padding: 2rem 0;
`

export const Container = styled.div``

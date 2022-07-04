import styled from 'styled-components'

export const Container = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  top: 0;
  right: 0;
  z-index: 99;

  .menu-toggle {
    width: 4rem;
    cursor: pointer;
    display: none;
    flex-direction: column;
    align-items: flex-end;

    @media (max-width: 850px) {
      display: flex;
    }
  }

  .one,
  .two,
  .three {
    background-color: ${({ theme }) => theme.colors.primary};
    height: 0.4rem;
    width: 100%;
    margin: 0.3rem;
    transition: 0.5s;
    border-radius: 20px;
  }

  .one {
    width: 80%;
  }
  .two {
    width: 50%;
  }
  .three {
    width: 30%;
  }
  &.menu-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &.menu-container .menu-toggle:hover .one {
    //width: 70%;
  }
  &.menu-container .menu-toggle:hover .two {
    //width: 50%;
  }

  &.menu-container.on .menu-toggle .one {
    width: 100%;
    transform: rotate(45deg) translate(1rem, 1rem);
  }

  &.menu-container.on .menu-toggle .two {
    opacity: 0;
  }

  &.menu-container.on .menu-toggle .three {
    width: 100%;
    transform: rotate(-45deg) translate(0.5rem, -0.5rem);
  }

  h1 {
    font-family: sans-serif;
    text-align: center;
    color: white;
  }
  .orange {
    color: #ff9900;
  }
  .yellow {
    color: #ffe600;
  }
`

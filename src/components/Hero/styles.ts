import styled from 'styled-components'

export const Container = styled.div`
  padding: 15rem 0 2rem;
  display: flex;

  .zIndex-20 {
    z-index: 20;
  }

  @media (max-width: 768px) {
  }
`

export const Col = styled.div``

export const HeadingGroup = styled.div`
  h1 {
    color: ${({ theme }) => theme.colors.text};
    font-size: 6.4rem;
    z-index: 999;

    &:nth-child(1) {
      color: ${({ theme }) => theme.colors.primary};
    }

    @media (max-width: 1190px) {
      font-size: 5rem;
    }

    @media (max-width: 768px) {
      font-size: 4rem;
    }

    @media (max-width: 600px) {
      font-size: 3.6rem;
    }

    @media (max-width: 350px) {
      font-size: 3rem;
    }
  }
`
export const Text = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.4rem;
  margin: 2rem 0;
`

export const IllustrationImg = styled.img`
  position: absolute;
  right: 0;
  width: 556px;
  height: 805px;
  object-fit: cover;

  top: 10rem;

  z-index: 10;

  @media (max-width: 850px) {
  }

  @media (max-width: 768px) {
    display: none;
  }
`

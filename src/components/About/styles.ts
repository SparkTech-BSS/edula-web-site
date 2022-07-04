import styled from 'styled-components'

interface TabButtonProp {
  typeButtonColor: string
}

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.text};
  padding: 0 0 8rem;

  @media (max-width: 768px) {
    padding: 0 0 10rem;
  }

  @media (max-width: 600px) {
    padding: 0 0rem;
  }
`

export const WrappContainer = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  width: 100%;

  @media screen and (max-width: 1150px) {
    padding: 4rem;
  }

  @media (max-width: 768px) {
    padding: 0;
  }
`

export const Division = styled.div`
  width: 4px;
  height: 80px;
  left: 717px;
  top: 507px;

  background: linear-gradient(180deg, #f26834 0%, rgba(242, 104, 52, 0) 100%);
  border-radius: 10px;

  margin: 0 auto;

  margin-bottom: 4rem;
`

export const TitleSection = styled.h1`
  color: #141f4f;
  font-size: 4.8rem;
  font-weight: bold;
  text-align: center;
  line-height: 1.2;
  margin-top: 10rem;
  margin-bottom: 10rem;

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 560px) {
    font-size: 2rem;
    margin-top: 5rem;
    margin-bottom: 5rem;
  }
`

export const TabItem = styled.div`
  display: flex;
  align-items: flex-start;

  @media (max-width: 900px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`

export const TabItemCol = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  position: relative;
`

export const TabHeading = styled.h2`
  font-size: 3.2rem;
  font-weight: bold;
  margin-top: 5rem;

  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
`

export const TabText = styled.span`
  color: #141f4f;
  font-size: 1.6rem;
  font-weight: 500;
  margin: 2.5rem 0;
`

export const TabButtonLink = styled.a<TabButtonProp>`
  background-color: ${({ typeButtonColor }) => typeButtonColor};
  padding: 1.5rem 2rem;
  border-radius: 0.4rem;

  font-weight: bold;
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`

export const ImgIllustration = styled.img`
  max-width: 54rem;
  width: 100%;
`

export const FormIllustration = styled.img`
  position: absolute;
  top: 8rem;
  right: 2rem;
  z-index: 1;
`

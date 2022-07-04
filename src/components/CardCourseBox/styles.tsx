import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.text};
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.2);
  height: 50rem;
  padding: 4rem 10rem 2rem;
  border-radius: 1rem;
  width: 100%;
  /* margin-top: -12rem;
    z-index: 999;  */
  z-index: 20;
  position: relative;
  top: -12rem;

  .swiper {
    width: 100%;
    /* height: 100%; */
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-button {
    background-color: #141f4f;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4.5rem;
    width: 4.5rem;
    border-radius: 50%;
    border: 0.2rem solid #868cad;
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }

  .button-prev {
    left: -1rem;
    top: calc(calc(570px / 2) - calc(570px / 5));
  }

  .button-next {
    right: -1rem;
    top: calc(calc(570px / 2) - calc(570px / 5));
  }

  .swiper-button-disabled {
    display: none;
  }

  @media (max-width: 768px) {
    padding: 4rem 4rem 2rem;
    height: auto;
    box-shadow: unset;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
`

export const Heading = styled.h1`
  color: #141f4f;
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 3rem;
`

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 4rem 0 2rem;
`

export const ButtonControlSlide = styled.button`
  background-color: #141f4f;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4.5rem;
  width: 4.5rem;
  border-radius: 50%;
  border: 0.2rem solid #868cad;
  transition: all 0.3s;

  z-index: 90;

  position: absolute;

  &:hover {
    opacity: 0.8;
  }
`

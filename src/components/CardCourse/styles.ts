import styled from 'styled-components'

export const Container = styled.div`
  max-width: 264px;
  width: 100%;

  display: flex;
  flex-direction: column;

  transition: all 0.3s;

  background-color: #fff;

  /* &:hover {
        transform: scale(1.2);
    } */
`

export const CourseImg = styled.img`
  width: 26.4rem;
  height: 13.2rem;
  object-fit: cover;
`

export const CourseName = styled.h2`
  font-size: 1.6rem;
  font-size: 1.4rem;
  margin-top: 1rem;
`

export const CourseDetail = styled.h3`
  color: #868cad;
  margin: 0.5rem 0;
  font-size: 1.2rem;
  font-weight: 400;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
  span {
    font-size: 1.2rem;
    font-weight: 700;
  }

  span:nth-of-type(1) {
    color: #e17012;
    font-weight: bold;
  }

  span:nth-of-type(2) {
    color: #868cad;
    font-weight: 400;
  }
`

export const RatingStar = styled.div``

export const RatingValue = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 1.4rem;
  }

  h2:nth-of-type(1) {
    color: #141f4f;
  }

  h2:nth-of-type(2) {
    color: #868cad;
    font-weight: 500;
    text-decoration-line: line-through;
  }
`

export const ButtonStatus = styled.button`
  background-color: #f68d36;
  padding: 1rem 2rem;
  border-radius: 1rem;

  color: #fff;
  align-self: flex-start;
  font-size: 1.2rem;
  margin-top: 1rem;

  outline: none;
  border: none;
  transition: all 0.3s;

  &:hover {
    opacity: 0.5;
  }
`

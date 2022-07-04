import React from 'react'

import { IoMdStar } from 'react-icons/io'

import {
  Container,
  CourseImg,
  CourseName,
  CourseDetail,
  RatingWrapper,
  RatingStar,
  RatingValue,
  ButtonStatus
} from './styles'

const CardCourse: React.FC = () => {
  return (
    <Container>
      <CourseImg src="./assets/PNG/Course.png" />

      <CourseName>
        Web & Mobile Design Completo 2022: Figma, Motion e mais.
      </CourseName>

      <CourseDetail>Academia Gesforma, Professor Fernando Eduardo</CourseDetail>

      <RatingWrapper>
        <span>4.6</span>
        <RatingStar>
          <IoMdStar color="#E17012" size="18" />
          <IoMdStar color="#E17012" size="18" />
          <IoMdStar color="#E17012" size="18" />
          <IoMdStar color="#E17012" size="18" />
          <IoMdStar color="#E17012" size="18" />
        </RatingStar>
        <span>(10,000)</span>
      </RatingWrapper>

      <RatingValue>
        <h2>KZ10,000.00</h2>
        <h2>KZ30,000.00</h2>
      </RatingValue>

      <ButtonStatus>Em Breve</ButtonStatus>
    </Container>
  )
}

export default CardCourse

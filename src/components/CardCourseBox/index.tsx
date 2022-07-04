import React, { useRef } from 'react'

import CardCourse from '../CardCourse'

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

import { useSwiperRef } from '../../hooks/useSwiperRef'

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import { Container, Heading, ButtonControlSlide, Content } from './styles'

// SwiperCore.use([Navigation])

const CardCourseBox: React.FC = () => {
  const navigationPrevRef = useRef(null)

  const navigationNextRef = useRef(null)

  const [nextEl, nextElRef] = useSwiperRef<HTMLButtonElement>()
  const [prevEl, prevElRef] = useSwiperRef<HTMLButtonElement>()

  // const navigationPrevRef =
  //   useRef() as React.MutableRefObject<HTMLButtonElement>
  // const navigationNextRef =
  //   useRef() as React.MutableRefObject<HTMLButtonElement>

  return (
    <Container>
      <Content>
        <Heading>Cursos em Destaque</Heading>

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={1}
          navigation={{
            prevEl,
            nextEl,
            enabled: true
          }}
          onBeforeInit={(swiper: any) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current
            swiper.params.navigation.nextEl = navigationNextRef.current

            // Re-init navigation
            swiper.navigation.destroy()
            swiper.navigation.init()
            swiper.navigation.update()
          }}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false
          // }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 60
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 60
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 60
            }
          }}
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <CardCourse />
          </SwiperSlide>
          <SwiperSlide>
            <CardCourse />
          </SwiperSlide>
          <SwiperSlide>
            <CardCourse />
          </SwiperSlide>
          <SwiperSlide>
            <CardCourse />
          </SwiperSlide>
          <SwiperSlide>
            <CardCourse />
          </SwiperSlide>
        </Swiper>

        {/* <Row>
          <CardCourse />
          <CardCourse />
          <CardCourse />
      </Row> */}

        <ButtonControlSlide ref={nextElRef} className="button-next">
          <IoIosArrowForward color="#fff" size={27} />
        </ButtonControlSlide>

        <ButtonControlSlide ref={prevElRef} className="button-prev">
          <IoIosArrowBack color="#fff" size={27} />
        </ButtonControlSlide>
      </Content>
    </Container>
  )
}

export default CardCourseBox

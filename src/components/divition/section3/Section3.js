import "./Section3.css";
import { Col, Container, Row } from "react-bootstrap";
import ImgSection3 from "../../../assets/images/section2-bac.jpg";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
function Section3() {
  let ItemsS3 = [
    {
      id: 1,
      imgS3: ImgSection3,
    },
    {
      id: 2,
      imgS3: ImgSection3,
    },
    {
      id: 3,
      imgS3: ImgSection3,
    },
    {
      id: 4,
      imgS3: ImgSection3,
    },
  ];

  return (
    <div className="p-section3">
      <Container className="mb-5 p-0  text-center align-items-center rounded">
        <Row className="gy-4 album-style">
          <Col>
            <h2 className="text-start">
              <FaQuoteRight className="ms-2" size="25px" color="#346ed190" />
              تکه ای از آلبوم تصاویر
              <FaQuoteLeft className="ms-2" size="25px" color="#346ed190" />
            </h2>
          </Col>
          <Col>
            <div className="slider-container">
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img
                    src="https://swiperjs.com/demos/images/nature-1.jpg"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://swiperjs.com/demos/images/nature-2.jpg"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://swiperjs.com/demos/images/nature-3.jpg"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://swiperjs.com/demos/images/nature-4.jpg"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://swiperjs.com/demos/images/nature-5.jpg"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://swiperjs.com/demos/images/nature-6.jpg"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://swiperjs.com/demos/images/nature-7.jpg"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://swiperjs.com/demos/images/nature-8.jpg"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://swiperjs.com/demos/images/nature-9.jpg"
                    alt=""
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Section3;

// <Swiper
// style={{
//     '--swiper-navigation-color': '#fff',
//     '--swiper-pagination-color': '#fff',
//     }}
//     loop={true}
//     spaceBetween={5}
//     navigation={true}
//     thumbs={{ swiper: thumbsSwiper }}
//     modules={[FreeMode, Navigation, Thumbs]}
//     className="mySwiper2 width-height"
// >
//     <SwiperSlide>
//     <img src={ImgSection3} className='img-fluid ' alt='' />
//     </SwiperSlide>
//     <SwiperSlide>
//     <img src={ImgSection3} className='img-fluid ' alt='' />
//     </SwiperSlide>
//     <SwiperSlide>
//     <img src={ImgSection3} className='img-fluid ' alt='' />
//     </SwiperSlide>
//     <SwiperSlide>
//     <img src={ImgSection3} className='img-fluid ' alt='' />
//     </SwiperSlide>
//     <SwiperSlide>
//     <img src={ImgSection3} className='img-fluid ' alt='' />
//     </SwiperSlide>
// </Swiper>
// <Swiper
//     onSwiper={setThumbsSwiper}
//     loop={true}
//     spaceBetween={3}
//     slidesPerView={3}
//     freeMode={true}
//     watchSlidesProgress={true}
//     modules={[FreeMode, Navigation, Thumbs]}
//     className="mySwiper mt-breakpoint"
// >
//     <SwiperSlide>
//     <img src={ImgSection3} alt='' className='img-fluid rounded' />
//     </SwiperSlide>
//     <SwiperSlide>
//     <img src={ImgSection3} alt='' className='img-fluid rounded' />
//     </SwiperSlide>
//     <SwiperSlide>
//     <img src={ImgSection3} alt='' className='img-fluid rounded' />
//     </SwiperSlide>
//     <SwiperSlide>
//     <img src={ImgSection3} alt='' className='img-fluid rounded' />
//     </SwiperSlide>
//     <SwiperSlide>
//     <img src={ImgSection3} alt='' className='img-fluid rounded' />
//     </SwiperSlide>
// </Swiper>

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Section2.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Container } from "react-bootstrap";

function Section2() {
  return (
    <>
      <Container className="padding-section2">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="bg-pic">
            <h3 className="text-danger">اقا امیررضا</h3>
          </SwiperSlide>

          <SwiperSlide className="bg-pic">
            <h3 className="text-danger">اقا امیررضا</h3>
          </SwiperSlide>
          <SwiperSlide className="bg-pic">
            <h3 className="text-danger">اقا امیررضا</h3>
          </SwiperSlide>
          <SwiperSlide className="bg-pic">
            <h3 className="text-danger">اقا امیررضا</h3>
          </SwiperSlide>
          <SwiperSlide className="bg-pic">
            <h3 className="text-danger">اقا امیررضا</h3>
          </SwiperSlide>
          <SwiperSlide className="bg-pic">
            <h3 className="text-danger">اقا امیررضا</h3>
          </SwiperSlide>
          <SwiperSlide className="bg-pic">
            <h3 className="text-danger">اقا امیررضا</h3>
          </SwiperSlide>
          <SwiperSlide className="bg-pic">
            <h3 className="text-danger">اقا امیررضا</h3>
          </SwiperSlide>
        </Swiper>
      </Container>
    </>
  );
}
export default Section2
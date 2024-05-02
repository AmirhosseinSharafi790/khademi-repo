// import { React, useState } from "react";
import "./Section2.css";
import { Col, Container, Row } from "react-bootstrap";
// import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import img from "../../../assets/images/section2-bac.jpg";
function Section2() {
  // const [swiperParams, setSwiperParams] = useState({
  //   spaceBetween: 30,
  //   centeredSlides: true,
  //   autoplay: {
  //     delay: 5000,
  //     disableOnInteraction: false,
  //   },
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  // });
  // const swiper = useSwiper();

  // const handleMouseOver = () => {
  //   if (swiper) {
  //     swiper.autoplay.start();
  //   }
  // };

  const CarouselData = [
    {
      id: 1,
      title: "اخبار اردوی مهریز",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم و با استفاده از طراحان گرافیک است.",
      className: "p-5 rounded",
    },
    {
      id: 2,
      title: "اخبار اردوی مهریز",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم و با استفاده از طراحان گرافیک است.",
      className: "p-5 rounded",
    },
    {
      id: 3,
      title: "اخبار اردوی مهریز",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم و با استفاده از طراحان گرافیک است.",
      className: "p-5 rounded",
    },
    {
      id: 4,
      title: "اخبار اردوی مهریز",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم و با استفاده از طراحان گرافیک است.",
      className: "p-5 rounded",
    },
  ];

  return (
    <>
      <Container className="mt-5 p-5 pb-0">
        <Row>
          {/* <Swiper {...swiperParams}>
            <SwiperSlide
              className="d-flex justify-content-center c1 align-items-end rounded "
              style={{ backgroundColor: "#dae3eb" }}
              onMouseOver={handleMouseOver}
              onMouseOut={() => swiper?.autoplay.stop()}
            >
              <Col sm={12} md={6}>
                <h2 className="text-center fw-bold mt-5 text-white">slam</h2>
                <p className="text-center mb-5 text-white">this is text</p>
              </Col> */}
              {/* <div className="swiper-pagination"></div> */}
            {/* </SwiperSlide>
            <SwiperSlide
              className="d-flex justify-content-center c2 align-items-end rounded "
              style={{ backgroundColor: "#dae3eb" }}
              onMouseOver={handleMouseOver}
              onMouseOut={() => swiper?.autoplay.stop()}
            >
              <Col sm={12} md={6}>
                <h2 className="text-center fw-bold mt-5 text-white">slam</h2>
                <p className="text-center mb-5 text-white">this is text</p>
              </Col> */}
              {/* <div className="swiper-pagination"></div> */}
            {/* </SwiperSlide>
            <SwiperSlide
              className="d-flex justify-content-center c3 align-items-end rounded "
              style={{ backgroundColor: "#dae3eb" }}
              onMouseOver={handleMouseOver}
              onMouseOut={() => swiper?.autoplay.stop()}
            >
              <Col sm={12} md={6}>
                <h2 className="text-center fw-bold mt-5 text-white">slam</h2>
                <p className="text-center mb-5 text-white">this is text</p>
              </Col> */}
              {/* <div className="swiper-pagination"></div> */}
            {/* </SwiperSlide>
            <SwiperSlide
              className="d-flex justify-content-center c4 align-items-end rounded "
              style={{ backgroundColor: "#dae3eb" }}
              onMouseOver={handleMouseOver}
              onMouseOut={() => swiper?.autoplay.stop()}
            >
              <Col sm={12} md={6}>
                <h2 className="text-center fw-bold mt-5 text-white">slam</h2>
                <p className="text-center mb-5 text-white">this is text</p>
              </Col> */}
              {/* <div className="swiper-pagination"></div> */}
            {/* </SwiperSlide>
          </Swiper> */}
        </Row>
      </Container>
    </>
  );
}

export default Section2;

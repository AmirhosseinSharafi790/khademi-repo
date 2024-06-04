import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "./Section2.css";
import image from "../../../assets/images/section2-bac.jpg";
// import required modules
import { Autoplay } from "swiper/modules";
import { Col, Container, Row } from "react-bootstrap";
import Section2Item from "./Section2Item";
import "./Section2.css";
import SwiperButtons from "../../SwiperButtons/SwiperButtons";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
function Section2() {
  const newItem = [
    {
      id: 1,
      image: image,
      title: "لورم ایپسوم متن ساختگی",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
    },
    {
      id: 2,
      image: image,
      title: "لورم ایپسوم متن ساختگی",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
    },
    {
      id: 3,
      image: image,
      title: "لورم ایپسوم متن ساختگی",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
    },
    {
      id: 4,
      image: image,
      title: "لورم ایپسوم متن ساختگی",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
    },
    {
      id: 5,
      image: image,
      title: "لورم ایپسوم متن ساختگی",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
    },
    {
      id: 6,
      image: image,
      title: "لورم ایپسوم متن ساختگی",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
    },
  ];
  return (
    <>
      <Container>
        <Row>
          <Swiper
            spaceBetween={25}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
              1400: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 1,
              },
            }}
            className="customSwiperStyle"
          >
            <div className="swiperTopSection">
              <div className="px-4">
                <FaQuoteRight className="ms-2" size="25px" color="#346ed190" />
                <h4 className="sectionTitle d-inline">جدیدترین خبر ها</h4>
                <FaQuoteLeft className="ms-2" size="25px" color="#346ed190" />
              </div>
              <SwiperButtons />
            </div>
            {newItem.map((item) => (
              <Col className="">
                <SwiperSlide key={item.id}>
                  <Section2Item {...item} />
                </SwiperSlide>
              </Col>
            ))}
          </Swiper>
        </Row>
      </Container>
    </>
  );
}
export default Section2;

import "./Manegment.css";
import Header from "../../header/Header";
import { Container, Row, Col } from "react-bootstrap";
import ImgCaders from "../../../assets/images/imageManager.png";
import Footer from "../../footer/Footer";
import ManagementItems from "./ManagementItems";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
function Management() {
  let ManagementCadrs = [
    {
      id: 1,
      img: ImgCaders,
      name: "جلیل رفیعی",
      title: "مدیر هنرستان",
    },
    {
      id: 2,
      img: ImgCaders,
      name: "حمید انتظاری",
      title: "معاون پرورشی هنرستان",
    },
    {
      id: 3,
      img: ImgCaders,
      name: "محسن شاه محمدی",
      title: "آموزشی هنرستان",
    },
    {
      id: 4,
      img: ImgCaders,
      name: "مجید حکیمی",
      title: "امور مالی هنرستان",
    },
    {
      id: 5,
      img: ImgCaders,
      name: "جلال دهقان",
      title: "سرپرست کارگاه هنرستان",
    },
  ];

  return (
    <Container>
      <div className="bg-manager">
        <Row className="align-items-center">
          <Col lg={8}>
            <h2 className="fw-bold py-3">کادر مدیریت</h2>
            <p className="text-justify text-dark text-opacity-75">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
              و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای
              زیادی در شصت و سه درصد گذشته حال و آینده
            </p>
          </Col>
          <Col lg={4}>
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper style-swiper"
            >
              <SwiperSlide className="style-swiper-slide mt-2">
                <span>
                  <img
                    src={ManagementCadrs[0].img}
                    className="style-image-manager img-fluid"
                  />
                </span>
                <h3 className="my-2">{ManagementCadrs[0].name}</h3>
                <span>({ManagementCadrs[0].title})</span>
              </SwiperSlide>
              <SwiperSlide className="style-swiper-slide mt-2">
                <span>
                  <img
                    src={ManagementCadrs[1].img}
                    className="style-image-manager img-fluid"
                  />
                </span>
                <h3 className="my-2">{ManagementCadrs[1].name}</h3>
                <span>({ManagementCadrs[1].title})</span>
              </SwiperSlide>
              <SwiperSlide className="style-swiper-slide mt-2">
                <span>
                  <img
                    src={ManagementCadrs[2].img}
                    className="style-image-manager img-fluid"
                  />
                </span>
                <h3 className="my-2">{ManagementCadrs[2].name}</h3>
                <span>({ManagementCadrs[2].title})</span>
              </SwiperSlide>
              <SwiperSlide className="style-swiper-slide mt-2">
                <span>
                  <img
                    src={ManagementCadrs[3].img}
                    className="style-image-manager img-fluid"
                  />
                </span>
                <h3 className="my-2">{ManagementCadrs[3].name}</h3>
                <span>({ManagementCadrs[3].title})</span>
              </SwiperSlide>
              <SwiperSlide className="style-swiper-slide mt-2">
                <span>
                  <img
                    src={ManagementCadrs[4].img}
                    className="style-image-manager img-fluid"
                  />
                </span>
                <h3 className="my-2">{ManagementCadrs[4].name}</h3>
                <span>({ManagementCadrs[4].title})</span>
              </SwiperSlide>
            </Swiper>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Management;

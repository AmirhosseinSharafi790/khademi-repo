import "./Section4.css";
import { Col, Container, Row } from "react-bootstrap";
// import { Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
import ImgSection4 from "../../../assets/images/Shabake.jpg";
// import React, { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCards } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/effect-cards";
import Section4Item from "./Section4Item";
function Section4() {
  const PartsValue = [
    {
      id: 1,
      img: ImgSection4,
      title: "رشته شبکه و نرم افزار",
      text: "شاید بشه قرن ۲۱ را قرن کامپیوتر و اینترنت نامید و به همین دلیل رشته کامپیوتر یا همان رشته شبکه و نرم افزار محبوب ترین رشته تحصیلی در هنرستان های فنی و حرفه ای شده است. امروزه از کامپیوتر در همه سازمانها و ادارات شهرهای بزرگ و کوچیک استفاده میشه.",
      CName: "border-0 text-white rounded-3 mx-2",
    },
    {
      id: 2,
      img: ImgSection4,
      title: "رشته حسابداری",
      text: "قطعا حسابداری نیز مانند دیگر علوم فنی از آغازین روزهای پیدایش انسان به وجود آمده است. رشته حسابداری با گسترش کسب و کار ها و خدمات و نیز دانش و تکنولوژی در خدمت توسعه ی کشور ها در تمامی زمینه ها در آمده است. حسابداری در واقع با انتقال اطلاعات مالی به دیگران به نوعی زد.",
      CName: "border-0 text-white rounded-3 mx-2",
    },
    {
      id: 3,
      img: ImgSection4,
      title: "رشته الکتروتکنیک",
      text: "نرژی برق و توسعه آن این روزها به یکی از فناوری‌های مهم و موردنیاز هر کشور تبدیل گشته‌ است. انتقال انرژی از نیروگاه به واحدهای مصرف کننده‌ نیازمند حضور مهندسان برق الکتروتکنیک می‌باشد. پیشرفت صنعت برق در سال‌های اخیر باعث شده‌ زمینه‌های شغلی فراوانی برای این رشته‌ فراهم شود",
      CName: "border-0 text-white rounded-3 mx-2",
    },
  ];
  return (
    // <Container>
    //   <Swiper
    //     effect={"cards"}
    //     grabCursor={true}
    //     modules={[EffectCards]}
    //     className="mySwiper style-swiper-S4"
    //   >
    //     <SwiperSlide className="style-swiper-slide-S4">
    //       <Row>
    //         <Col md={6}>
    //           <img src={PartsValue[0].img} className="img-fluid h-100"/>
    //         </Col>
    //         <Col md={6}>
    //           <h2 className=" my-3 colorS4-title">{PartsValue[0].title}</h2>
    //           <p className="mt-4 px-4 text-justify">{PartsValue[0].text}</p>
    //           <Button id="btn-green1" className="mx-3 my-3 mt-lg-5">
    //             <Link className="text-white text-decoration-none">
    //               هنرآموزان
    //             </Link>
    //           </Button>
    //           <Button id="btn-green" className="mx-3 my-3 mt-lg-5">
    //             <Link className="text-white text-decoration-none">
    //               اطلاعات بیشتر
    //             </Link>
    //           </Button>
    //         </Col>
    //       </Row>
    //     </SwiperSlide>
    //     <SwiperSlide className="style-swiper-slide-S4">
    //       <Row>
    //         <Col md={6}>
    //           <img src={PartsValue[1].img} className="img-fluid h-100"/>
    //         </Col>
    //         <Col md={6}>
    //           <h2 className=" my-3 colorS4-title">{PartsValue[1].title}</h2>
    //           <p className="mt-4 px-4 text-justify">{PartsValue[1].text}</p>
    //           <Button id="btn-green1" className="mx-3 my-3 mt-lg-5">
    //             <Link className="text-white text-decoration-none">
    //               هنرآموزان
    //             </Link>
    //           </Button>
    //           <Button id="btn-green" className="mx-3 my-3 mt-lg-5">
    //             <Link className="text-white text-decoration-none">
    //               اطلاعات بیشتر
    //             </Link>
    //           </Button>
    //         </Col>
    //       </Row>
    //     </SwiperSlide>
    //     <SwiperSlide className="style-swiper-slide-S4">
    //       <Row>
    //         <Col lg={6}>
    //           <img src={PartsValue[2].img} className="img-fluid h-100"/>
    //         </Col>
    //         <Col lg={6}>
    //           <h2 className=" my-3 colorS4-title">{PartsValue[2].title}</h2>
    //           <p className="mt-4 px-4 text-justify">{PartsValue[2].text}</p>
    //           <Button id="btn-green1" className="mx-3 my-3 mt-lg-5">
    //             <Link className="text-white text-decoration-none">
    //               هنرآموزان
    //             </Link>
    //           </Button>
    //           <Button id="btn-green" className="mx-3 my-3 mt-lg-5">
    //             <Link className="text-white text-decoration-none">
    //               اطلاعات بیشتر
    //             </Link>
    //           </Button>
    //         </Col>
    //       </Row>
    //     </SwiperSlide>
    //   </Swiper>
    // </Container>

    // <Container>
    //   <Row>
    //     {PartsValue.map(part => (
    //       <Section4Item {...part} />
    //     ))}
    //   </Row>
    // </Container>
    <Container>
      <Row>
        {PartsValue.map((part) => (
          <Section4Item {...part} />
        ))}
      </Row>
    </Container>
  );
}
export default Section4;

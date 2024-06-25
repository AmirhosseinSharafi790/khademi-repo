import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Section2.css";
import { Autoplay } from "swiper/modules";
import { Col, Container, Row } from "react-bootstrap";
import Section2Item from "./Section2Item";
import "./Section2.css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Network from "../../../network";
import Loding from "../../Loding/Loding";
function Section2() {
  const [newsState, setNewsState] = useState([]);
  const [isPending , setIsPending] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const network = new Network();
      const news = await network.getBaseInfo();
      if (news == null || news.status === "ERROR") {
        alert("اتصال شما برقرار نیست");
        
      } else {
        setNewsState(news.data.news);
        setIsPending(false);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      {isPending ? (
        <Loding />
      ) : (
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
                slidesPerView: 3,
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
                <FaQuoteRight className="ms-2" size="20px" color="#346ed190" />
                <h4 className="sectionTitle d-inline">جدیدترین خبر ها </h4>
                <FaQuoteLeft className="ms-2" size="20px" color="#346ed190" />
              </div>
            </div>
            {newsState.map((item) => (
              <Col key={item.id}>
                <SwiperSlide>
                  <Section2Item {...item} />
                </SwiperSlide>
              </Col>
            ))}
          </Swiper>
        </Row>
      </Container>
      )}
    </>
  );
}
export default Section2;

import "./Section2.css"
// import ImgSection2 from "../../../assets/images/section2-bac.jpg"
import Section2Item from "./Section2Item";
import {useRef} from "react";
import { Col, Container , Row } from "react-bootstrap";
import { Swiper , SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
function Section2(){

    const CarouselData = [
        {
            id : 1,
            title : "اخبار اردوی مهریز",
            text : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم و با استفاده از طراحان گرافیک است.",
            className : "c1 p-5 rounded"
        },
        {
            id : 2,
            title : "اخبار اردوی مشهد",
            text : "لورم ایپسوم متن ساختگی از طراحان گرافیک است.",
            className : "c2 p-5 rounded"
        },
        {
            id : 3,
            title : "اطلاعیه درباره تعطیلات عید نوروز",
            text : "لورم ایپسوم متن ساختگی با صنعت چاپ و با استفاده از طراحان گرافیک است.",
            className : "c3 p-5 rounded"
        },
        {
            id : 4,
            title : "اطلاعیه درباره تعطیلات عید نوروز",
            text : "لورم ایپسوم متن ساختگی با صنعت چاپ و با استفاده از طراحان گرافیک است.",
            className : "c4 p-5 rounded"
        }
    ]

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
  return (
    <>
        <Container className="mt-5  p-5 pb-0">
            <Row>
                <Col sm={12}>
                        <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                        delay: 5000,
                        disableOnInteraction: true,
                        }}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        onAutoplayTimeLeft={onAutoplayTimeLeft}
                        className="mySwiper flexible">
                         <SwiperSlide className="c1 d-flex align-items-end justify-content-center rounded py-5">
                            <div>
                                <h1 className="text-center">سلام من به تو </h1>
                                <p className="text-center">متن در مورد اخبار و اطلاعیه</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="c2 d-flex align-items-end justify-content-center rounded py-5">
                            <div>
                                <h1 className="text-center">سلام من به تو </h1>
                                <p className="text-center">متن در مورد اخبار و اطلاعیه</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="c3 d-flex align-items-end justify-content-center rounded py-5">
                            <div>
                                <h1 className="text-center">سلام من به تو </h1>
                                <p className="text-center">متن در مورد اخبار و اطلاعیه</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="c4 d-flex align-items-end justify-content-center rounded py-5">
                            <div>
                                <h1 className="text-center">سلام من به تو </h1>
                                <p className="text-center">متن در مورد اخبار و اطلاعیه</p>
                            </div>
                        </SwiperSlide>
                        <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                        </div>
                    </Swiper>
                </Col>
            </Row>
        </Container>
    </>
    
  );
}
export default Section2
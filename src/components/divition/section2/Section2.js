import "./Section2.css"
import ImgSection2 from "../../../assets/images/section2-bac.jpg"
import Section2Item from "./Section2Item";
import {useRef} from "react";
import Slider from "react-slick";
import { Col, Container , Row } from "react-bootstrap";
import { IoIosArrowDropleft , IoIosArrowDropright } from "react-icons/io";
function Section2(){

    const CarouselData = [
        {
            id : 1,
            img : ImgSection2,
            title : "اخبار اردوی مهریز",
            text : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم و با استفاده از طراحان گرافیک است."
        },
        {
            id : 2,
            img : ImgSection2,
            title : "اخبار اردوی مشهد",
            text : "لورم ایپسوم متن ساختگی از طراحان گرافیک است."
        },
        {
            id : 3,
            img : ImgSection2,
            title : "اطلاعیه درباره تعطیلات عید نوروز",
            text : "لورم ایپسوم متن ساختگی با صنعت چاپ و با استفاده از طراحان گرافیک است."
        }
    ]

    let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Container className="mt-5 mt-90 p-5">
        <Row>
            <Col sm={12}>
                <div className="slider-container">
                    <Slider
                        ref={slider => {
                        sliderRef = slider;
                        }}
                        {...settings}
                    >
                        {CarouselData.map(Item => (
                            <Section2Item key={Item.id} {...Item}/>
                        ))}
                    </Slider>
                    <div  className="my-4 text-center btn-sm-none">
                        <button className="button p-1" onClick={previous}>
                            <IoIosArrowDropright color="#dae5eb" size="60px" />
                        </button>
                        <button className="button p-1" onClick={next}>
                            <IoIosArrowDropleft color="#dae5eb" size="60px" />
                        </button>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
    
  );
}
export default Section2
// import "./Section2.css"
import ImgSection2 from "../../../assets/images/section2-bac.jpg"
import Carousel from 'react-bootstrap/Carousel';
import Section2Item from "./Section2Item";
import { Col, Container , Row } from "react-bootstrap";
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
    return(
        <Container className="mt-5 mt-90">
            <Row>
                <Col sm={12}>
                    <Carousel>
                        {
                            CarouselData.map( Box => (
                                <Section2Item key={Box.id} {...Box}/>
                            ))
                        }
                    </Carousel>
                </Col>
            </Row>
        </Container>
    )
}
export default Section2
import "./AboutUs.css"
import Carousel from 'react-bootstrap/Carousel';
import { Col , Row } from "react-bootstrap"
function Accordion({image , title , desc}){
    return(
        <>
        <Row className="my-3 d-flex flex-row bg shadow p-3 rounded-2">
            <Col sm={12} md={6} className="my-3">
                <Carousel>
                    <Carousel.Item>
                        <img src={image} alt="" className="img-fluid" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={image} alt="" className="img-fluid" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={image} alt="" className="img-fluid" />
                    </Carousel.Item>
                </Carousel>  
            </Col>
            <Col sm={12} md={6}>
                <h5 className="p-2 my-3 text-white lh-base text-justify border-start border-danger border-2">{title}</h5>
                <p className="p-2 my-3 text-truncate text-justify fs-12">{desc}</p>
            </Col>
        </Row>
        </>
    )
}
export default Accordion
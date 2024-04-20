import "./Section2.css"
import { Col , Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

function Section2Item({img , title , text}){
    return(
        <Carousel.Item className="rounded">
            <Row className="bg-card p-3" id="bg-nav">
                <Col md={3}>
                    <img src={img} alt="..." className="img-fluid rounded"/>
                </Col>
                <Col md={9}>
                    <h5 className="p-3 text-center">{title}</h5>
                    <p className="p-3 text-center text-dark">{text}</p>
                </Col>
            </Row>
        </Carousel.Item>
    )
}
export default Section2Item
import "./AboutUs.css"
// import Carousel from 'react-bootstrap/Carousel';
import { Col , Row } from "react-bootstrap"
function SlideShow({image , title , desc}){
    return(
        <>
        <Row className="my-3 d-flex flex-row align-items-center bg-box shadow p-3 rounded-2">
            <Col sm={12} md={6} className="my-3">
                <img src={image} alt="" className="img-fluid rounded"/>
            </Col>
            <Col sm={12} md={6}>
                <h5 className="p-2 my-3 text-dark opacity-50 lh-base text-justify">{title}</h5>
                <p className="p-2 my-3 text-truncate text-justify fs-12">{desc}</p>
            </Col>
        </Row>
        </>
    )
}
export default SlideShow
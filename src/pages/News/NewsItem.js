import "./News.css"
import { Col, Row } from "react-bootstrap";
function NewsItem({image , title , desc}){
    return(
        <Row className="flex-row-reverse bg p-3 align-items-center justify-content-center">
            <Col sm={12} md={6}>
                <img src={image} alt="" className="img-fluid rounded shadow"/>
            </Col>
            <Col sm={12} md={6} className="text-center">
                <h4 className="py-3 text-white text-center">{title}</h4>
                <p className="opacity-75 text-center">{desc}</p>
            </Col>
        </Row>
    )
}
export default NewsItem
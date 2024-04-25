import "./News.css"
import { Col, Row } from "react-bootstrap";
function NewsItem({image , title , desc}){
    return(
        <Col sm={12} md={6} className="my-3 box-hover">
            <Row className="d-flex justify-content-center align-items-center border border-danger shadow rounded g-1 p-3">
                <Col>
                    <img src={image} alt="" className="img-fluid rounded shadow border border-white" />
                </Col>
                <Col>
                    <h5 className="p-2 text-justify opacity-75 text-danger">{title}</h5>
                    <p className="p-2 text-justify opacity-50">{desc}</p>
                </Col>
            </Row>
        </Col>
    )
}
export default NewsItem
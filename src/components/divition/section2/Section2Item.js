import "./Section2.css"
import { Col , Row } from "react-bootstrap";

function Section2Item({img , title , text}){
    return(
        <div key={1} className="bg rounded">
            <Row className="flex-row-reverse align-items-center justify-content-center">
                <Col sm={12} md={6}>
                    <img src={img} alt="" className="img-fluid"/>
                </Col>
                <Col sm={12} md={6} className="text-center">
                    <h4 className="py-3 text-white text-center">{title}</h4>
                    <p className="opacity-75 text-center">{text}</p>
                </Col>
            </Row>
        </div>
    )
}
export default Section2Item
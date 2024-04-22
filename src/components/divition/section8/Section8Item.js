import "./Section8.css"
import { Col } from "react-bootstrap"
function Section8Item({title , text}){
    return(
        <Col sm={12} md={6} lg={4} className="my-4 text-white rounded">
            <div className="shadow-section-6 p-3 rounded-3 flexible"  id="box-height">
              <h3 className="text-center p-3 text-dark">{title}</h3>
              <p className="text-justify p-3 text-white">{text}</p>
            </div>
          </Col>
    )
}
export default Section8Item
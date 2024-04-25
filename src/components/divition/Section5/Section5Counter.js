import './Section5.css'
import { Col } from "react-bootstrap"
function Section5Counter({textValue , icon}){
    return(
        <Col className="my-4" md = {6} xl = {3}>
            <div className = "counterBox">
              <i className = {icon}></i>
              <p className = "purecounter fs-3 my-2" data-purecounter-start="0" data-purecounter-end="60"></p>
              <p className = "desc-counterBox">{textValue}</p>
            </div>
        </Col>
    )
}

export default Section5Counter
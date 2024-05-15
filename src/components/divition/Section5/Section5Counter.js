import './Section5Counter.css'
import { Col } from "react-bootstrap"

function Section5Counter({textValue , icon , start , end}){
    return(
        <Col md = {6} xl = {3}>
            <div className = "counterBox p-5">
              <i className = {icon}></i>
              <p className = "purecounter fs-3 my-2" data-purecounter-start={start} data-purecounter-end={end}></p>
              <p className = "desc-counterBox">{textValue}</p>
            </div>
        </Col>
    )
}

export default Section5Counter
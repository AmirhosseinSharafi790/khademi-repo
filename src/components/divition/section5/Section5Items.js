import './Section5.css'
import { Col } from "react-bootstrap"
import CountUp from 'react-countup';
function Section5Items({textValue , icon , count}){
    return(
        <Col md = {6} xl = {3}>
            <div className = "counterBox p-5">
              <i className = {icon}></i>
              <p className = "purecounter fs-3 my-2"></p>
              <p className = "desc-counterBox">{textValue}</p>
              <CountUp
                start={0}
                end={count}
                duration={4}
                className='sizeCount'
              />
            </div>
        </Col>
    )
}

export default Section5Items
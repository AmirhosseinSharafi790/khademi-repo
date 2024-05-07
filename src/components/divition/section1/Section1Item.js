import './Section1.css'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Section1Item({textValue , icon , href}){
    return(
        <Col md = {6} xl = {3}>

        <div className="menu-item animate__animated animate__slideInRight">
            <Link to = {href}><span className='bg-icon'>{icon}</span></Link>
            <Link to = {href}><b>{textValue}</b></Link>
        </div>
        </Col>
    )
}

export default Section1Item

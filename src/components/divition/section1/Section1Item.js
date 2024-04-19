import './Section1.css'
import { Col } from 'react-bootstrap'
function Section1Item({textValue}){
    return(
        <Col sm = {6} lg = {3}>
        <div className="menu-item animate__animated animate__slideInRight">
            <a href="sections/news/news.html">{textValue}</a>
        </div>
    </Col>
    )
}

export default Section1Item

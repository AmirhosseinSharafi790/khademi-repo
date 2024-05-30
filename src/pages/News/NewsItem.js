import "./News.css"
import { Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
function NewsItem({image , title , desc}){
    return(
            <Col md={6} lg={6} xl={4} className="p-4 mb-4 rounded">
                <div className="rounded p-3 shadow box-bg">
                <img src={image} alt=""className="img-fluid rounded my-2 shadow"/>
                <h5 className="text-center text-color mt-2 border-bottom border-dark border-opacity-25 p-3 opacity-75">{title}</h5>
                <p className="text-justify text-dark opacity-75 px-3">{desc}</p>
                </div>
                
            </Col>
    )
}
export default NewsItem
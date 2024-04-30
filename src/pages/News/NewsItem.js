import "./News.css"
import { Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
function NewsItem({image , title , desc}){
    return(
            <Col md={6} lg={6} xl={4} className="bg-nav p-4  mb-4 rounded">
                <div className="rounded p-3 shadow">
                <img src={image} alt=""className="img-fluid rounded my-3 shadow"/>
                <h5 className="text-center mt-2 border-bottom border-dark border-opacity-25 p-3 opacity-75">{title}</h5>
                <p className="text-justify px-3">{desc}</p>
                <Link className="d-flex justify-content-end text-decoration-none">
                    <Button variant="outline-dark" className="my-3 p-2">
                            <span>
                                ادامه خبر <FaArrowLeft size={"25px"} />
                            </span>
                    </Button>
                </Link>
                </div>
                
            </Col>
    )
}
export default NewsItem
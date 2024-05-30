import "./AboutUs.css"
import { Col } from "react-bootstrap"
function Images({img , title , desc}){
    return(
        <>
            <Col sm={12} md={6} className="my-3">
            <img src={img} alt="" className="img-fluid rounded-3"/>
            </Col>
            <Col sm={12} md={6}>
                <h5 className="p-2 my-3 lh-base text-dark opacity-50 text-justify">{title}</h5>
                <p className="p-2 my-3 text-justify fs-12">{desc}</p>
            </Col>
        </>
    )
}
export default Images
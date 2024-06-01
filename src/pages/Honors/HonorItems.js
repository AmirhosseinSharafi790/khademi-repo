import { Col } from "react-bootstrap"

function HonorItems({img , title , desc}){
    return(
            <Col md = {6} lg = {4} xl = {3}>
                <div className="card-honors text-center">
                    <img src={img} className="card-img-top" alt=""/>
                    <div className="card-body-honors p-3">
                      <h4 className="card-title-honors color-red py-3">{title}</h4>
                      <p className="card-text-honors">{desc}</p>
                    </div>
                </div>
            </Col>
    )
}

export default HonorItems
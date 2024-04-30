import "./Section7.css"
import {Col, Container, Row} from "react-bootstrap"
import Cup from "../../../assets/images/cup.png"
import { Link } from 'react-router-dom';
function Section7(){
    return(
        <Container className="my-5">
            <Row className="align-items-center bacgruond-color-eft p-4 rounded-4 shadow">
            <Col sm={12} md={6} className="text-center">
                <img src={Cup} className="img-fluid display-none p-3" alt=""/>
            </Col>
            <Col sm={12} md={6}>
                <h3 className="p-3 text-danger">گوشه‌ای از افتخارت مجموعه</h3>
                <Row className="my-1 p-3 rounded align-items-center justify-content-center">
                <Col className="col-8 text-center">
                    <Link className="eft-btn text-decoration-none d-block" to={"/honors"}>
                        لورم ایپسوم متن ساختگی با تولید سادگی
                    </Link>
                </Col>
                <Col className="col-4 text-center">
                        <Link className="text-decoration-none text-dark" to={"/honors"}>
                            <i className="bi bi-arrow-left"></i>
                        </Link>
                </Col>
                </Row>
                <Row className="my-1 p-3 rounded align-items-center justify-content-center">
                    <Col className="col-8 text-center">
                            <Link className="eft-btn text-decoration-none d-block" to={"/honors"}>
                                لورم ایپسوم متن ساختگی با تولید سادگی
                            </Link>              
                    </Col>
                    <Col className="col-4 text-center">
                        <Link className="text-decoration-none text-dark" to={"/honors"}>
                            <i className="bi bi-arrow-left"></i>
                        </Link>
                    </Col>           
                </Row>
                <Row className="my-1 p-3 rounded align-items-center justify-content-center">
                    <Col className="col-8 text-center">
                            <Link className="eft-btn text-decoration-none d-block" to={"/honors"}>
                                لورم ایپسوم متن ساختگی با تولید سادگی
                            </Link>              
                    </Col>
                    <Col className="col-4 text-center">
                        <Link className="text-decoration-none text-dark" to={"/honors"}>
                            <i className="bi bi-arrow-left"></i>
                        </Link>
                    </Col>            
                </Row>
                <Row className="my-1 p-3 rounded align-items-center justify-content-center">
                    <Col className="col-8 text-center">
                            <Link className="eft-btn text-decoration-none d-block" to={"/honors"}>
                                لورم ایپسوم متن ساختگی با تولید سادگی
                            </Link>              
                    </Col>
                    <Col className="col-4 text-center">
                        <Link className="text-decoration-none text-dark" to={"/honors"}>
                            <i className="bi bi-arrow-left"></i>
                        </Link>
                    </Col>           
                </Row>
                <Row className="my-1 p-3 rounded align-items-center justify-content-center">
                    <Col className="col-8 text-center">
                            <Link className="btn-all text-decoration-none d-block" to={"/honors"}>
                               مشاهده همه افتخارت
                            </Link>              
                    </Col>
                    <Col className="col-4 text-center">
                        <Link className="text-decoration-none text-dark" to={"/honors"}>
                            <i className="bi bi-arrow-left"></i>
                        </Link>
                    </Col>           
                </Row>
            </Col>
            </Row>
        </Container>
    )
}
export default Section7
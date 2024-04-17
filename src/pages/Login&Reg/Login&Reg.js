import { Link, Outlet } from "react-router-dom"
import "./Login&Reg.css"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
function LoginReg(){
    return(
        <>
            <Container>
            <Row>
                <Col sm={12}>
                    <div className="d-flex justify-content-around align-items-center text-center p-4 bg-color text-white rounded">
                            <Col sm={12} md={6} lg={6} xl={6}>
                                <Link to={"login"} className="btn rounded-5 w-100" id="BtnLogin">ورود</Link>
                            </Col>
                            <Col sm={12} md={6}  lg={6} xl={6}>
                            <Link to={"Register"} className="btn rounded-5 w-100" id="BtnRegister">ثبت نام</Link>
                            </Col>
                    </div>
                    <Outlet/>
                </Col>
            </Row>
        </Container>
        </>
    )
}
export default LoginReg
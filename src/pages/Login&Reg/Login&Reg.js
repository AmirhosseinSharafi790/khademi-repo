import { Link, Routes , Route } from "react-router-dom"
import "./Login&Reg.css"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import Register from "./Register"
import Login from "./Login"
function LoginReg(){
    return(
        <>
            <Container>
            <Row>
                <Col sm={12}>
                    <div className="d-flex justify-content-around align-items-center text-center p-4 bg-color text-white rounded">
                            <Col sm={12} md={6} lg={6} xl={6}>
                                <Link to={"login"} className="btn p-3 text-dark border rounded-5 border-white border-2 w-100">ورود</Link>
                            </Col>
                            <Col sm={12} md={6}  lg={6} xl={6}>
                            <Link to={"Register"} className="btn p-3 text-dark border rounded-5 border-white border-2 w-100">ثبت نام</Link>
                            </Col>
                    </div>
                
                </Col>
            </Row>
        </Container>
        <Routes>
            <Route path="login" element={ <Login/> } />
            <Route path="Register" element={ <Register/> } />
        </Routes>
        </>
    )
}
export default LoginReg
import "./IndexPage.css"
import { Form , Button , Col } from "react-bootstrap"
function Login(){
    return(
        <Col sm={12} className="mt-4">
            <Form.Group className="baseStyle mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className="mb-2 alignment border-bottom border-dark">نام کاربری :</Form.Label>
                <Form.Control className="p-3 bg-input" type="text" placeholder="نام کاربری خود را وارد کنید"/>
            </Form.Group>
            <Form.Group className="baseStyle mb-3" controlId="exampleForm.ControlInput2">
                <Form.Label className="mb-2 alignment border-bottom border-dark">رمز عبور :</Form.Label>
                <Form.Control className="p-3 bg-input" type="text" placeholder="رمز عبور خود را وارد کنید"/>
            </Form.Group>
            <Form.Group className="baseStyle mt-5 text-center" controlId="exampleForm.ControlInput3">
                <Button variant="" className="btn-style w-100 m-0 p-4">
                    ورود به پنل
                </Button>
            </Form.Group>
        </Col>
    )
}
export default Login
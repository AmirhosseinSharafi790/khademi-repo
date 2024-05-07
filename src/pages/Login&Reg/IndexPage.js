import { Button, Form } from "react-bootstrap"
import "./IndexPage.css"
import {Col} from "react-bootstrap"
import { useRef } from "react"
function IndexPage(){
    const inputLogin = useRef()
    const inputSigup = useRef()

    // const clickLoginHandler = ()=>{
    //     // inputLogin.current.style.
    // }
    const clickSigupHandler = ()=>{
        inputSigup.current.style.display = "block";
    }
    return(
        <>
            <Form className="mt-2 baseStyle" id="alignments">
                <fieldset className="p-0 rounded">
                    <legend className="text-center p-2 bg-info bg-opacity-10 rounded">
                        <button className="btn-style" >ورود</button>
                        <button className="btn-style" onClick={clickSigupHandler}>ثبت نام</button>
                    </legend>
                    <Col sm={12} className="mt-4" ref={inputLogin}>
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
                    <Col sm={12} className="mt-4" style={{display : "none"}} ref={inputSigup}>
                    <Form.Group className="baseStyle mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className="mb-2 alignment border-bottom border-dark">نام کاربری :</Form.Label>
                        <Form.Control className="p-3 bg-input" type="text" placeholder="نام کاربری خود را وارد کنید"/>
                    </Form.Group>
                    <Form.Group className="baseStyle mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label className="mb-2 alignment border-bottom border-dark">رمز عبور :</Form.Label>
                        <Form.Control className="p-3 bg-input" type="text" placeholder="رمز عبور خود را وارد کنید"/>
                    </Form.Group>
                    <Form.Group className="baseStyle mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label className="mb-2 alignment border-bottom border-dark">رمز عبور :</Form.Label>
                        <Form.Control className="p-3 bg-input" type="text" placeholder="تکرار رمز عبور خود را وارد کنید"/>
                    </Form.Group>
                    <Form.Group className="baseStyle mt-5 text-center" controlId="exampleForm.ControlInput3">
                        <Button variant="" className="btn-style w-100 m-0 p-4">
                            ثبت نام
                        </Button>
                    </Form.Group>
                    </Col>
                </fieldset>
            </Form>
        </>
    )
}
export default IndexPage
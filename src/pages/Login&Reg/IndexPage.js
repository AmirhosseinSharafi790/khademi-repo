import "./IndexPage.css"
import { Form } from "react-bootstrap"
import Sigup from "./Sigup";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
function IndexPage(){
    const navigate = useNavigate();
    const clickSigupHandler = ()=>{
        navigate(<Sigup/>)
    }
    const clickLoginHandler = ()=>{
        navigate(<Login/>)
    }

    
    return(
        <>
            <Form className="mt-2 baseStyle" id="alignments">
                <fieldset className="p-0 rounded">
                    <legend className="text-center p-2 bg-info bg-opacity-10 rounded">
                        <button className="btn-style" onClick={clickLoginHandler}>ورود</button>
                        <button className="btn-style" onClick={clickSigupHandler}>ثبت نام</button>
                    </legend>
                    {/* <Login/> */}
                    <Sigup/>
                </fieldset>
            </Form>
        </>
    )
}
export default IndexPage
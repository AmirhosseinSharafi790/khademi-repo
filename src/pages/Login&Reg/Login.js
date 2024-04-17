import { Link } from "react-router-dom"
import "./Login&Reg.css"
import Navbar from "react-bootstrap/esm/Navbar"
import Logo from "../../assets/images/Logo.jpg"
function Login(){
    return(
        <>
        <Navbar.Brand href="#" className="position-fixed start-0 bottom-0 my-3 mx-4">
            <img src={Logo} className="img-fluid border-logo mx-2" style={{width : '70px' , height : '70px' , borderRadius : '50%'}} alt="" />
        </Navbar.Brand>
        <div className="login-page">
            <div className="form rounded p-5">
                <form className="login-form">
                <input type="text" placeholder="نام کاربری"/>
                <input type="password" placeholder="رمز عبور"/>
                <button className="button">ورود</button>
                <p className="message"><Link to={"/login&reg/Register"}>ثبت نام نکرده اید؟ </Link></p>
                <p className="message d-flex justify-content-center align-items-center">
                    <Link to={"/"}>
                        <span className="border-bottom border-dark p-1">برگشت به سایت</span>
                    </Link>
                </p>
                </form>
            </div>
        </div>
        </>
    )
}
export default Login
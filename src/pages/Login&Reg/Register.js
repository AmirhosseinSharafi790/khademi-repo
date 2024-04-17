import { Link } from "react-router-dom"
import "./Login&Reg.css"
function Register(){
    return(
       <>
       <div className="login-page">
            <div className="form rounded p-5">
                <form className="login-form">
                <input type="text" placeholder="نام کاربری"/>
                <input type="password" placeholder="رمز عبور"/>
                <input type="password" placeholder="تکرار رمز عبور"/>
                <button className="button">ثبت نام</button>
                <p className="message"><Link to={"/login&reg/login"}>حساب کاربری دارید ؟</Link></p>
                <p className="message d-flex justify-content-center align-items-center">
                    <Link to={"/"} className="mx-2">
                        <span className="border-bottom border-dark p-1">برگشت به سایت</span>
                    </Link>
                    <Link to={"/about"} className="mx-2">
                        <span className="border-bottom border-dark p-1">درباره هنرستان</span>
                    </Link>
                </p>
                </form>
            </div>
        </div>
       </>
    )
}
export default Register
import "./IndexPage.css";
import { useState } from "react";
import { Link } from "react-router-dom";
function Sigup() {
  const [meliCode, setMeliCode] = useState("");
  const [pass, setPass] = useState("");
  const [rePass, setRePass] = useState("");
  const [email, setEmail] = useState("");

  const loginHandler = () => {};
  return (
    <>
      <section>
        <div className="login">
          <h2>ثبت نام</h2>
          <div className="inputBox">
            <input
              type="text"
              onChange={(e) => setMeliCode(e.target.value)}
              placeholder="کد ملی"
            />
          </div>
          <div className="inputBox">
            <input
              type="email"
              className="text-start"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ایمیل"
            />
          </div>
          <div className="inputBox">
            <input
              type="password"
              onChange={(e) => setPass(e.target.value)}
              placeholder="رمز عبور"
            />
          </div>
          <div className="inputBox">
            <input
              type="password"
              onChange={(e) => setRePass(e.target.value)}
              placeholder="تکرار رمز عبور"
            />
          </div>
          <div className="inputBox">
            <input type="submit" value="ثبت نام" id="btn" />
          </div>
          <div className="group">
            <Link to={"/forgetPass"} target="blank">
              فراموشی رمز عبور
            </Link>
            <Link to={"/loginSigup"} target="blank" onClick={loginHandler}>
              ورود
            </Link>
          </div>
          <div className="mb-3">
            <Link to={"/"} className="text-white text-decoration-none">
              <p className="fs-5 btnGoToIndexPage">بازگشت به صفحه اصلی</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
export default Sigup;

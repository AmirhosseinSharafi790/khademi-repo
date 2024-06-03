import "./IndexPage.css";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
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
          <Row className="group">
            <Col className="my-3" sm={12} md={6}>
              <Link to={"/loginSigup"} target="blank">ورود</Link>
            </Col>
            <Col className="my-3" sm={12} md={6}>
              <Link to={"/"} target="blank">
                بازگشت به صفحه اصلی
              </Link>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}
export default Sigup;

import { Link } from "react-router-dom";
import "./IndexPage.css";
import { Col, Row } from "react-bootstrap";
import { useState } from "react";
function IndexPage() {
  const [meliCode, setMeliCode] = useState("");
  const [pass, setPass] = useState("");

  // کد ملی و رمز عبور باید با دیتابیس همگام سازی شود
  const loginHandler = () => {};
  return (
    <>
      <section>
        <div className="login">
          <h2>ورود</h2>
          <div className="inputBox">
            <input
              type="text"
              onChange={(e) => setMeliCode(e.target.value)}
              placeholder="کد ملی"
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
            <input type="submit" value="ورود" id="btn" />
          </div>
          <Row className="group">
            <Col className="my-3" sm={12} md={6}>
              <Link to={"/forgetPass"}>فراموشی رمز عبور</Link>
            </Col>
            <Col className="my-3" sm={12} md={6}>
              <Link to={"/sigup"} onClick={loginHandler}>
                ثبت نام
              </Link>
            </Col>
          </Row>
          <Row className="mb-3">
            <Link to={"/"} className="text-white text-decoration-none">
              <p className="fs-5 btnGoToIndexPage">بازگشت به صفحه اصلی</p>
            </Link>
          </Row>
        </div>
      </section>
    </>
  );
}
export default IndexPage;

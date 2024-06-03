import "./IndexPage.css";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
function ForgetPass() {
  return (
    <>
      <section>
        <div className="login">
          <h2>تغییر رمز عبور</h2>
          <p className="text-danger opacity-75 mb-3 text-center">
            {" "}
            * کد ملی خود را وارد کنید تا به صفحه تغییر رمز عبور منتقل شوید
          </p>
          <div className="inputBox">
            <input type="text" placeholder="کد ملی" />
          </div>
          <div className="inputBox">
            <input type="submit" value="بازیابی رمز عبور" id="btn" />
          </div>
          <Row className="group">
            <Col className="my-3" sm={12} md={6}>
              <Link to={"/loginSigup"}> ورود</Link>
            </Col>
            <Col className="my-3" sm={12} md={6}>
              <Link to={"/sigup"}>ثبت نام</Link>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}
export default ForgetPass;

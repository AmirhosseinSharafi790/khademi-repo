import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import FooterItemsR from "./FooterItemsR";
import FooterL from "./FooterL";
import { Link } from "react-router-dom";
function Footer() {
  const ItemsR = [
    {
      id: 1,
      icon: "text-white text-opacity-50 fs-5 fa-solid fa-phone-volume",
      desc: "شماره هنرستان :",
      hrefPhone: "tel:+03536217013",
      phone: "36217013-035",
    },
    {
      id: 2,
      icon: "text-white text-opacity-50 fs-5 fa-solid fa-phone-volume",
      desc: "شماره امور مالی :",
      hrefPhone: "tel:+36215478-035",
      phone: "36215478-035",
    },
    {
      id: 3,
      icon: "text-white text-opacity-50 fs-5 fa-solid fa-location-dot",
      desc: "آدرس : یزد ، رضوانشهر ، بعد میدان صاحب الزمان",
    },
  ];
  const ItemsL = [
    {
      id: 1,
      icon: "text-white text-opacity-50 fs-5 bi bi-ui-checks-grid",
      desc: "اتوماسیون حضور غیاب",
      href: "",
    },
    {
      id: 2,
      icon: "text-white text-opacity-50 fs-5 bi bi-clipboard2-check-fill",
      desc: "نمره دهی",
      href: "",
    },
    {
      id: 3,
      icon: "text-white text-opacity-50 fs-5 fa-solid fa-image",
      desc: "گالری تصاویر",
      href: "/album",
    },
    {
      id: 4,
      icon: "text-white text-opacity-50 fs-5 fa-solid fa-newspaper",
      desc: "اخبار و اطلاعیه",
      href: "/news/",
    },
  ];
  return (
    <div>
      <div className="">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#346ed1ba"
            fillOpacity="1"
            d="M0,192L60,208C120,224,240,256,360,240C480,224,600,160,720,160C840,160,960,224,1080,245.3C1200,267,1320,245,1380,234.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="footer" style={{ backgroundColor: "#346ed1ba" }}>
        <Container>
          <Row className="align-items-start justify-content-around">
            <Col lg={4} className="mt-5 text-start">
              <div className="footer-body">
                <h3 className="fw-bold opacity-75 py-2  ">
                  راه های ارتباط با هنرستان
                </h3>
                <hr />
                {ItemsR.map((item) => (
                  <FooterItemsR key={item.id} {...item} />
                ))}
              </div>
            </Col>
            <Col lg={4} className="mt-5 text-start">
              <div className="footer-body  mt-3 mt-lg-0">
                <h3 className="fw-bold opacity-75 py-2  mb-3">دسترسی سریع</h3>
                <hr />
                {ItemsL.map((itemL) => (
                  <FooterL key={itemL.id} {...itemL} />
                ))}
              </div>
            </Col>
          </Row>
          <hr className="text-white text-opacity-75 pt-2" />
          <Row className=" align-items-center py-2">
            <Col lg={4} className="d-flex justify-content-center">
              <Link className="colorSoport" to="">
                <p className="">طراحی و پشتیبانی</p>
              </Link>
              <Link className="colorSoport" to="">
                <i className="fa-solid fa-arrow-left ms-4 mt-1"></i>
              </Link>
            </Col>
            <Col lg={8} className="text-end d-flex my-2 justify-content-center">
              <div className="me-3">
                <a href="#">
                  <i
                    title="Telegram"
                    className="hover-app1 fs-3 mx-2 fa-brands fa-telegram"
                  ></i>
                </a>
                <a href="#">
                  <i
                    title="instagram"
                    className="hover-app2 fs-3 mx-2 fa-brands fa-instagram"
                  ></i>
                </a>
                <a href="#">
                  <i
                    title="Eitaa"
                    className="hover-app3 fs-3 mx-2 fa-solid fa-envelope"
                  ></i>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Footer;

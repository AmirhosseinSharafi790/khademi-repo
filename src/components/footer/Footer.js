import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import FooterItemsR from "./FooterItemsR";
import FooterL from "./FooterL";
import { Link } from "react-router-dom";
function Footer() {
  const ItemsR = [
    {
      id: 1,
      icon: "fs-5 fa-solid fa-phone-volume",
      desc: "شماره هنرستان :",
      hrefPhone: "tel:+03536217013",
      phone: "36217013-035",
    },
    {
      id: 2,
      icon: "fs-5 fa-solid fa-phone-volume",
      desc: "شماره امور مالی :",
      hrefPhone: "tel:+36215478-035",
      phone: "36215478-035",
    },
    {
      id: 3,
      icon: "fs-5 fa-solid fa-location-dot",
      desc: "آدرس : یزد ، رضوانشهر ، بعد میدان صاحب الزمان",
    },
  ];
  const ItemsL = [
    {
      id: 1,
      icon: "fs-5 bi bi-ui-checks-grid",
      desc: "اتوماسیون حضور غیاب",
      href: "",
    },
    {
      id: 2,
      icon: "fs-5 bi bi-clipboard2-check-fill",
      desc: "نمره دهی",
      href: "",
    },
    {
      id: 3,
      icon: "fs-5 fa-solid fa-image",
      desc: "گالری تصاویر",
      href: "/album",
    },
    {
      id: 4,
      icon: "fs-5 fa-solid fa-newspaper",
      desc: "اخبار و اطلاعیه",
      href: "/news/",
    },
  ];
  return (
    <div>
      <div className="m-inline">
        <svg
          width="100%"
          height="100%"
          id="svg"
          viewBox="0 0 1440 390"
          xmlns="http://www.w3.org/2000/svg"
          className="transition duration-300 ease-in-out delay-150"
        >
          <path
            d="M 0,400 L 0,150 C 116.44019138755979,182.6602870813397 232.88038277511959,215.3205741626794 333,205 C 433.1196172248804,194.6794258373206 516.9186602870815,141.377990430622 609,136 C 701.0813397129185,130.622009569378 801.4449760765549,173.16746411483254 903,171 C 1004.5550239234451,168.83253588516746 1107.3014354066986,121.95215311004785 1197,111 C 1286.6985645933014,100.04784688995215 1363.3492822966507,125.02392344497608 1440,150 L 1440,400 L 0,400 Z"
            stroke="none"
            strokeWidth="0"
            fill="#abb8c3"
            fillOpacity="1"
            className="transition-all duration-300 ease-in-out delay-150 path-0"
          ></path>
        </svg>
      </div>
      <div className="footer m-inline">
        <Container>
          <Row className="align-items-start justify-content-around">
            <Col lg={4} className="mt-5 text-start">
              <div className="footer-body">
                <h3 className="fw-bold ">راه های ارتباط با هنرستان</h3>
                {ItemsR.map((item) => (
                  <FooterItemsR key={item.id} {...item} />
                ))}
              </div>
            </Col>
            <Col lg={4} className="mt-5 text-start">
              <div className="footer-body  mt-3 mt-lg-0">
                <h3 className="fw-bold mb-3">دسترسی سریع</h3>
                {ItemsL.map((itemL) => (
                  <FooterL key={itemL.id} {...itemL} />
                ))}
              </div>
            </Col>
          </Row>
          <hr />
          <Row className="mt-2 align-items-start py-3">
            <Col
              lg={6}
              className="d-flex justify-content-center justify-content-lg-start"
            >
              <div className="a-style-footer-bottom-right d-flex">
                <Link to = ''>
                  <p>طراحی و پشتیبانی</p>
                </Link>
                <Link to = ''>
                  <i className="fa-solid fa-arrow-left ms-4 mt-1"></i>
                </Link>
              </div>
            </Col>
            <Col lg={6} className="text-end d-flex justify-content-center">
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

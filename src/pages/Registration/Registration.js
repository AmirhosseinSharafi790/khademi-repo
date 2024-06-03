import "./Registration.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import {
  Accordion,
  Button,
  Card,
  Col,
  Container,
  Modal,
  Row,
} from "react-bootstrap";
import image from "../../assets/images/نمونه-سوال-نوبت-دوم-فارسی-(سری94)-نهم-متوسطه_Biamoz.com.jpg";
import AccardionReg from "./Accardion/Accardion";
import { PiStudentBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useState } from "react";
function Registration() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const accData = [
    {
      id: "1",
      title: "lorem",
      desc: "loremmmmmmmmmmmmmmmmmmmmmmmm",
      icon: <PiStudentBold size="25px" />,
    },
    {
      id: "2",
      title: "lorem",
      desc: "loremmmmmmmmmmmmmmmmmmmmmmmm",
      icon: <PiStudentBold size="25px" />,
    },
    {
      id: "3",
      title: "lorem",
      desc: "loremmmmmmmmmmmmmmmmmmmmmmmm",
      icon: <PiStudentBold size="25px" />,
    },
    {
      id: "4",
      title: "lorem",
      desc: "loremmmmmmmmmmmmmmmmmmmmmmmm",
      icon: <PiStudentBold size="25px" />,
    },
    {
      id: "5",
      title: "lorem",
      desc: "loremmmmmmmmmmmmmmmmmmmmmmmm",
      icon: <PiStudentBold size="25px" />,
    },
    {
      id: "6",
      title: "lorem",
      desc: "loremmmmmmmmmmmmmmmmmmmmmmmm",
      icon: <PiStudentBold size="25px" />,
    },
  ];
  return (
    <>
      <Header />
      <Container>
        <Row className="align-items-center">
          <Col sm={12} lg={4} className="my-2 py-1">
            <Card className="bg-color shadowImg border-0 border-radios">
              <Card.Img
                variant="top"
                src={image}
                className="img-fluid p-3 border-radios"
              />
              <Card.Body></Card.Body>
              <Card.Footer className="bg-color border-radios border-0">
                <Card.Text>
                  <Link target="blank" to={""}>
                    <Button className="btn-download my-2 w-100" variant="">
                      لینک دانلود فایل PDF
                    </Button>
                  </Link>
                </Card.Text>
              </Card.Footer>
            </Card>
          </Col>
          <Col sm={12} lg={8} className="my-2 text-center">
            <h2 className="m-auto my-4 text-center text-shadow">
              راهنمای پیش ثبت نام
            </h2>
            <Accordion className="py-1" defaultActiveKey="1">
              {accData.map((item) => (
                <AccardionReg {...item} key={item.id} />
              ))}
            </Accordion>
            <Button className="btn-download w-100 my-2" variant="" onClick={handleShow}>
              پیگیری وضعیت ثبت نام
            </Button>
            <Modal centered show={show} onHide={handleClose}>
        <Modal.Header  className="bg-modal" closeButton>
          <Modal.Title>وضعیت ثبت نام</Modal.Title>
        </Modal.Header>
        <Modal.Body  className="bg-modal"><div className="login-modal">
          <p className="text-danger opacity-75 mb-3 text-center">
            {" "}
            * کد ملی خود را وارد کنید تا از وضیعیت خو اگاه شوید
          </p>
          <div className="inputBox-modal">
            <input type="text" placeholder="کد ملی" />
          </div>
          <div className="inputBox-modal">
            <input type="submit" value="پیگیری" id="btn" />
          </div>
        </div></Modal.Body>
      </Modal>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
export default Registration;

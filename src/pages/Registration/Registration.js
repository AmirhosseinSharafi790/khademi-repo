import "./Registration.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Accordion, Button, Card, Col, Container, Row } from "react-bootstrap";
import image from "../../assets/images/نمونه-سوال-نوبت-دوم-فارسی-(سری94)-نهم-متوسطه_Biamoz.com.jpg";
import AccardionReg from "./Accardion/Accardion";
import { PiStudentBold } from "react-icons/pi";
function Registration() {
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
                  <Button className="btn-download my-2 w-100" variant="">
                    لینک دانلود فایل PDF
                  </Button>
                </Card.Text>
              </Card.Footer>
            </Card>
          </Col>
          <Col sm={12} lg={8} className="my-2 text-center">
          <h2 className="m-auto my-4 text-center text-shadow">راهنمای پیش ثبت نام</h2>
            <Accordion className="py-1" defaultActiveKey="1">
              {accData.map((item) => (
                <AccardionReg {...item} key={item.id} />
              ))}
            </Accordion>
          </Col>
            <Button className="btn-download my-2" variant="">
              پیگیری وضعیت ثبت نام
            </Button>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
export default Registration;

import { Col, Container, Row } from "react-bootstrap";
import "./Panel.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { FaRegUserCircle, FaAssistiveListeningSystems } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import PanelItem from "./PanelItem";

function Panel() {

   const Items = [
    {
        id : 1,
        icon : 'fa-solid fa-graduation-cap',
        title : 'تایید دانش آموز'
    },
    {
        id : 2,
        icon : 'fa-solid fa-graduation-cap',
        title : 'تایید دانش آموز'
    },
    {
        id : 3,
        icon : 'fa-solid fa-graduation-cap',
        title : 'تایید دانش آموز'
    },
    {
        id : 4,
        icon : 'fa-solid fa-graduation-cap',
        title : 'تایید دانش آموز'
    },
    {
        id : 5,
        icon : 'fa-solid fa-graduation-cap',
        title : 'تایید دانش آموز'
    },
    {
        id : 61,
        icon : 'fa-solid fa-graduation-cap',
        title : 'تایید دانش آموز'
    },
   ]


  return (
    <div>
      <Header />
      <Container className="my-5">
        <Row>
          <Col className="bg-container" md={4}>
            <div className="card-container">
              <div className="card-header">
                <div>
                  <img
                    src="https://secure.gravatar.com/avatar/13b6e8c7e5f235b591051fcfa1507ace?s=80&d=mm&r=g"
                    alt=""
                  />
                </div>
                <h6>سلام امیررضا(ص) عزیز !</h6>
              </div>
              <hr />
              <div className="card-body-panel">
                <button>
                  {" "}
                  <FaRegUserCircle className="me-3" size={"25px"} />
                  جزعیات حساب
                </button>
                <button>
                  {" "}
                  <FaAssistiveListeningSystems className="me-3" size={"25px"} />
                  سیستم هوشمند
                </button>
                <button>
                  {" "}
                  <MdLogout className="me-3" size={"25px"} />
                  خروج از سیستم
                </button>
              </div>
            </div>
          </Col>
          <Col md={8}>
            <div className="panel-option">
              <Row>
                {Items.map(item => (
                    <PanelItem key={item.id} {...item} />
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Panel;

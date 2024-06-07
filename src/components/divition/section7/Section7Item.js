import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Section7Item({title}) {
    return ( 
        <Row className="my-1 p-3 rounded align-items-center justify-content-center" >
            <Col className="col-8 text-center" data-aos="fade-down" data-aos-duration="1500">
              <Link
                target="blank"
                className="eft-btn text-decoration-none d-block"
                to={"/honors"}
              >
                {title}
              </Link>
            </Col>
            <Col className="col-4 text-center">
              <Link
                target="blank"
                className="text-decoration-none text-dark"
                to={"/honors"}
              >
                <i className="bi bi-arrow-left"></i>
              </Link>
            </Col>
          </Row>
     );
}

export default Section7Item;
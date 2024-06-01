import "./Section8.css";
import { Col } from "react-bootstrap";
import { FaQuoteRight } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
function Section8Item({ title, text }) {
  return (
    <Col sm={12} md={6} lg={4} className="my-4 rounded">
      <div className="shadow-section-6 p-3 rounded-3 flexible" id="box-height">
        <h4 className="text-center p-3 text-color Cairo">
          <FaQuoteRight className="ms-2" size="25px" color="#346ed190" />
          {title}
          <FaQuoteLeft className="ms-2" size="25px" color="#346ed190" />
        </h4>
        <p className="text-justify p-3">{text}</p>
      </div>
    </Col>
  );
}
export default Section8Item;

import "./Section1.css";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
function Section1Item({ textValue, icon, href }) {
  return (
    <Col md={6} xl={4}>
      <div className="menu-item">
        <Link target="blank" to={href}>
          <span className="bg-icon">{icon}</span>
        </Link>
        <Link target="blank" to={href}>
          <b>{textValue}</b>
        </Link>
      </div>
    </Col>
  );
}

export default Section1Item;

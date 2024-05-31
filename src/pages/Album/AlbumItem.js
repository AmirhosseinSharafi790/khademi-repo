import { Card, Col } from "react-bootstrap";
import "./Album.css";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
function AlbumItem({ image, title, link, icon }) {
  return (
    <>
      <Col md={6} lg={4} xl={3} className="cardContainer">
        <Card className="card-album">
          <Card.Img
            variant="top"
            src={image}
            className="img-fliud style-image"
          />
          <Card.Body className="card-body-album">
            <Card.Title className="text-center">{title}</Card.Title>
            <Link className="text-decoration-none text-black d-block text-center pt-3">
              <span>
                مشاهده
                <span className="pe-2">
                  <FaArrowLeftLong />
                </span>
              </span>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default AlbumItem;

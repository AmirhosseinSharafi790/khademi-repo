import { Card, Col } from "react-bootstrap";
import "./Album.css";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import Aos from "aos";
import { useEffect } from "react";
function AlbumItem({id , image, title, link, icon }) {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Col
        md={6}
        lg={4}
        xl={3}
        className="cardContainer"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <Card className="card-album">
          <Card.Img
            variant="top"
            src={image}
            className="img-fliud style-image"
          />
          <Card.Body className="card-body-album">
            <Card.Title className="text-center">{title}</Card.Title>
            <Link
              className="text-decoration-none text-black d-block text-center pt-3"
              target="blank"
              to={`/album/${id}`}
            >
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

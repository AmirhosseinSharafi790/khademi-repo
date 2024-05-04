import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
import "./Section4.css";
import { Link } from "react-router-dom";
function Section4Item({ CName, img, title, text }) {
  return (
    // <Col className="my-3" lg={6} xl={4}>
    //     <Card className='' id='card-section-4'>
    //         <Card.Img variant="top" src={img} />
    //         <Card.Body className='p-2'>
    //             <Card.Title className='text-green mt-3 text-center fw-bold'>{title}</Card.Title>
    //             <Card.Text className='p-3 text-dark'>{text}</Card.Text>
    //             <hr />
    //             <Row>
    //                 <Col sm={12} md={6}>
    //                     <Button id='btn-green' className={CName}>
    //                         <Link className='text-white text-decoration-none'>
    //                         اطلاعات بیشتر
    //                         </Link>
    //                     </Button>
    //                 </Col>
    //                 <Col sm={12} md={6}>
    //                     <Button id='btn-green1' className={CName}>
    //                         <Link className='text-white text-decoration-none'>
    //                             هنرآموزان
    //                         </Link>
    //                     </Button>
    //                 </Col>
    //             </Row>
    //         </Card.Body>
    //     </Card>
    // </Col>

    <Col md={12} lg={4} className="margin-sec4">
      <div className="card-section4  d-sm-inline d-lg-flex">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={img} alt="Avatar" className="img-fluid bg-cardS4 rounded-3" />
            </div>
            <div className="flip-card-back">
            <Card className='' id='card-section-4'>
            <Card.Body className='p-2'>
                <Card.Title className='text-green mt-3 text-center fw-bold'>{title}</Card.Title>
                <Card.Text className='p-3 text-dark'>{text}</Card.Text>
                <hr />
                        <Button id='btn-green' className={CName}>
                            <Link className='text-white text-decoration-none'>
                            اطلاعات بیشتر
                            </Link>
                        </Button>
                        <Button id='btn-green1' className={CName}>
                            <Link className='text-white text-decoration-none'>
                                هنرآموزان
                            </Link>
                        </Button>
            </Card.Body>
        </Card>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
}
export default Section4Item;

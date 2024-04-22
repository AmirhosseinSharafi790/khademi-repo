import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col , Row} from "react-bootstrap";
import "./Section4.css"
import { Link } from 'react-router-dom';
function Section4Item({CName , img , title , text}){
    return(
        <Col className="my-3" lg={6} xl={4}>
            <Card className='' id='card-section-4'>
                <Card.Img variant="top" src={img} />
                <Card.Body className='p-2'>
                    <Card.Title className='text-green mt-3'>{title}</Card.Title>
                    <Card.Text className='p-3 text-dark'>{text}</Card.Text>
                    <hr />
                    <Row>
                        <Col sm={12} md={6}>
                            <Button id='btn-green' className={CName}>
                                <Link className='text-white text-decoration-none'>
                                اطلاعات بیشتر
                                </Link>
                            </Button>
                        </Col>
                        <Col sm={12} md={6}>
                            <Button id='btn-green1' className={CName}>
                                <Link className='text-white text-decoration-none'>
                                    هنرآموزان
                                </Link>
                            </Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    )
}
export default Section4Item
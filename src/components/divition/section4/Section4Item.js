import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col , Row} from "react-bootstrap";
import "./Section4.css"
import { Link } from 'react-router-dom';
function Section4Item({img , title , text}){
    return(
        <Col className="my-3" md={6} lg={4}>
            <Card className='p-3 ' id='card-section-4'>
                <Card.Img variant="top" src={img} />
                <Card.Body className='p-2'>
                    <Card.Title className='text-green'>{title}</Card.Title>
                    <Card.Text className='p-3 text-dark'>{text}</Card.Text>
                    <Row>
                        <Col sm={12} md={6}>
                            <Button id='btn-green' className='border-0 mt-2 text-white p-3 rounded-3'>
                                <Link className='text-white text-decoration-none'>
                                اطلاعات بیشتر
                                </Link>
                            </Button>
                        </Col>
                        <Col sm={12} md={6}>
                            <Button id='btn-green1' className='border-0 mt-2 text-white p-3 rounded-3'>
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
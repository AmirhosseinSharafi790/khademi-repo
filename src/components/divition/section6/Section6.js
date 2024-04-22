import {Col, Container , Row} from 'react-bootstrap'
import S6Card from './S6Card';
import Img from '../../../assets/images/manager.png'
function Section6() {

  return (
   <div class="section-6 my-5">
    <Container>
        <Row className='align-items-center'>
            <Col md = {6}>
            <img src = {Img} className='img-fluid' />
            </Col>
            <Col md = {6} className="d-sm-flex justify-content-sm-end">
                <S6Card />    
            </Col>
        </Row>
    </Container>
   </div>
  )
}

export default Section6;

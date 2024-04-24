import './Manegment.css'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
function NumberPhone({phone}){
    const [showA, setShowA] = useState(false);

    const toggleShowA = () => setShowA(!showA);

    return (
    <Row className='ms-1'>
      <Col className="mb-2 m-auto">
        <Button onClick={toggleShowA} className="mb-2">
         تماس با من
        </Button>
        <Toast className='border-0 bg-color' show={showA} onClose={toggleShowA}>
          <Toast.Body className='fs-5 text-center'>{phone}</Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
}

export default NumberPhone
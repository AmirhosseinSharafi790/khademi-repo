import { Col, Row } from 'react-bootstrap';
import './AlbumZoom.css'
import Aos from 'aos';
import { useEffect } from 'react';
function AlbumZoomItems({RowClass , image , animation}) {
    useEffect(() => {
        Aos.init();
    } , [])
    return ( 
        <Row className={`${RowClass} margin-row`} data-aos={animation} data-aos-duration="1500">
            <Col md = {6} lg = {4}>
                <div className='style-images'>
                    <img src={image} alt="" className='img-fluid' />
                </div>
            </Col>
        </Row>
     );
}

export default AlbumZoomItems;
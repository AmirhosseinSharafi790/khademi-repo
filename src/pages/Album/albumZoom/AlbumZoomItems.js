import { Col, Row } from 'react-bootstrap';
import './AlbumZoom.css'
import Aos from 'aos';
import { useEffect } from 'react';
function AlbumZoomItems({images}) {
    useEffect(() => {
        Aos.init();
    } , [])
    return ( 
        <Row className='justify-content-start margin-row' data-aos={'zoom-in-up'} data-aos-duration="1500">
            <Col md = {6} lg = {4}>
                <div className='style-images'>
                    <img src={`https://khademi.liara.run/${images[0]}`} alt="" className='img-fluid' />
                </div>
            </Col>
        </Row>
     );
}

export default AlbumZoomItems;
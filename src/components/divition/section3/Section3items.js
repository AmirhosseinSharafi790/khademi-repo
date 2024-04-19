import './Section3.css'
import { Col } from 'react-bootstrap'
import ImgSection3 from '../../../assets/images/section2-bac.jpg'
function Section3Items({textValue}){
    return(
        <Col md = {6}>
            <img src = {ImgSection3} className="me-2 my-3 img-fluid rounded shadow w-25 border border-white border-opacity-50" alt=''/>
            <button className="button">
                <span>
                    <a href="./sections/photoAlbum/album.html" className="text-decoration-none text-white opacity-75">{textValue}</a>
                </span>
            </button>
        </Col>
    )
}

export default Section3Items
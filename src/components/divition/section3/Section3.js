import './Section3.css'
import {Container , Row} from 'react-bootstrap'
import Section3Items from './Section3items'
import ImgSection3 from '../../../assets/images/section2-bac.jpg'
import Slider from "react-slick";
function Section3(){

    let ItemsS3 = [
        {
            id : 1,
            imgS3 : {ImgSection3} 
        },
        {
            id : 2,
            imgS3 : {ImgSection3} 
        },
        {
            id : 3,
            imgS3 : {ImgSection3} 
        },
        {
            id : 4,
            imgS3 : {ImgSection3} 
        }
    ]
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false
      };
    return(
        <div>
            <Container className='my-5 p-1 text-center align-items-center rounded mt-50'>
                <Row className='my-2 mt-5 d-flex align-items-center text-white text-end padding-G'>
                    <p><span className="text-dark">گالری تصاویر</span> <a className="bi bi-arrow-left fs-4 mx-2 opacity-75 text-dark" href="./sections/photoAlbum/album.html" id="arrow-hover"></a></p>

                </Row>
                <div className='p-5'>
                    <div className="slider-container">
                        <Slider {...settings}>
                            {ItemsS3.map(Item => (
                                <Section3Items key={Item.id} {...Item}/>
                            ))}
                        </Slider>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Section3
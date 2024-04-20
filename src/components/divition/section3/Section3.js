import './Section3.css'
import {Container , Row} from 'react-bootstrap'
import Section3Items from './Section3items'
import ImgSection3 from '../../../assets/images/section2-bac.jpg'
function Section3(){

    let ItemsS3 = [
        {
            textValue : 'لورم ایپسوم یک متن ساختگی است',
            imgS3 : {ImgSection3} 
        },
        {
            textValue : 'لورم ایپسوم یک متن ساختگی است',
            imgS3 : {ImgSection3} 
        },
        {
            textValue : 'لورم ایپسوم یک متن ساختگی است',
            imgS3 : {ImgSection3} 
        },
        {
            textValue : 'لورم ایپسوم یک متن ساختگی است',
            imgS3 : {ImgSection3} 
        }
    ]

    return(
        <div>
            <Container className='my-5 p-1 text-center align-items-center rounded mt-50'>
                <Row className='my-2 mt-5 d-flex align-items-center text-white text-end padding-G'>
                    <p><span className="text-dark">گالری تصاویر</span> <a class="bi bi-arrow-left fs-4 mx-2 opacity-75 text-dark" href="./sections/photoAlbum/album.html" id="arrow-hover"></a></p>

                </Row>
                <Row>
                    {ItemsS3.map(Item => (
                        <Section3Items {...Item}/>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default Section3
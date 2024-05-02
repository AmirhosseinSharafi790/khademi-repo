import './Section3.css'
import {Container , Row} from 'react-bootstrap'
// import Section3Items from './Section3items'
import ImgSection3 from '../../../assets/images/section2-bac.jpg'
// import React, { useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/free-mode';
// import 'swiper/css/navigation';
// import 'swiper/css/thumbs';
// import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
function Section3(){

    let ItemsS3 = [
        {
            id : 1,
            imgS3 : ImgSection3 
        },
        {
            id : 2,
            imgS3 : ImgSection3 
        },
        {
            id : 3,
            imgS3 : ImgSection3 
        },
        {
            id : 4,
            imgS3 : ImgSection3 
        }
    ]
    // const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return(
        <div>
            <Container className='mb-5 p-1 text-center align-items-center rounded'>
                <Row className='my-2 mt-5 d-flex align-items-center text-white text-end padding-G'>
                    <p><span className="text-dark">گالری تصاویر</span> <a className="bi bi-arrow-left fs-4 mx-2 opacity-75 text-dark" href="./sections/photoAlbum/album.html" id="arrow-hover"></a></p>

                </Row>
                            {/* {ItemsS3.map(Item => (
                                <Section3Items key={Item.id} {...Item}/>
                            ))} */}
                <div className='p-5'>
                    <div className="slider-container">
                        {/* <Swiper
                            style={{
                            '--swiper-navigation-color': '#fff',
                            '--swiper-pagination-color': '#fff',
                            }}
                            loop={true}
                            spaceBetween={5}
                            navigation={true}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper2 width-height"
                        >
                            <SwiperSlide>
                            <img src={ImgSection3} className='img-fluid ' alt='' />
                            </SwiperSlide>
                            <SwiperSlide>
                            <img src={ImgSection3} className='img-fluid ' alt='' />
                            </SwiperSlide>
                            <SwiperSlide>
                            <img src={ImgSection3} className='img-fluid ' alt='' />
                            </SwiperSlide>
                            <SwiperSlide>
                            <img src={ImgSection3} className='img-fluid ' alt='' />
                            </SwiperSlide>
                            <SwiperSlide>
                            <img src={ImgSection3} className='img-fluid ' alt='' />
                            </SwiperSlide>
                        </Swiper>
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            loop={true}
                            spaceBetween={10}
                            slidesPerView={4}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                            <img src={ImgSection3} alt='' className='img-fluid rounded' />
                            </SwiperSlide>
                            <SwiperSlide>
                            <img src={ImgSection3} alt='' className='img-fluid rounded' />
                            </SwiperSlide>
                            <SwiperSlide>
                            <img src={ImgSection3} alt='' className='img-fluid rounded' />
                            </SwiperSlide>
                            <SwiperSlide>
                            <img src={ImgSection3} alt='' className='img-fluid rounded' />
                            </SwiperSlide>
                            <SwiperSlide>
                            <img src={ImgSection3} alt='' className='img-fluid rounded' />
                            </SwiperSlide>
                        </Swiper> */}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Section3
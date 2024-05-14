import './Section3.css'
import {Container , Row} from 'react-bootstrap'
import ImgSection3 from '../../../assets/images/section2-bac.jpg'
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
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
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return(
        <div>
            <Container className='mb-5 p-1 text-center align-items-center rounded'>
                <Row>
                    
                </Row>
                <div className='px-5'>
                    <div className="slider-container">
                        <Swiper
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
                            spaceBetween={3}
                            slidesPerView={3}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper mt-breakpoint"    
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
                        </Swiper>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Section3
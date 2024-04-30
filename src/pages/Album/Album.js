import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import "./Album.css"
import { Container , Row } from "react-bootstrap"
import AlbumItem from "./AlbumItem"
import image from "../../assets/images/section2-bac.jpg"
// import {SwiperSlide } from 'swiper/react';
// import image2 from "../../assets/images/Logo.jpg"
// import image3 from "../../assets/images/Shabake.jpg"
// import image4 from "../../assets/images/support img.jpg"
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
// import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'
function Album(){

    const AlbunData = [
        {
            id : 1 ,
            image : image
        },
        {
            id : 2 ,
            image : image 
        },
        {
            id : 3 ,
            image : image
        }
    ]
    return(
        <>
            <Header/>
            <Container>
            <Row className="my-2 d-flex justify-content-cenetr align-items-center">
                        {/* <Swiper
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={'auto'}
                            coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                            }}
                            pagination={true}
                            modules={[EffectCoverflow, Pagination]}
                            className="mySwiper"
                        >
                              {AlbunData.map(Item => (
                                  <AlbumItem key={Item.id} {...Item}/>
                            ))}
                        </Swiper> */}
                        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {AlbunData.map(Item => (
                <AlbumItem key={Item.id} {...Item}/>
        ))}
      </Swiper>
            </Row>
            </Container>
            <Footer/>
        </>
    )
}
export default Album
// {/* <SwiperSlide>
// <img src={image} alt="" />
// </SwiperSlide> */}
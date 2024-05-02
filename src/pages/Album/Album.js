// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// import Header from '../../components/header/Header'
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-fade';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import './Album.css';

// // import required modules
// import { EffectFade, Navigation, Pagination } from 'swiper/modules';
// import { Container } from 'react-bootstrap';
// function Album() {
//   return (
//     <>
//     <Header />
//     <Container className='h-pic'>
//     <Swiper
//         spaceBetween={30}
//         effect={'fade'}
//         navigation={true}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[EffectFade, Navigation, Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
//         </SwiperSlide>
//       </Swiper>
//     </Container>
      
//     </>
//   );
// }
// export default Album

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Album.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Col, Container } from 'react-bootstrap';
import AlbumItem from './AlbumItem';

 function Album() {
  let Items = [
    {
      id : 1,
      image : 'https://swiperjs.com/demos/images/nature-1.jpg'
    },
    {
      id : 2,
      image : 'https://swiperjs.com/demos/images/nature-2.jpg'
    },
    {
      id : 3,
      image : 'https://swiperjs.com/demos/images/nature-3.jpg'
    },
    {
      id : 4,
      image : 'https://swiperjs.com/demos/images/nature-4.jpg'
    },
    {
      id : 5,
      image : 'https://swiperjs.com/demos/images/nature-5.jpg'
    },
    {
      id : 6,
      image : 'https://swiperjs.com/demos/images/nature-6.jpg'
    },
    {
      id : 7,
      image : 'https://swiperjs.com/demos/images/nature-7.jpg'
    },
    {
      id : 8,
      image : 'https://swiperjs.com/demos/images/nature-8.jpg'
    },
    {
      id : 9,
      image : 'https://swiperjs.com/demos/images/nature-9.jpg'
    },

  ]
  return (
    <>
    <Container>

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
          {Items.map(item => (
            <AlbumItem {...item} />
          ))}
      </Swiper>
    </Container>
    </>
  );
}
export default Album
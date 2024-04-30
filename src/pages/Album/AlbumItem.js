import "./Album.css"
import {SwiperSlide } from 'swiper/react';
function AlbumItem({image}){
    return(
        <SwiperSlide>
        <img src={image} alt="" />
      </SwiperSlide>
    )
}
export default AlbumItem
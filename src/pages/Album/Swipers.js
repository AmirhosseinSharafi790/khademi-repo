import Swiper from "swiper";
import AlbumItem from "./AlbumItem";
import { SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
function Swipers() {
  let Items = [
    {
      id: 1,
      image: "https://swiperjs.com/demos/images/nature-1.jpg",
    },
    {
      id: 2,
      image: "https://swiperjs.com/demos/images/nature-2.jpg",
    },
    {
      id: 3,
      image: "https://swiperjs.com/demos/images/nature-3.jpg",
    },
    {
      id: 4,
      image: "https://swiperjs.com/demos/images/nature-4.jpg",
    },
    {
      id: 5,
      image: "https://swiperjs.com/demos/images/nature-5.jpg",
    },
    {
      id: 6,
      image: "https://swiperjs.com/demos/images/nature-6.jpg",
    },
  ];
  return (
    <>
      <h1 className="text-center py-3">سفر جذاب مهریز مقدس</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow]}
        pagination={true}
        className="mySwiper"
      >
        {Items.map((item) => (
          <SwiperSlide key={item.id}>
            <AlbumItem {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Swipers;

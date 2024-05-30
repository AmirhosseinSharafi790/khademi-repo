import AlbumItem from "./AlbumItem";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Container, Row } from "react-bootstrap";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

function Swipers() {
  let Items = [
    {
      id: 1,
      image: "https://swiperjs.com/demos/images/nature-1.jpg",
      title : 'سفر مشهد مقدس',
      link : ''
    },
    {
      id: 2,
      image: "https://swiperjs.com/demos/images/nature-2.jpg",
      title : 'اردو مهریز',
      link : ''
    },
    {
      id: 3,
      image: "https://swiperjs.com/demos/images/nature-3.jpg",
      title : 'مراسم تجلیل از معلمان',
      link : ''
    },
    {
      id: 4,
      image: "https://swiperjs.com/demos/images/nature-4.jpg",
      title : 'مراسمات درون مدرسه',
      link : ''
    },
    {
      id: 5,
      image: "https://swiperjs.com/demos/images/nature-5.jpg",
      title : 'کلاس ها و کارگاه ها',
      link : ''
    },
    {
      id: 6,
      image: "https://swiperjs.com/demos/images/nature-4.jpg",
      title : 'جشن تجلیل از دانش آموزان برتر',
      link : ''
    },
    {
      id: 7,
      image: "https://swiperjs.com/demos/images/nature-7.jpg",
      title : 'تصاویر مشاوره کنکور',
      link : ''
    },
    {
      id: 8,
      image: "https://swiperjs.com/demos/images/nature-8.jpg",
      title : 'مسابقات فوتسال درون مدرسه ای',
      link : ''
    },
  ];
  return (
    <>
      <Header />
      <Container>
        <Row className="gy-5">
          {Items.map(item => (
            <AlbumItem key={item.id} {...item} />
          ))}
        </Row>
         
      </Container>
      <Footer />
    </>
  );
}

export default Swipers;


// <Row className="my-5 py-5">
//           <h1 className="text-center py-3">سفر جذاب مشهد مقدس</h1>
//           <Swiper
//             effect={"coverflow"}
//             grabCursor={true}
//             centeredSlides={true}
//             slidesPerView={"auto"}
//             coverflowEffect={{
//               rotate: 50,
//               stretch: 0,
//               depth: 100,
//               modifier: 1,
//               slideShadows: true,
//             }}
//             modules={[EffectCoverflow]}
//             pagination={true}
//             className="mySwiper"
//           >
//             {Items.map((item) => (
//               <SwiperSlide key={item.id}>
//                 <AlbumItem {...item} />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </Row>
//         <Row className="my-5 py-5">
//           <h1 className="text-center py-3">سفر جذاب مهریز مقدس</h1>
//           <Swiper
//             effect={"coverflow"}
//             grabCursor={true}
//             centeredSlides={true}
//             slidesPerView={"auto"}
//             coverflowEffect={{
//               rotate: 50,
//               stretch: 0,
//               depth: 100,
//               modifier: 1,
//               slideShadows: true,
//             }}
//             modules={[EffectCoverflow]}
//             pagination={true}
//             className="mySwiper"
//           >
//             {Items.map((item) => (
//               <SwiperSlide key={item.id}>
//                 <AlbumItem {...item} />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </Row>
//         <Row className="my-5 py-5">
//           <h1 className="text-center py-3">عکس های خود مدرسه</h1>
//           <Swiper
//             effect={"coverflow"}
//             grabCursor={true}
//             centeredSlides={true}
//             slidesPerView={"auto"}
//             coverflowEffect={{
//               rotate: 50,
//               stretch: 0,
//               depth: 100,
//               modifier: 1,
//               slideShadows: true,
//             }}
//             modules={[EffectCoverflow]}
//             pagination={true}
//             className="mySwiper"
//           >
//             {Items.map((item) => (
//               <SwiperSlide key={item.id}>
//                 <AlbumItem {...item} />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </Row>
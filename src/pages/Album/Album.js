import AlbumItem from "./AlbumItem";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Container, Row } from "react-bootstrap";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Network from "../../network";

function Swipers() {
  // let Items = [
  //   {
  //     id: 1,
  //     image: "https://swiperjs.com/demos/images/nature-1.jpg",
  //     title : 'سفر مشهد مقدس',
  //     link : ''
  //   },
  //   {
  //     id: 2,
  //     image: "https://swiperjs.com/demos/images/nature-2.jpg",
  //     title : 'اردو مهریز',
  //     link : ''
  //   },
  //   {
  //     id: 3,
  //     image: "https://swiperjs.com/demos/images/nature-3.jpg",
  //     title : 'مراسم تجلیل از معلمان',
  //     link : ''
  //   },
  //   {
  //     id: 4,
  //     image: "https://swiperjs.com/demos/images/nature-4.jpg",
  //     title : 'مراسمات درون مدرسه',
  //     link : ''
  //   },
  //   {
  //     id: 5,
  //     image: "https://swiperjs.com/demos/images/nature-5.jpg",
  //     title : 'کلاس ها و کارگاه ها',
  //     link : ''
  //   },
  //   {
  //     id: 6,
  //     image: "https://swiperjs.com/demos/images/nature-4.jpg",
  //     title : 'جشن تجلیل از دانش آموزان برتر',
  //     link : ''
  //   },
  //   {
  //     id: 7,
  //     image: "https://swiperjs.com/demos/images/nature-7.jpg",
  //     title : 'تصاویر مشاوره کنکور',
  //     link : ''
  //   },
  //   {
  //     id: 8,
  //     image: "https://swiperjs.com/demos/images/nature-8.jpg",
  //     title : 'مسابقات فوتسال درون مدرسه ای',
  //     link : ''
  //   },
  // ];
  const [album, setAlbum] = useState([]);
  useEffect(() => {
      const fetchData = async () => {
        const network = new Network();
        const photo = await network.getAlbums();
        if (photo == null || photo.status === "ERROR") {
          alert("اتصال شما برقرار نیست");
        } else {
          setAlbum(album.data);
        }
      };
      fetchData();
    }, []);
  const albumId = useParams().albumId;
  console.log(albumId);
  return (
    <>
      <Header />
      <Container>
        <Row className="gy-5">
          {album.map(item => (
            <AlbumItem key={item.id} {...item} />
          ))}
        </Row>
         
      </Container>
      <Footer />
    </>
  );
}

export default Swipers;
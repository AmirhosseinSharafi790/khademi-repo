import AlbumItem from "./AlbumItem";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Container, Row } from "react-bootstrap";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useEffect, useState } from "react";
import Network from "../../network";
import Loding from "../../components/Loding/Loding";

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
  const [albumState, setAlbumState] = useState([]);
  const [isPending, setIsPending] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const network = new Network();
      const album = await network.getAlbums();
      if (album == null || album.status === "ERROR") {
        alert("اتصال شما برقرار نیست");
      } else {
        setAlbumState(album.data);
        setIsPending(false);
      }
    };
    fetchData();
  }, []);
  
  return (
    <>
      {isPending ? (
        <Loding />
      ) : (
        <div>
          <Header />
          <Container>
            <Row className="gy-5">
              {albumState.map((item) => (
                <AlbumItem key={item.id} {...item} />
              ))}
            </Row>
          </Container>
          <Footer />
        </div>
      )}
    </>
  );
}

export default Swipers;

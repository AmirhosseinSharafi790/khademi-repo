// import { Swiper,  Pagination , EffectCoverflow } from 'swiper';

import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer";
import { Container, Row } from "react-bootstrap";

function Album() {
  // const images = [
  //   'http://lorempixel.com/600/600/nature/1',
  //   'http://lorempixel.com/600/600/nature/2',
  //   'http://lorempixel.com/600/600/nature/3',
  //   'http://lorempixel.com/600/600/nature/4',
  //   'http://lorempixel.com/600/600/nature/5',
  // ];

  // const params = {
  //   effect: 'coverflow',
  //   grabCursor: true,
  //   centeredSlides: true,
  //   slidesPerView: 'auto',
  //   coverflowEffect: {
  //     rotate: 50,
  //     stretch: 0,
  //     depth: 100,
  //     modifier: 1,
  //     slideShadows: true,
  //   },
  //   pagination: true,
  //   modules: [EffectCoverflow , Pagination]
  // };

  return (
    <>
      <Header />
      <Container>
        <Row className="my-2 d-flex justify-content-center align-items-center">
          {/* <Swiper {...params}>
            {images.map((image) => (
              <div key={image} style={{ backgroundImage: `url(${image})` }} />
            ))}
          </Swiper> */}
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Album;
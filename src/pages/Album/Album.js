import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Album.css";
import { Container, Row } from "react-bootstrap";
import Swipers from "./Swipers";
 let SwiperId = [
  {
    id : 1
  },
  {
    id : 2
  },
  {
    id : 3
  },
 ]

function Album() {
 
  return (
    <>
      <Header />
      <Container>
        <Row>
          {SwiperId.map(Id => (
            <Swipers {...Id} />
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
}
export default Album;

import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import images from "../../assets/images/section2-bac.jpg";
import images1 from "../../assets/images/imageManager.png";
import images2 from "../../assets/images/Question.jpg";
import images3 from "../../assets/images/success.jpg";
import { Container , Row } from "react-bootstrap";
import "./Teachers.css";
import TeachersItem from "./TeachersItem";
function Teachers() {

    const TeachersData = [
        {
            id : 1,
            image : images,
            name : "سعید آذرمهر",
            field : "شبکه و نرم افزار - الکتروتکنیک"
        },
        {
            id : 2,
            image : images1,
            name : "اصغر رعیت پور",
            field : "الکتروتکنیک"
        },
        {
            id : 3,
            image : images2,
            name : "محمد دهقان باغی",
            field : "حسابداری"
        },
        {
            id : 4,
            image : images3,
            name : "احمد گلزار",
            field : "تاریخ"
        },
        {
            id : 5,
            image : images,
            name : "مرتضی انتظاری",
            field : "تربیت بدنی"
        }
    ]
  return (
    <>
      <Header />
      <Container>
        <Row>
          {
            TeachersData.map( teacher => (
                <TeachersItem key={teacher.id} {...teacher} /> 
            ) )
          }
        </Row>
      </Container>
      <Footer />
    </>
  );
}
export default Teachers;

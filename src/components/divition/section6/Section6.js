import { Button, Col, Container, Row } from "react-bootstrap";
import imagemanager from "../../../assets/images/imageManager.png";
import "./Section6.css";
function Section6() {
  return (
    <div className="section-6 my-5">
      <Container className="container-section6">
        <Row className="align-items-center my-5">
          <Col lg={6} className="border-section6">
            <div>
              <h2>
                سخنی از مدیر <span className="txt-color">هنرستان</span>
              </h2>
              <p className="text-justify">
                <b>تلاش</b> کنید همیشه به عنوان یک <b>دانش‌آموز</b> بمانید و از
                هر فرصتی برای یادگیری بهره ببرید. به عنوان یک معلم، به دیگران با
                احترام و صداقت ، آموزش دهید تا بهترین نتیجه را به دست آورید. هر
                دو فعالیت اموزش دادن و اموزش دیدن به شما ارتباط انسانی تازه‌ای
                با دیگران ارائه خواهد داد. اموزش دادن و اموزش دیدن دو فعالیت
                بسیار ارزشمند هستند که می‌توانند به شما کمک کنند تا در زندگی
                شخصی و حرفه‌ای خود <b>پیشرفت </b>
                کنید. به خوبی از این دو فرصت استفاده کنید و هر روز یک قدم
                بزرگ‌تر به سوی بهبود و پیشرفت بردارید.
              </p>
              <button className="btn-section6 bg-green">ارتباط با من</button>
            </div>
          </Col>
          <Col lg={6} className="none-sm">
            <img src={imagemanager} className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Section6;

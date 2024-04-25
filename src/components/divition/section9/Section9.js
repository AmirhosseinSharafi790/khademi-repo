import { Col, Container, Row } from "react-bootstrap"
import "./Section9.css"
import Section9Item from "./Section9Item"
import Accordion from 'react-bootstrap/Accordion';

function Section9(){

    const Serction9Data = [
        {
            id : 0 ,
            title : "ی زیادی در شصت و سه درصد گذشته، حال و آیند" , 
            desc : "از طریق آموزش همه جانبه در محیطی ، پر تلاش ، با نشاط و متعال یادگیرانی با ایمان پرورش دهیم که مستقل ، اندیشمند ، اجتماعی ، مسولیت پذیر و متکی به نفس باشند. "
        },
        {
            id : 1 ,
            title : "را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی" , 
            desc : "مدرسه ای که همه آن را خانه خود بدانند و نه تنها دانش آموزان بلکه اولیاء دانش آموزان و معلمان نیز در آن به یادگیری عشق بورزند."
        },
        {
            id : 2 ,
            title : "اده از طراحان گرافیک است. چاپگرها و متون بلکه" , 
            desc : " از ابتدای کار، به آموزشی همه جانبه و فراتر از کتاب‌های درسی با رویکرد پژوهش محور پرداخته‌ایم و امکانات مدرسه، نقش مهمی را در برنامه‌های درسی ما ایفا کرده است."
        }
    ]
    return(
        <div className="section9 p-5 mt-5 m-inline">
            <Container>
                <Row className="justify-content-center">
                    <Col sm={12} md={8}>
                        <Accordion defaultActiveKey="0">
                        {Serction9Data.map(Item => (
                            <Section9Item key={Item.id} {...Item}/>
                        ))}
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Section9
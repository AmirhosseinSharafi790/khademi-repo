import "./Section4.css"
import { Container, Row } from "react-bootstrap";
import Section4Item from "./Section4Item";
import ImgSection4 from '../../../assets/images/section2-bac.jpg'

function Section4(){

    const PartsValue = [
        {
            id : 1,
           img : ImgSection4,
           title : "رشته شبکه و نرم افزار",
           text : "شاید بشه قرن ۲۱ را قرن کامپیوتر و اینترنت نامید و به همین دلیل رشته کامپیوتر یا همان رشته شبکه و نرم افزار محبوب ترین رشته تحصیلی در هنرستان های فنی و حرفه ای شده است. امروزه از کامپیوتر در همه سازمانها و ادارات شهرهای بزرگ و کوچیک استفاده میشه.",
           CName : 'border-0 text-white rounded-3'
        },
        {
            id : 2,
            img : ImgSection4,
            title : "رشته حسابداری",
            text : "قطعا حسابداری نیز مانند دیگر علوم فنی از آغازین روزهای پیدایش انسان به وجود آمده است. رشته حسابداری با گسترش کسب و کار ها و خدمات و نیز دانش و تکنولوژی در خدمت توسعه ی کشور ها در تمامی زمینه ها در آمده است. حسابداری در واقع با انتقال اطلاعات مالی به دیگران به نوعی زد.",
            CName : 'border-0 text-white rounded-3'
        },
        {
            id : 3,
            img : ImgSection4,
            title : "رشته الکتروتکنیک",
            text : "نرژی برق و توسعه آن این روزها به یکی از فناوری‌های مهم و موردنیاز هر کشور تبدیل گشته‌ است. انتقال انرژی از نیروگاه به واحدهای مصرف کننده‌ نیازمند حضور مهندسان برق الکتروتکنیک می‌باشد. پیشرفت صنعت برق در سال‌های اخیر باعث شده‌ زمینه‌های شغلی فراوانی برای این رشته‌ فراهم شود",
           CName : 'border-0 text-white rounded-3'
        }
    ]
    return(
        <Container className="d-flex justify-content-start">
        <Row className="text-center p-5">
            {PartsValue.map(Item => (
                <Section4Item key={Item.id} {...Item}/>
            ))}
        </Row>
        </Container>
    )
}
export default Section4
import {Container , Row} from 'react-bootstrap'
import './Section1.css'
import Section1Item from './Section1Item'
function Section1(){
    const SectionItems = [
        {

            id : 1,
            textValue : 'اخبار و اطلاعیه'
        },
        {
            id : 2,
            textValue : 'نمره دهی'
        },
        {
            id : 3,
            textValue : 'سامانه حضور غیاب'
        },
        {
            id : 4,
            textValue : 'گالری تصاویر'
        },
        {
            id : 5,
            textValue : 'ارتباط با هنرستان'
        },
        {
            id : 6,
            textValue : 'درباره هنرستان'
        },
        {
            id : 7,
            textValue : 'افتخارات'
        },
        {
            id : 8,
            textValue : 'کادر مدیریت'
        },
        
    ]
    return(
        <div className="section-A">
        <Container>
            <div className='text-center'>
            <p className="mar-top fw-bold animate__animated animate__rubberBand">هنرستان فنی نمونه دولتی خادمی</p>
            <h6 className="animation-sec1 my-5 Leow" id="type">بکوشم برای آبادی ایرانم</h6>
            </div>
            <div className="section1-menu-A container-A">
                <Row>
                    {SectionItems.map(Item => (
                        <Section1Item key={Item.id} {...Item}/>
                    ))}
                </Row>
            </div>
        </Container>
        </div>
    )

}

export default Section1


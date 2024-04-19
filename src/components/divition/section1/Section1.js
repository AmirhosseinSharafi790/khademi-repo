import {Container , Row , Col} from 'react-bootstrap'
import './Section1.css'
import Section1Item from './Section1Item'
import 'animate.css';
function Section1(){
    const SectionItems = [
        {
            textValue : 'اخبار و اطلاعیه'
        },
        {
            textValue : 'نمره دهی'
        },
        {
            textValue : 'سامانه حضور غیاب'
        },
        {
            textValue : 'گالری تصاویر'
        },
        {
            textValue : 'ارتباط با هنرستان'
        },
        {
            textValue : 'درباره هنرستان'
        },
        {
            textValue : 'افتخارات'
        },
        {
            textValue : 'کادر مدیریت'
        },
        
    ]
    return(
        <div className="section-A">
        <Container>
            <div className='text-center'>
            <p className="mar-top fw-bold animate__animated animate__rubberBand">هنرستان نمونه دولتی خادمی</p>
            <h5 className="animation-sec1 my-5" id="type">بکوشم برای آبادی ایرانم</h5>
            </div>
            <div className="section1-menu-A container-A">
                <Row>
                    {SectionItems.map(Item => (
                        <Section1Item {...Item}/>
                    ))}
                </Row>
            </div>
        </Container>
        </div>
    )

}

export default Section1


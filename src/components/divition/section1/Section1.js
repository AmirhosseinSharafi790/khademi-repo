import {Container , Row} from 'react-bootstrap'
import './Section1.css'
import Section1Item from './Section1Item'
import { FaUsersLine , FaRegNewspaper , FaSchoolCircleCheck } from "react-icons/fa6";
import { SlPicture } from "react-icons/sl";
import { MdPermContactCalendar , MdConnectWithoutContact } from "react-icons/md";
import { TfiCup } from "react-icons/tfi";
import { GrUserAdmin } from "react-icons/gr";

function Section1(){
    const SectionItems = [
        {

            id : 1,
            icon : <FaUsersLine size={'40px'}/> ,
            textValue : 'ورود به پورتال'
        },
        {
            id : 2,
            icon : <FaRegNewspaper size={'40px'}/> ,
            textValue : 'اخبار و اطلاعیه'
        },
        {
            id : 3,
            icon : <SlPicture size={'40px'} /> ,
            textValue : 'گالری تصاویر'
        },
        {
            id : 4,
            icon : <FaSchoolCircleCheck size={'40px'} />,
            textValue : 'پیش ثبت نام'
        },
        {
            id : 5,
            icon : <MdConnectWithoutContact size={'40px'}/> ,
            textValue : 'ارتباط با هنرستان'
        },
        {
            id : 6,
            icon : <MdPermContactCalendar  size={'40px'}/>,
            textValue : 'درباره هنرستان'
        },
        {
            id : 7,
            icon : <TfiCup size={'40px'}/>,
            textValue : 'افتخارات'
        },
        {
            id : 8,
            icon : <GrUserAdmin size={'40px'}/>,
            textValue : 'کادر مدیریت'
        },
        
    ]
    return(
        <div className="section-A">
        <Container>
            <div className='text-center'>
            <p className="mar-top fw-bold mt-5 iphone animate__animated animate__rubberBand">هنرستان فنی نمونه دولتی خادمی</p>
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


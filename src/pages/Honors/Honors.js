import { Container, Row } from 'react-bootstrap'
import './Honors.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import imageHonors from '../../assets/images/cup.png'
import HonorItems from './HonorItems'
function Honors(){
    
    let Items = [
        {
            id : 1,
            img : imageHonors,
            title : 'پیروزی در انتخابات',
            desc : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است'
        },
        {
            id : 2,
            img : imageHonors,
            title : 'پیروزی در انتخابات',
            desc : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است'
        },
        {
            id : 3,
            img : imageHonors,
            title : 'پیروزی در انتخابات',
            desc : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است'
        },
        {
            id : 4,
            img : imageHonors,
            title : 'پیروزی در انتخابات',
            desc : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است'
        },
    ]
    return(
        <div>
            <Header />
            <Container className='my-5'>
            <div className="honors">
                <div className="baner text-center">
                    <h1>افتخارات هنرستان</h1>
                    <i className="fa-solid size-icon-honors fa-award"></i>
                </div>
                <Row className='my-5'>
                    {Items.map(item => (
                        <HonorItems key={item.id} {...item} />
                    ))}
                </Row>
            </div>
            </Container>
            <Footer />
        </div>
    )
}
export default Honors
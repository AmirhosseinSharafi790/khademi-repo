import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import "./Album.css"
import { Container , Row } from "react-bootstrap"
import AlbumItem from "./AlbumItem"
import image from "../../assets/images/section2-bac.jpg"
function Album(){

    const AlbunData = [
        {
            id : 1 ,
            image : image ,
            title : "لورم ایپسوم" , 
            desc : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."
        },
        {
            id : 2 ,
            image : image ,
            title : "لورم ایپسوم" , 
            desc : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."
        },
        {
            id : 3 ,
            image : image ,
            title : "لورم ایپسوم" , 
            desc : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."
        }
    ]
    return(
        <>
            <Header/>
            <Container>
            <Row className="my-2 d-flex justify-content-cenetr align-items-center">
            {AlbunData.map(Item => (
                <AlbumItem key={Item.id} {...Item}/>
            ))}
            </Row>
            </Container>
            <Footer/>
        </>
    )
}
export default Album
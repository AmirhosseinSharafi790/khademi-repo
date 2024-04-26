import Header from "../../components/header/Header"
import "./News.css"
import Footer from "../../components/footer/Footer"
import { Container , Row } from "react-bootstrap"
import NewsItem from "./NewsItem"
import image from "../../assets/images/section2-bac.jpg"
import { Component } from "react";
import Slider from "react-slick";
function News(){

    const NewsData = [
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

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        beforeChange: function(currentSlide, nextSlide) {
          console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function(currentSlide) {
          console.log("after change", currentSlide);
        }
      };
    return(
        <>
            <Header/>
            <Container>
            <Row className="my-2 d-flex justify-content-cenetr align-items-center">
                <div className="slider-container">
                    <Slider {...settings}>
                    {NewsData.map(Item => (
                        <NewsItem key={Item.id} {...Item}/>
                    ))}
                    </Slider>
                </div>
            </Row>
            </Container>
            <Footer/>
        </>
    )
}
export default News
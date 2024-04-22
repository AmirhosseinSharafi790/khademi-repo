import Header from "../../components/header/Header";
import Section1 from "../../components/divition/section1/Section1";
import Section2 from "../../components/divition/section2/Section2";
import Section3 from "../../components/divition/section3/Section3";
import Section4 from "../../components/divition/section4/Section4";
import Section5 from "../../components/divition/Section5/Section5";
import Section6 from "../../components/divition/section6/Section6";
import Section7 from "../../components/divition/section7/Section7";
import Footer from "../../components/footer/Footer";
import "./Home.css"
import Section8 from "../../components/divition/section8/Section8";
function Home(){
    return(
        <>
        <Header/>
        <Section1 />
        <Section2/>
        <Section3/>
        <Section4 />
        <Section5/>
        <Section6 />
        <Section7 />
        <Section8/>
        <Footer />
        </>
    )
}
export default Home
import Section1 from "../../components/divition/section1/Section1";
import Section2 from "../../components/divition/section2/Section2";
import Section3 from "../../components/divition/section3/Section3";
import Header from "../../components/header/Header";
import "./Home.css"
function Home(){
    return(
        <>
        <Header/>
        <Section1 />
        <Section2/>
        <Section3/>
        </>
    )
}
export default Home
import './Section3.css'
import baseUrl from "../../../../node_modules/slick-carousel/slick/config.rb"
function Section3Items({imgS3}){
    return(
        <div>
            <img src={ baseUrl + imgS3} alt=''/>
        </div>
    )
}

export default Section3Items
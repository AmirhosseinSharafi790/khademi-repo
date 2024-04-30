import "./Section2.css"
import { SwiperSlide } from "swiper/react"
function Section2Item({title , text , className}){
    return(
            <SwiperSlide className={className}>
                <div className="flexible">
                    <h1 className="text-center">{title}</h1>
                    <p className="text-center">{text}</p>
                </div>
            </SwiperSlide>
    )
}
export default Section2Item
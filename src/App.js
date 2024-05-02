import "./App.css"
import React from "react"
import { useRoutes} from "react-router-dom"
import router from "./routes";
// import "../node_modules/swiper/swiper.css"
// import "../node_modules/swiper/swiper.min.css"



// import "../node_modules/swiper/swiper"
// import "../node_modules/swiper/swiper-bundle"
// import "../node_modules/swiper/swiper-bundle.mjs"
// import "../node_modules/swiper/swiper-element-bundle.min.mjs"
// import "../node_modules/swiper/swiper.less"
// import "../node_modules/swiper/modules/effect-coverflow.min.mjs"
// import "../node_modules/swiper/modules/effect-coverflow.mjs"
// import "../node_modules/swiper/modules/pagination.min.mjs"
// import "../node_modules/swiper/modules/pagination.mjs"
function App(){
    
    const myroutes = useRoutes(router)
    return (
        <>
        {
            myroutes
        }
            
        </>
    );
    
}
export default App
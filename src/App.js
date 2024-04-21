import "./App.css"
import React from "react"
import { useRoutes} from "react-router-dom"
import router from "./routes";
import Section5 from "./components/divition/Section5/Section5";
// import Section3 from "./components/divition/section3/Section3";

function App(){
    
    const myroutes = useRoutes(router)
    return (
        <>
        {
            myroutes
        }
            <Section5 />
        </>
    );
    
}
export default App
import "./App.css"
import React from "react"
import { BrowserRouter , Routes , Route} from "react-router-dom"
import Home from "./pages/Home/Home"
import News from "./pages/News/News"
import Album from "./pages/Album/Album"
import Registration from "./pages/Registration/Registration"
import LoginReg from "./pages/Login&Reg/Login&Reg"
function App(){
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/"  element={ <Home/> } />
                <Route path="/news"  element={ <News/> } />
                <Route path="/album"  element={ <Album/> } />
                <Route path="/registration"  element={ <Registration/> } />
                <Route path="/login&reg/*"  element={ <LoginReg/> } />
            </Routes>
        </BrowserRouter>
        </>
    )
}
export default App
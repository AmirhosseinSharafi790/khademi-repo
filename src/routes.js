import Album from "./pages/Album/Album";
import Home from "./pages/Home/Home";
import Login from "./pages/Login&Reg/Login";
import LoginReg from "./pages/Login&Reg/Login&Reg";
import Register from "./pages/Login&Reg/Register"
import News from "./pages/News/News";
import Registration from "./pages/Registration/Registration";
const router = [
    { path : "/" , element : <Home/>},
    { path : "/news" , element : <News/>},
    { path : "/album" , element : <Album/>},
    { path : "/registration" , element : <Registration/>},
    { path : "/login&reg" , element : <LoginReg/> , children : [
        {path : "login" , element : <Login/>},
        {path : "Register" , element : <Register/>}
    ]}
];
export default router
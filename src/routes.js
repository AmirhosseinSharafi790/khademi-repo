import Album from "./pages/Album/Album";
import Home from "./pages/Home/Home";
import News from "./pages/News/News";
import Registration from "./pages/Registration/Registration";
import Contact from "./pages/Contact/Contact";
import AboutUs from "./pages/AboutUs/AboutUs";
import Honors from "./pages/Honors/Honors";
import IndexPage from "./pages/Login&Reg/IndexPage";
import Login from "./pages/Login&Reg/Login";
import Sigup from "./pages/Login&Reg/Sigup";
import { element } from "prop-types";
import NotFound from "./pages/NotFound/NotFound";
const router = [
  { path: "/", element: <Home /> },
  { path: "/news", element: <News /> },
  { path: "/album", element: <Album /> },
  { path: "/registration", element: <Registration /> },
  { path: "/contact", element: <Contact /> },
  { path: "/aboutus", element: <AboutUs /> },
  { path: "/honors", element: <Honors /> },
  {path : "/login-sigup" , element: <IndexPage/> , children : [
    {path : "sigup" , element: <Sigup/>},
    {path : "login" , element: <Login/>},
  ]
  },
  {path : '*' , element : <NotFound />}
];
export default router;

import Album from "./pages/Album/Album";
import Home from "./pages/Home/Home";
import News from "./pages/News/News";
import Registration from "./pages/Registration/Registration";
import Contact from "./pages/Contact/Contact";
import AboutUs from "./pages/AboutUs/AboutUs";
import Honors from "./pages/Honors/Honors";
import IndexPage from "./pages/Login&Reg/IndexPage";
import NotFound from "./pages/NotFound/NotFound";
import Sigup from "./pages/Login&Reg/Sigup"
import ForgetPass from "./pages/Login&Reg/ForgetPass";
const router = [
  { path: "/", element: <Home /> },
  { path: "/news", element: <News /> },
  { path: "/album", element: <Album /> },
  { path: "/registration", element: <Registration /> },
  { path: "/contact", element: <Contact /> },
  { path: "/aboutus", element: <AboutUs /> },
  { path: "/honors", element: <Honors /> },
  {path : "/loginSigup" , element: <IndexPage/>},
  {path : '/sigup' , element : <Sigup />},
  {path : "/forgetPass" , element: <ForgetPass/>},
  {path : '*' , element : <NotFound />}
];
export default router;

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
import Teachers from "./pages/Teachers/Teachers";
import NetworkAndSoftware from "./pages/Teachers/MoreThan/NetworkAndSoftware";
import Accounting from "./pages/Teachers/MoreThan/Accounting";
import Electrotechnic from "./pages/Teachers/MoreThan/Electrotechnic";
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
  {path : "/teachers" , element: <Teachers/>},
  {path : "/networkAndSoftware" , element: <NetworkAndSoftware/>},
  {path : "/accounting" , element: <Accounting/>},
  {path : "/electrotechnic" , element: <Electrotechnic/>},
  {path : '*' , element : <NotFound />}
];
export default router;

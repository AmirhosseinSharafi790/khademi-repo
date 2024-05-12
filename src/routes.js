import Album from "./pages/Album/Album";
import Home from "./pages/Home/Home";
import News from "./pages/News/News";
import Registration from "./pages/Registration/Registration";
import Contact from "./pages/Contact/Contact";
import AboutUs from "./pages/AboutUs/AboutUs";
import Honors from "./pages/Honors/Honors";
import IndexPage from "./pages/Login&Reg/IndexPage";
const router = [
  { path: "/", element: <Home /> },
  { path: "/news", element: <News /> },
  { path: "/album", element: <Album /> },
  { path: "/registration", element: <Registration /> },
  { path: "/contact", element: <Contact /> },
  { path: "/aboutus", element: <AboutUs /> },
  { path: "/honors", element: <Honors /> },
  {path: "/login&reg", element: <IndexPage />},
];
export default router;

import { Link } from 'react-router-dom'
import './Footer.css'
function FooterL({icon , href , desc}){
    return(
        <div className="item my-2">
            <i className = {icon}></i>
            <Link to={href} className="fs-5 ms-2 text-decoration-none">{desc}</Link>
        </div>
            
    )
}
export default FooterL
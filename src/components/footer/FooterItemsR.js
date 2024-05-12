import { Link } from 'react-router-dom'
import './Footer.css'
function FooterItemsR({icon ,desc , hrefPhone , phone}){
    return(
        
            <div className="item my-2">
                <i className={icon}></i>
                <span className="fs-5 ms-2 text-dark opacity-75">
                    {desc}
                    <Link href={hrefPhone} className="text-dark text-decoration-none">{phone}</Link>
                </span>
            </div>
    )
}
export default FooterItemsR
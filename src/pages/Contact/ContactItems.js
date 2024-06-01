
import { Link } from 'react-router-dom'
import './Contact.css'
function ContactItems({icon , title , phone , hrefphone}){
    return(
        <div className="item my-4">
            <i className={icon}></i>
            <span className="fs-5 ms-2">
            {title}
            <Link href={hrefphone} className="dir text-dark text-decoration-none" target="blank">{phone}</Link>
            </span>
        </div>
    )
}

export default ContactItems
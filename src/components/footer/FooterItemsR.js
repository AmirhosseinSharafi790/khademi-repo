import './Footer.css'
function FooterItemsR({icon ,desc , hrefPhone , phone}){
    return(
        
            <div className="item my-2">
                <i className={icon}></i>
                <span className="fs-5 ms-2 text-dark opacity-75">
                    {desc}
                    <a href={hrefPhone} className="text-dark text-decoration-none">{phone}</a>
                </span>
            </div>
    )
}
export default FooterItemsR
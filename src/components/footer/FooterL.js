import './Footer.css'
function FooterL({icon , href , desc}){
    return(
        <div className="item my-2">
            <i className = {icon}></i>
            <a href={href} className="fs-5 ms-2 text-decoration-none">{desc}</a>
        </div>
            
    )
}
export default FooterL
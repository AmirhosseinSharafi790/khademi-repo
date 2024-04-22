import './Section6.css'
import managerImg from '../../../assets/images/section2-bac.jpg'
function S6Card(){
    return(
            <div className="card-manager p-3">
                
                <img src={managerImg} className=" style-img-manager" />
                <p className="fs-3 my-5">جلیل رفیعی(مدیر هنرستان) </p>
                <p className="font-size-p-manager pb-4 pt-3">لورم ایپسوم متن ساختگی از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی ان جامعه و متخصصواشت که تما شامل حروفچیرد.</p>
                <div className="d-flex justify-content-around px-5">
                     <a href="#" className="btn-green px-3 py-2 rounded-2 hover-btn mx-4 shadow"> تماس با من</a>
                         <a href="" className="px-3 py-2 rounded-2 btn-light m-0">
                      <div className="d-flex align-items-center ">
                        کادر مدیریت
                        <i className="bi bi-arrow-left mx-2 fs-5" style = {{lineHeight : "0"}}></i>
                      </div>
                    </a>
                    
                  </div>
            </div>
    )
}

export default S6Card
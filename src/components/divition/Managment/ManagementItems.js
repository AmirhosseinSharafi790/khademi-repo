// import { Col, Row } from "react-bootstrap";
// import NumberPhone from "./NumberPhone";
import React from 'react';
import { SwiperSlide } from 'swiper/react';
function ManagementItems({content}){
    let PhoneNumber = [
        {
            id : 1,
            phone : '09900175567'
        },
        {
            id : 2,
            phone : '852741'
        },
        {
            id : 3,
            phone : '25757'
        },
        {
            id : 4,
            phone : '3453453'
        },
        {
            id : 5,
            phone : '345453434'
        },
    ]
    return(
        // <Col md = {6} xl ={4} className="my-4 height-100">
        //     <div className="card-management p-4">
        //         <img src={img} className = 'img-management img-fluid' />
        //         <p className="info my-2">{name} </p>
        //         <span className="color-red my-2 fs-4">{title}</span>
        //         <p className="font-size-p-manager pb-4 pt-3">{desc}</p>
        //         <Row>
        //             {PhoneNumber.map(phone => (
        //                 <NumberPhone key={phone.id} {...phone} />
        //             ))}
        //             <Col sm ={12} className="d-flex justify-content-center py-3 mt-3 mt-lg-0">
        //                 <a href="#"><i title="Eitaa" className="hover-app3 fs-2 mx-2 fa-solid fa-envelope"></i></a>
        //                 <a href="#"><i title="Telegram" className="hover-app1 fs-2 mx-2 fa-brands fa-telegram"></i></a>
        //             </Col>
        //         </Row>
               
        //     </div>
        // </Col>
        <SwiperSlide>{content}</SwiperSlide>
    );
}

export default ManagementItems

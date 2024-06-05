import { Container } from "react-bootstrap";
import "./AlbumZoom.css";
import AlbumZoomItems from "./AlbumZoomItems";
function AlbumZoom() {
  // let n = 8
  // let a = "";
  // for (i = 0 i < n ; i++){
  //if(n % 2 == 0){
  // a = "justify-content-end"
  //   n -= 1
  //   }else{
  // a = "justify-content-start"
    //}
  //}
  // 
    let Items = [
        {
          id: 1,
          image: "https://swiperjs.com/demos/images/nature-1.jpg",
          RowClass : 'justify-content-end' ,
          animation : "fade-up"
        },
        {
          id: 2,
          image: "https://swiperjs.com/demos/images/nature-2.jpg",
          RowClass : 'justify-content-start' ,
          animation : "fade-down"
        },
        {
          id: 3,
          image: "https://swiperjs.com/demos/images/nature-3.jpg",
          RowClass : 'justify-content-end' ,
          animation : "fade-right"
        },
        {
          id: 4,
          image: "https://swiperjs.com/demos/images/nature-4.jpg",
          RowClass : 'justify-content-start' ,
          animation : "fade-left"
        },
        {
          id: 5,
          image: "https://swiperjs.com/demos/images/nature-5.jpg",
          RowClass : 'justify-content-end' ,
          animation : "flip-left"
        },
        {
          id: 6,
          image: "https://swiperjs.com/demos/images/nature-4.jpg",
          RowClass : 'justify-content-start' ,
          animation : "flip-right"
        },
        {
          id: 7,
          image: "https://swiperjs.com/demos/images/nature-7.jpg",
          RowClass : 'justify-content-end' ,
          animation : "zoom-in"
        },
        {
          id: 8,
          image: "https://swiperjs.com/demos/images/nature-8.jpg",
          RowClass : 'justify-content-start' ,
          animation : "zoom-in-up"
        },
      ];
  return (
    <div className="container-style">
      <Container>
        <div className="title-album">
          <h1>تصاویر اردوی مشهد مقدس </h1>
          <h4>برای دیدن تصاویر پایین برید</h4>
        </div>
            {Items.map(item => (
                <AlbumZoomItems key={item.id} {...item} />
            ))}
      </Container>
    </div>
  );
}

export default AlbumZoom;

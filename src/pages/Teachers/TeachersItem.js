import "./Teachers.css";
import { Col , Card } from "react-bootstrap";
function TeachersItem({image , name , field}) {
  return (
    <Col sm={12} md={6} lg={3}>
      <Card className="my-3 card-hover">
        <Card.Img variant="top" src={image} className="img-fluid" style={{aspectRatio : "3/2" , objectFit : "cover"}} />
        <Card.Body>
          <Card.Title> {name} </Card.Title>
          <Card.Text>
            <p>
              دبیر : <b> {field} </b>
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
export default TeachersItem;

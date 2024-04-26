import "./Album.css"
import { Col} from "react-bootstrap";
import Card from 'react-bootstrap/Card';
function AlbumItem({image , title , desc}){
    return(
        <Col className="px-2">
            <Card style={{backgroundColor : "#04bea2"}}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title className="text-center">{title}</Card.Title>
                    <Card.Text className="text-center">{desc}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}
export default AlbumItem
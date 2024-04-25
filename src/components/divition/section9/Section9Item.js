import "./Section9.css"
import Accordion from 'react-bootstrap/Accordion';
function Section9Item({title , desc , id}){
    return(
        <>
            <Accordion.Item eventKey={id}>
                <Accordion.Header>{title}</Accordion.Header>
                <Accordion.Body>{desc}</Accordion.Body>
            </Accordion.Item>
        </>
    )
}
export default Section9Item
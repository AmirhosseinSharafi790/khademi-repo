import { Accordion } from "react-bootstrap";
import "./Accardion.css";
function AccardionReg({title , desc , id , icon}) {
  return (
    <>
      <Accordion.Item eventKey={id}>
        <Accordion.Header><span className="ms-2">{icon}</span> {title}</Accordion.Header>
        <Accordion.Body>
            {desc}
        </Accordion.Body>
      </Accordion.Item>
    </>
  );
}
export default AccardionReg;

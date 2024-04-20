import "./Section5.css";
import {Container , Row} from 'react-bootstrap'
import Section5Counter from "./Section5Counter";
function Section5() {

  let CounterItems = [
    {
      textValue : 'سال سابقه' ,
      icon : 'fa-sharp fa-solid fa-clock-rotate-left icon-Size',
    },
    {
      textValue : 'دانش آموز' ,
      icon : 'fa-solid fa-users icon-Size',
    },
    {
      textValue : 'پرسنل' ,
      icon : 'fa-solid fa-graduation-cap icon-Size',
    },
    {
      textValue : 'متر مربع' ,
      icon : 'fa-regular fa-building icon-Size',
    },
  ]

  return (
    <div className="section-A section2 py-5 my-5 m-inline">
      <Container>
        <Row>
          {CounterItems.map(CounterItem => (
            <Section5Counter {...CounterItem}/>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Section5;

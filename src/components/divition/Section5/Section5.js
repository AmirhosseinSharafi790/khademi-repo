import "./Section5.css";
import {Container , Row} from 'react-bootstrap'
import Section5Counter from "./Section5Counter";
function Section5() {

  let CounterItems = [
    {
      id : 1,
      textValue : 'سال سابقه' ,
      icon : 'fa-sharp fa-solid fa-clock-rotate-left icon-Size',
    },
    {
      id : 2,
      textValue : 'دانش آموز' ,
      icon : 'fa-solid fa-users icon-Size',
    },
    {
      id : 3,
      textValue : 'پرسنل' ,
      icon : 'fa-solid fa-graduation-cap icon-Size',
    },
    {
      id : 4,
      textValue : 'متر مربع' ,
      icon : 'fa-regular fa-building icon-Size',
    },
  ]

  return (
    <div className="section-A section2 py-5  m-inline">
      <Container>
        <Row>
          {CounterItems.map(CounterItem => (
            <Section5Counter key={CounterItem.id} {...CounterItem}/>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Section5;

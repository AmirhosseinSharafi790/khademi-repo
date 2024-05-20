import "./Section5.css";
import {Container , Row} from 'react-bootstrap'
import Section5 from "./Section5";
import PureCounter from "@srexi/purecounterjs";
const pure = new PureCounter();
function Section5Items() {

  let CounterItems = [
    {
      id : 1,
      textValue : 'سال سابقه' ,
      icon : 'fa-sharp fa-solid fa-clock-rotate-left icon-Size',
      start : '0',
      end : '30'
    },
    {
      id : 2,
      textValue : 'دانش آموز' ,
      icon : 'fa-solid fa-users icon-Size',
      start : '0',
      end : '88'
    },
    {
      id : 3,
      textValue : 'پرسنل' ,
      icon : 'fa-solid fa-graduation-cap icon-Size',
      start : '0',
      end : '123'
    },
    {
      id : 4,
      textValue : 'متر مربع' ,
      icon : 'fa-regular fa-building icon-Size',
      start : '0',
      end : '321123'
    },
  ]

  return (
    <div className="section-A section2 py-5">
      <Container>
        <Row>
          {CounterItems.map(CounterItem => (
            <Section5 key={CounterItem.id} {...CounterItem}/>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Section5Items;

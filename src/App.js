import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CurrentTask from './components/CurrentTask'; 
import TaskList from './components/TaskList'; 
import RightSideBar from './components/RightSideBar';
import TaskItem from './components/TaskItem'; 
import { useEffect, useState } from 'react';

import { Container, Row, Col, Button, Image } from 'react-bootstrap';

const getHeaderDate = () => {
  const today = new Date();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const shortMonth = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
  return (
      <span>
         Today is {days[today.getDay()]}, {shortMonth[today.getMonth()]} {today.getDate()}
      </span>
  )
}

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (item) => {
    setTasks(previousValue => {
      return [...previousValue, {name: item}]
    })
  }

  // useEffect(() => {

  // }); 

  return <>
    <div style={{height: `100vh`}}>
        <Container fluid className="h-100">
          <Header />
          <Row className="h-75">
            <Col style={{backgroundColor: '#cccccc'}}>
              <CurrentTask />
              <TaskList onAdd={{addTask}}/>
              {tasks.map (task => 
                <TaskItem {...task}/>
                )}
              <TaskItem/>
            </Col>
            <Col>
              <RightSideBar className="sidebar" />
            </Col>
          </Row>
        </Container>
    </div>
  </>;
}

export default App;

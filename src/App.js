import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
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
    <div style={{height: '100vh'}}>
      <header>
        <Header />
      </header>
      <main>
        <div>
          <CurrentTask />
          <TaskList className="my-2 task-list" onAdd={{addTask}}/>
          {tasks.map (task => 
            <TaskItem {...task}/>
            )}
          <TaskItem/>
        </div>
        <div className='ms-2 p-0'>
          <RightSideBar className="sidebar" />
        </div>
      </main>
    </div>
  </>;
}

export default App;

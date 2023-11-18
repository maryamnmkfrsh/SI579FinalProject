import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import CurrentTask from './components/CurrentTask'; 
import TaskList from './components/TaskList'; 
import RightSideBar from './components/RightSideBar';
import TaskItem from './components/TaskItem'; 
import { useEffect, useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(item) {
    setTasks(previousValue => {
      [...previousValue, {name: item}]
    })
  }

  // useEffect(() => {

  // }); 

  return <>
      <Header />
      <main className="main">
        <div className="grid">
          <div>
            <CurrentTask />
            <TaskList onAdd={{addTask}}/>
            {tasks.map (task => 
              <TaskItem {...task}/>
              )}
            <TaskItem/>
          </div>
          <RightSideBar className="sidebar" />
        </div>
      </main> 
  </>;
}

export default App;

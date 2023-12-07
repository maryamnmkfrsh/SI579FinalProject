import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import CurrentTask from './components/CurrentTask'; 
import TaskList from './components/TaskList'; 
import RightSideBar from './components/RightSideBar';
import { useEffect, useState } from 'react';
import TestFirebaseModule from './components/TestFirebaseModule';

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

function MomentumMate() {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [taskTimer, setTaskTimer] = useState(null);
  const [currentTask, setCurrentTask] = useState(null);

  useEffect(() => {
    if (tasks.length === 0) return; 
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks]);

  useEffect (() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks)
  }, []);

  const handleToggle = (taskIndex, updateCompleted) => {
    setTasks((previousValue) => {
      const newTasks = [...previousValue]
      newTasks[taskIndex].completed = updateCompleted
      return newTasks; 
    })
  }

  const addTask = (item, time) => {
    setTasks(previousValue => {
      return [...previousValue, { id: Date.now(), task: item, time: time, completed: false }]
    })
  }

  const startTask = (task) => {
    setSelectedTask(task);
    setCurrentTask(task.task);
    setTaskTimer(setInterval(() => {
      console.log(`Task in progress: ${task.task} - ${task.time}`);
    }, 1000));
  };

  const pauseTask = () => {
    clearInterval(taskTimer);
    console.log(`Task paused: ${selectedTask.task}`);
  };

  const stopTask = () => {
    clearInterval(taskTimer);
    setSelectedTask(null);
    setCurrentTask(null);
  };

  return <>
    <div style={{height: '100vh'}}>
      <header>
        <Header />
      </header>
      <main>
        <div>
          <CurrentTask 
          currentTask={currentTask}
          selectedTask={selectedTask}
          onStart={startTask}
          onPause={pauseTask}
          onStop={stopTask}/>
          <TaskList tasks={tasks} startTask={startTask} setCurrentTask={setCurrentTask}/>
        </div>
        <div className='ms-2 p-0'>
          <RightSideBar className="sidebar" />
        </div>
      </main>
    </div>
  </>;
}

export default MomentumMate;

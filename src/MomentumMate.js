import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import CurrentTask from './components/CurrentTask'; 
import TaskList from './components/TaskList'; 
import RightSideBar from './components/RightSideBar';
import { useEffect, useState } from 'react';
import TestFirebaseModule from './components/TestFirebaseModule';

function MomentumMate({user}) {
  const [tasks, setTasks] = useState([]);

  const addTask = (item) => {
    setTasks(previousValue => {
      return [...previousValue, {name: item}]
    })
  }

  return <>
    <div style={{height: '100vh'}}>
      <header>
        <Header />
      </header>
      <main>
        <div>
          <CurrentTask />
          <TaskList className="my-2 task-list" onAdd={{addTask}}/>
        </div>
        <div className='ms-2 p-0'>
          <TestFirebaseModule user={user} />
          {/* <RightSideBar className="sidebar" /> */}
        </div>
      </main>
    </div>
  </>;
}

export default MomentumMate;

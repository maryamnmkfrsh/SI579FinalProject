import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import CurrentTask from './components/CurrentTask'; 
import TaskList from './components/TaskList'; 
import RightSideBar from './components/RightSideBar';
import TaskItem from './components/TaskItem'; 
import { useEffect, useState } from 'react';
import { getDatabase, ref, set } from "firebase/database";
import TestFirebaseModule from './components/TestFirebaseModule';


function testDatabase () {
  const database = getDatabase();
// Setting the data.
var cartId = 1;
const data = {
   cartId: cartId,
   products: [
      { 
          'title' : 'product1',
          'price': 50
      },
      { 
          'title' : 'product2',
          'price': 30
      },
      { 
          'title' : 'product3',
          'price': 70
      },     
   ],
}
set(ref(database, 'tasks/' + cartId), data).then( () => {
   // Success.
   console.log('succcesssss.....');
} ).catch( (error) => {
  console.log(error);
} );
}

function MomentumMate({user}) {
  const [tasks, setTasks] = useState([]);

  const addTask = (item) => {
    setTasks(previousValue => {
      return [...previousValue, {name: item}]
    })
  }

  const testUser = () => {
    console.log(user);
  }

  // useEffect(() => {

  // }); 

  return <>
    <div style={{height: '100vh'}}>
      <header>
        <Header />
        <button onClick={testDatabase}>Database</button>
        <button onClick={testUser}>User</button>
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
          <TestFirebaseModule user={user} />
          {/* <RightSideBar className="sidebar" /> */}
        </div>
      </main>
    </div>
  </>;
}

export default MomentumMate;

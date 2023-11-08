import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import CurrentTask from './components/CurrentTask'; 
import TaskList from './components/TaskList'; 
import RightSideBar from './components/RightSideBar'; 
function App() {
  return <>
      <Header />
      <main className="main">
        <div className="grid">
          <div>
            <CurrentTask />
            <TaskList />
          </div>
          <RightSideBar className="sidebar" />
        </div>
      </main> 
  </>;
}

export default App;

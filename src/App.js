import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import CurrentTask from './components/CurrentTask';
import TaskList from './components/TaskList';
import RightSideBar from './components/RightSideBar';

function App() {
  return (
    <div style={{ height: '100vh' }}>
      <header>
        <Header />
      </header>
      <main>
        <div>
          <CurrentTask />
          <TaskList className="my-2 task-list" />
        </div>
        <div className="ms-2 p-0">
          <RightSideBar className="sidebar" />
        </div>
      </main>
    </div>
  );
}

export default App;

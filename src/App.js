import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import CurrentTask from './components/CurrentTask'; 
import TaskList from './components/TaskList'; 
import RightSideBar from './components/RightSideBar'; 
function App() {
<<<<<<< HEAD
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Mani is getting ready to tackle all your tasks!
        </p>
      </header>

    </div>
  );
=======
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
>>>>>>> 68176e4ca9381ce92707dacdfe80fb475a27cb3b
}

export default App;

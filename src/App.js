import logo from './logo.svg';
import './App.css';
import TaskItem from './components/TaskItem'; 
import TaskList from './components/TaskList'; 
import CurrentTask from './components/CurrentTask'; 

function App() {
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
}

export default App;

import TaskAdd from "./TaskAdd";
import TaskItem from "./TaskItem";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid'; 
import { ListGroup} from 'react-bootstrap';

const TaskList = ({ startTask}) => {
    const[tasks, setTasks] = useState(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        return storedTasks;
      });
    const [currentTask, setCurrentTask] = useState(null);
    const [taskTime, setTaskTime] = useState('');


    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks((prevTasks) => {
            return JSON.stringify(storedTasks) !== JSON.stringify(prevTasks) ? storedTasks : prevTasks;
        });
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }, [tasks]);

    const addTask = (task) => {
        const newTask = { id: uuidv4(), ...task, completed: false, isEditing: false };
        const newTasks = [...tasks, newTask];
        setTasks(newTasks);
    }

    const handleToggleComplete = (id) => {
        const updatedTasks = tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks)
    }

    const handleDeleteTask = (id) => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
    }

    return (
        <>
        <div className="task-list">
        <h2 className='mb-3'>Todo List</h2>
            <TaskAdd  addTask={addTask}/>
            <ListGroup>
                {tasks.map((task, index) => (
                <TaskItem 
                task={task} 
                key={index}
                toggleComplete={handleToggleComplete}
                deleteTask={handleDeleteTask} 
                startTask={(taskItem) => {
                    setCurrentTask(taskItem.task);
                    setTaskTime(taskItem.time);  
                    startTask(taskItem);
                }}            
                />
            ))}
            </ListGroup>
           </div>
        </>
    )
}

export default TaskList; 
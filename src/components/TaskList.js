import { TextField, Button } from '@mui/material';
import { useState } from 'react';
import Tasks from '../util/defaultTasks';
import { v4 as uuidv4 } from 'uuid';    
import { List, ListItem, ListItemButton, ListItemIcon, Checkbox, ListItemText} from '@mui/material';

const TaskList = ({ className }) => {

    
    // States for forms
    const [taskName, setTaskName] = useState('');
    const [minutes, setMinutes] = useState('');
    const [seconds, setSeconds] = useState('');
    const [checked, setChecked] = useState([0]);

    //State for persistence
    const [currentTaskId, setCurrentTaskId] = useState(null);
    const [tasks, setTasks] = useState([]);

    const handleToggle = (index) => () => {
        const currentIndex = checked.indexOf(index);
        const newChecked = [...checked];
    
        if (currentIndex === -1) {
          newChecked.push(index);
        } else {
          newChecked.splice(currentIndex, 1);
        }
    
        setChecked(newChecked);
    };


    const addTask = () => {
        const newTask = {
          taskId: uuidv4(), // Generate a UUID for the task
          taskName: taskName,
          time: { minutes: minutes, seconds: seconds },
          timeRemaining: { minutes: minutes, seconds: seconds },
          done: false,
          creationTimestamp: new Date().toISOString() // Capture current timestamp
        };
        console.log(newTask);
        setTasks((prev) => {
            let arr = [...prev];
            arr.push(newTask);
            return arr;
        });
    }

    return (
    <div className={className}>
        <h2 className='mb-3'>Todo List</h2>
        <div className='d-flex gap-3'>
            <TextField 
                fullWidth 
                value={taskName} 
                onChange={(e) => setTaskName(e.target.value)}
                label="Add a new task" 
                variant="outlined" />
            <TextField
                label="Minutes"
                value={minutes}
                onChange={(e) => setMinutes(e.target.value)}
                variant="outlined"
                />
            <TextField
                label="Seconds"
                value={seconds}
                onChange={(e) => setSeconds(e.target.value)}
                variant="outlined"
                />
            <Button
                className='flex-grow-1'
                onClick={addTask}
                variant="contained">
                Add
            </Button>
            </div>
            <List>
            {tasks.map((task, index) => {
                const labelId = `checkbox-list-label-${index}`;
                console.log(task);
                return <ListItem
                    key={index}
                    disablePadding>
                    <ListItemButton role={undefined} onClick={handleToggle(index)} dense>
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                checked={checked.indexOf(index) !== -1}
                                tabIndex={-1}
                                disableRipple
                                inputProps={{ 'aria-labelledby': labelId }}
                            />
                        </ListItemIcon>
                        <ListItemText 
                            id={labelId} 
                            primary={task.taskName}
                            secondary={`${task.time.minutes}:${task.time.seconds}`} />
                    </ListItemButton>
                </ListItem>
            })}
            </List>
    </div>
    );
}

export default TaskList; 
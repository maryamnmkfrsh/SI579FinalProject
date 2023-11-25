import { TextField, Button } from '@mui/material';
import { useState } from 'react';
import Tasks from '../util/defaultTasks';
import { List, ListItem, ListItemButton, ListItemIcon, Checkbox, ListItemText} from '@mui/material';

const TaskList = ({ className }) => {

    const [taskName, setTaskName] = useState('');
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');
    const [checked, setChecked] = useState([0]);
    const [tasks, setTasks] = useState(Tasks);

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
        const taskObject = {
            title: taskName,
            hours: hours,
            minutes: minutes
        };
        setTasks((prev) => {
            const newTasks = [...prev];
            newTasks.push(taskObject);
            return newTasks;
        })
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
                label="Hours"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
                variant="outlined"
                />
            <TextField
                label="Minutes"
                value={minutes}
                onChange={(e) => setMinutes(e.target.value)}
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
                            primary={task.title}
                            secondary={`${task.hours}:${task.minutes}`} />
                    </ListItemButton>
                </ListItem>
            })}
            </List>
    </div>
    );
}

export default TaskList; 
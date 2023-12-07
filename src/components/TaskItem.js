import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { List, ListItem, ListItemButton, ListItemIcon, Checkbox, ListItemText} from '@mui/material';
import ReactConfetti from 'react-confetti';
import { useState } from 'react';

const TaskItem = ({task, toggleComplete, deleteTask, startTask}) => {
    const [showConfetti, setShowConfetti] = useState(false);

    const handleToggleComplete = () => {
        toggleComplete(task.id);
    
        if (!task.completed) {
            setShowConfetti(true);
            setTimeout(() => {
              setShowConfetti(false);
            }, 5000);
          }
        };
    

  return (
    <List>
        <ListItem disablePadding>
        {showConfetti && <ReactConfetti />}
            <ListItemButton
                role={undefined}
                onClick={() => handleToggleComplete(task.id)}
                dense
                style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={task.completed}
                        tabIndex={-1}
                        disableRipple />
                </ListItemIcon>
                <ListItemText
                    primary={task.task}
                    secondary={task.time} />
            </ListItemButton>
            <ListItemIcon>
                <FontAwesomeIcon icon={faTrash} onClick={() => deleteTask(task.id)} />
            </ListItemIcon>
            <button onClick={() => startTask(task)}>Start Task</button>
        </ListItem>
    </List>
);
}

export default TaskItem;


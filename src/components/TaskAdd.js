import { useState } from "react";
import { TextField, Button } from '@mui/material';

const TaskAdd = ({ addTask }) => {
    const [task, setTask] = useState('');
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');


    const formatTime = (inputHours, inputMinutes, inputSeconds) => {
        const formattedHours = inputHours < 10 ? `0${inputHours}` : `${inputHours}`;
        const formattedMinutes = inputMinutes < 10 ? `0${inputMinutes}` : `${inputMinutes}`;
        return `${formattedHours}:${formattedMinutes}`;
      };
    
    
      const handleTimeChange = (setValue, e) => {
        const input = e.target.value;
        const regex = /^\d*$/;
    
        if (regex.test(input) || input === "") {
          const inputValue = input === "" ? 0 : parseInt(input, 10);
          setValue(inputValue);
        }
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const formattedTime = formatTime(hours, minutes);
        addTask({ task, time: formattedTime });
        setTask('');
        setHours('');
        setMinutes('');
      };

    return (
        <>
        <div className='d-flex gap-3'>
            <TextField 
            fullWidth 
            value={task} 
            onChange={(e) => setTask(e.target.value)}
            label="Add a new task" 
            variant="outlined" />

            <TextField
            label="Hours"
            value={hours}
            onChange={(e) => handleTimeChange(setHours, e)}
            variant="outlined" />
            
            <TextField
            label="Minutes"
            value={minutes}
            onChange={(e) => handleTimeChange(setMinutes, e)}
            variant="outlined"/>
            
            <Button
            className='flex-grow-1'
            onClick={handleSubmit}
            variant="contained">
            Add
            </Button>
        </div>
        </>
    )
}

export default TaskAdd; 
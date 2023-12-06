import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { getDatabase, ref, push, child, get } from "firebase/database";

const TestFirebaseModule = ({ user }) => {

    const [taskList, setTaskList] = useState([]);

    const [taskName, setTaskName] = useState('');
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const db = getDatabase();
    const userId = user.uid;

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
        setTaskList((prev) => {
            let arr = [...prev];
            arr.push(newTask);
            return arr;
        });
    }

    const getFromDb = () => {
        const dbRef = ref(db);
        get(child(dbRef, `tasks/${userId}`)).then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val());
        } else {
            console.log("No data available");
        }
        }).catch((error) => {
            console.error(error);
        });
    }   

    const saveToDb = () => {
        const tasksRef = ref(db, `tasks/${userId}`);
        push(tasksRef, taskList)
            .then(() => {
                console.log("Tasks saved to Firebase for user:", userId);
            })
            .catch((error) => {
            console.error("Error saving tasks to Firebase:", error);
            });
    }

    return (
        <div>
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
            <Button
                className='flex-grow-1'
                onClick={saveToDb}
                variant="contained">
                Save to DB
            </Button>
            <Button
                className='flex-grow-1'
                onClick={getFromDb}
                variant="contained">
                Get from DB
            </Button>
            <ul>
                { taskList.map((task, index) => <li key={index}>{`${task.taskId}`}</li>) }
            </ul>

        </div>
    );
}

export default TestFirebaseModule;

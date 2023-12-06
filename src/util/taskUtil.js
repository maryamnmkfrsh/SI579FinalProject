import { v4 as uuidv4 } from 'uuid';

// Create a function to generate a new task with a unique ID
export const createTask = (taskName, minutes, seconds) => {
  const newTask = {
    taskId: uuidv4(), // Generate a UUID for the task
    taskName: taskName,
    time: { minutes: minutes, seconds: seconds },
    timeRemaining: { minutes: minutes, seconds: seconds },
    done: false,
    creationTimestamp: new Date().toISOString() // Capture current timestamp
  };
  return newTask;
}
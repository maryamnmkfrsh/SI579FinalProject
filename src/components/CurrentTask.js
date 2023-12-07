import { ProgressBar  } from 'react-bootstrap';
import { Fab } from '@mui/material';
import { PlayArrow, Pause, Stop } from '@mui/icons-material';
import { useState, useEffect } from "react";

const CurrentTask = ({ selectedTask, onStart, onPause, onStop, currentTask }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
      console.log('Current Task:', currentTask);
  }, [currentTask]);

    const handleStart = () => {
        setIsPlaying(true);
        onStart(selectedTask);
      };
    
      const handlePause = () => {
        setIsPlaying(false);
        onPause();
      };
    
      const handleStop = () => {
        setIsPlaying(false);
        onStop();
      };
      
      if (currentTask) {
    return (
        <div className="current-task">
            <div className="pb-2 d-flex flex-row justify-content-between">
                {/* TODO: make it dynamic */}
                <span className="current-task-title">Current Task</span>
                <span className='current-task-time'>{selectedTask ? selectedTask.time : '00:00'}</span>
            </div>
            <div className='d-flex flex-row justify-content-between align-items-center'>
            <div className='flex-grow-1 ps-3'>
                    <ProgressBar now={60} />
                </div>
                <Fab aria-label={isPlaying ? "pause" : "play"} 
                color={isPlaying ? "secondary" : "primary"} 
                onClick={isPlaying ? handlePause : handleStart}>
                {isPlaying ? <Pause /> : <PlayArrow />}
                </Fab>
                <Fab aria-label="stop" onClick={handleStop}>
                <Stop />
                </Fab>
                
            </div>
        </div>
    );
    } else {
        return (
            <div className="current-task d-flex align-items-center justify-content-center ">
                <p>Please click on a task to start it</p>
            </div>
        )
    }
}

export default CurrentTask; 
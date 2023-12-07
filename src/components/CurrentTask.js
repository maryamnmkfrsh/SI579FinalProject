import { ProgressBar  } from 'react-bootstrap';
import { Fab } from '@mui/material';
import { PlayArrow } from '@mui/icons-material';

const CurrentTask = ({taskId}) => {
    if (taskId) {
    return (
        <div className="current-task">
            <div className="pb-2 d-flex flex-row justify-content-between">
                {/* TODO: make it dynamic */}
                <span className="current-task-title">Current Task</span>
                <span className='current-task-time'>30:00</span>
            </div>
            <div className='d-flex flex-row justify-content-between align-items-center'>
                <Fab aria-label="play" color="primary">
                    <PlayArrow />
                    {/* {success ? <CheckIcon /> : <SaveIcon />} */}
                </Fab>
                <div className='flex-grow-1 ps-3'>
                    <ProgressBar now={60} />
                </div>
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
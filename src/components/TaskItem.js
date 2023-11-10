//component for task items inside the task list

import { useState } from "react";

const TaskItem = ({name}) => {
    const [input, setInput] = useState("");
    // const [list, setList] = useState([]);
    const [time, setTime] = useState("")


    return (
        <>
        <div>
        <input type={"checkbox"} />
        <input
          type='text'
          value = {input}
          onChange={(e) => setInput(e.target.value)}
        />
       
        <input
          type='time'
          value = {time}
          onChange={(e) => setTime(e.target.value)}
        />
        </div>
        </>
    ) 
}

export default TaskItem; 
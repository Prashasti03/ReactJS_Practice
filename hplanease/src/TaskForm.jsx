import { useState } from "react";

function TaskForm({addTask}) {
    const [input, setInput] = useState('');

    const handleSubmit = () =>{
        if (input.trim() === '') return;

        addTask(input);
        setInput('');    // clear input
    };

    return(
        <div style={{ marginBottom:20}}>
            <input type="text" placeholder="Enter a Task" value={input} onChange={(e) => setInput(e.target.value)}></input>
            <button onClick={handleSubmit}>Add Task</button>
        </div>
    )
}

export default TaskForm;
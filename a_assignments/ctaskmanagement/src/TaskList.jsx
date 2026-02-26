import { useState } from "react";

function TaskList(){
    const [tasks, setTasks] = useState([
        {name: 'Task 1', status: 'done'},
        {name: 'Task 2', status: 'not done'},
        {name: 'Task 3', status: 'done'},
    ]);

    const toggleStatus = (index) =>{
        const updatedTasks = tasks.map((task, i) =>{
            if(i===index){
                return{
                    ...task,
                    status: task.status === 'done'? 'not done' : 'done'
                };
            }

            return task;
        });

        setTasks(updatedTasks);
    }
    return(
        <div style={{marginLeft:'30px'}}>
            <h2>Employee Task Management</h2>

            {
                tasks.map((task, index)=>(
                    <div key={index} style={{marginBottom:'10px'}}>
                        <strong>{task.name}</strong> = {task.status} &nbsp; 
                        <button onClick={()=> toggleStatus(index)}>Toggle Status</button>
                    </div>
                ))
            }
        </div>
    )
}

export default TaskList;
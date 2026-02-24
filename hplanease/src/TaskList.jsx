import TaskItem from "./TaskItem";

function TaskList({tasks, toggleTask, deleteTask}) {
    return(
        <ul style={{listStyle:'none', padding:0}}>
            {tasks.map((task)=>(
                <TaskItem key={task.id} task={task} toggleTask={toggleTask} deleteTask={deleteTask}></TaskItem>
            ))}
        </ul>
    )
}

export default TaskList;
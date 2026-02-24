function TaskItem({task, toggleTask, deleteTask}) {
    return(
        <li style={{marginBottom:10, textDecoration: task.completed ? 'line-through' : 'none'}}>
            <input type='checkbox' checked={task.completed} onChange={()=> toggleTask(task.id)}></input>
            {task.name} -{' '}
            <strong>{task.completed ? 'Completed' : 'Pending'}</strong>

            <button onClick={()=> deleteTask(task.id)} style={{marginLeft:10}}>Delete</button>
        </li>
    )
}

export default TaskItem;
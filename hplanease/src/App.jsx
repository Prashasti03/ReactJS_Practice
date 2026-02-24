import { useState } from "react"
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

// context API - to pass information from grand parent component to grand child component directly.
// used to avoid prop drilling, which includes passing data form grand parents  to parents to grand child components.
// createContext() method, Provider, Consumer and useContext hook concepts are used

function App() {
  const [tasks, setTasks] = useState([]);

  // Add Task
  const addTask = (taskName) => {
    if(taskName.trim() === '') return;

    const newTask = {
      id: Date.now(),
      name: taskName,
      completed: false
    };

    setTasks([...tasks, newTask]);
  };

  // Toggle Task
  const toggleTask = (id) => {
    const updatedTasks = tasks.map((task) =>
    task.id === id ? {...task, completed: !task.completed}: task
    );
    setTasks(updatedTasks);
  };

  // Delete Task
  const deleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  }

  return (
    <div style={{textAlign:'center', marginTop:40}}>
      <h1>PlanEase - Daily Planner</h1>

      <TaskForm addTask={addTask}/>

      {tasks.length === 0 ? (
        <p>No tasks available. Add one!</p>
      ):(
        <>
          <p>Total Tasks: {tasks.length}</p>
          <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask}/>
        </>
      )

      }
    </div>
  )
}

export default App;

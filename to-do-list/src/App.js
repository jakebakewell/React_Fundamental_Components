import React, { useState } from 'react';
import './App.css';
import Task from './components/Task';
import TaskForm from './components/TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <div className="App container">
      {tasks.map((task, i) => (
        <Task task={task} setTasks={setTasks} index={i} tasks={tasks}/>
      ))}
      <TaskForm tasks={tasks} setTasks={setTasks}/>
    </div>
  );
}

export default App;

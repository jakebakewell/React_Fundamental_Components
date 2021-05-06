import React, { useEffect } from 'react';

const TaskForm = (props) => {
    const {tasks, setTasks} = props;
    let task = {
        taskName: "",
        isComplete: false
    };
    const clickHandler = () => {
        setTasks(
            [...tasks, task]
        );
        localStorage.setItem('list', JSON.stringify(tasks));
    }
    const changeHandler = (e) => {
        task.taskName = e.target.value;
    }
    return(
        <div>
            <label htmlFor="taskName">Task Name:</label>
            <input type="text" name="taskName" onChange={ changeHandler }/>
            <input type="submit" value="Add Task" onClick={ clickHandler }/>
        </div>
    );
}

export default TaskForm;
import React from 'react';

const Task = (props) => {
    const {task, setTasks, index, tasks} = props;
    const clickHandler = () => {
        setTasks(() => {
            return tasks.filter(task => tasks.indexOf(task) !== index)
        });
    };
    const changeHandler = () => {
        tasks[index].isComplete = !tasks[index].isComplete;
        return setTasks([...tasks]);
    }

    return (
        <div className="container bg-secondary">
            {task.isComplete ?
                <h4 className="text-decoration-line-through">{task.taskName}</h4> : 
                <h4>{task.taskName}</h4>
            }
            
            <div>
                <label html for="checkbox">Completed?</label>
                <input type="checkbox" onChange={changeHandler} checked={task.isComplete}/>
                <button className="btn btn-danger btn-sm" onClick={clickHandler}>Delete</button>
            </div>
        </div>
    );
}

export default Task;
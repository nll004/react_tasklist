import React from "react";

const Task = ({id, task, completed, toggleEdit, remove}) => {
    const handleDelete = () => remove(id);
    const handleEdit = () => toggleEdit(id);

    return (
        <div className={`Task complete-${completed}`}>
            <h4 id={`Task-${id}`} className='Task-name'> {task} </h4>
            <button className='Task-edit' onClick={handleEdit}> Edit </button>
            <button className='Task-del' onClick={handleDelete}> X </button>
        </div>
    )
}

export default Task;

import React, {useState, useEffect} from "react";


const NewTaskForm = ({saveTask, task='', isComplete=false, id}) => {
    const [formData, setFormData] = useState({task: task});
    const [completed, setCompleted] = useState({isComplete: isComplete})

    // update states with when new props are passed to task or isComplete
    useEffect(()=>{
        setFormData({task: task});
        setCompleted({isComplete: isComplete});
    }, [task, isComplete])

    const handleChange = (e)=> {
        const {name, value} = e.target;
        setFormData(data=> ({...data, [name]: value}))
    }

    const handleClick = (e)=> {
        setCompleted({isComplete: e.target.checked})
    }

    const handleSubmit = (e)=> {
        e.preventDefault();
        const data = {...formData, ...completed};
        if (id) saveTask(id, data)
        else saveTask(data)
        // reset form inputs
        setFormData({task: ''});
        setCompleted({isComplete: false})
    }

    return (
        <form onSubmit={handleSubmit} id="NewTaskForm">
            <label htmlFor="NewTaskForm-textInput-task">Name</label>
            <input id="NewTaskForm-textInput-task"
                   type="text"
                   name="task"
                   value={formData.task}
                   placeholder="Task name"
                   required
                   onChange={handleChange}
            />
            <label htmlFor="NewTaskForm-complete-checkbox">Completed?</label>
            <input type='checkbox'
                   id='NewTaskForm-complete-checkbox'
                   name='isComplete'
                   value={completed.isComplete}
                   checked={completed.isComplete}
                   onChange={handleClick}
            />
            <button>Save</button>
        </form>
    )
}

export default NewTaskForm

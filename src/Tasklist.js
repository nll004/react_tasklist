import React, {useState} from "react";
import Task from "./Task"
import NewTaskForm from "./NewTaskForm"

const Tasklist = () => {
    const demoTasks = [{task: "Feed the cat", isComplete: true}, {task: "Wash the dishes", isComplete: false}];
    const [tasks, setTasks] = useState(demoTasks);
    const [isEditing, setIsEditing] = useState({ id: null, edit: false});

    const submitTask = (newTask)=> setTasks([...tasks, newTask]);

    const removeTask = (id) => setTasks(tasks.filter((task,ind) => id !== ind));

    const toggleEdit = (id) => {
        if(id === isEditing.id) setIsEditing({id: id, edit: !isEditing.edit})
        else setIsEditing({id: id, edit: true });
    };

    const editTask = (id, updatedInfo) => {
        tasks.splice(id, 1, updatedInfo);
        setTasks(Array.from(tasks));
        setIsEditing({id: null, edit:false});
    };

    let form = (
        <>
            <h2>New Task</h2>
            <NewTaskForm saveTask={submitTask}/>
        </> );

    if (isEditing.edit === true){
        let id = isEditing.id;
        form = (
            <>
                <h2>Edit Task</h2>
                <NewTaskForm  saveTask={editTask}
                              id={id}
                              task={tasks[id].task}
                              isComplete={tasks[id].isComplete} />
            </>
        );
    }

    return (
        <>
            <div id='TaskList'>
                <div id="task-container">
                    {tasks.map((task,ind)=>
                        <Task key={ind}
                              task={task.task}
                              id={ind}
                              completed={task.isComplete}
                              remove={removeTask}
                              toggleEdit={toggleEdit}
                        />
                    )}
                </div>
                <div id="form-container">
                    {form}
                </div>
            </div>
        </>
    )
}


export default Tasklist

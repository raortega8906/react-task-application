import {useContext} from "react";
import {TaskContext} from "../context/TaskContext";

function TaskCard({task}) {
    const {deleteTask} = useContext(TaskContext)

    return (
        <div className={'card'}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <button className={'button-card'} onClick={() => deleteTask(task.id)}>
                Eliminar tarea
            </button>
        </div>
    )
}

export default TaskCard
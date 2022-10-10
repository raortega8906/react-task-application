import {useState, useContext} from "react";
import {TaskContext} from "../context/TaskContext";

function TaskForm(){

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const {createTask} = useContext(TaskContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask(
            title,
            description
        )
        setTitle('')
        setDescription('')
    }

    return (
        <form onSubmit={handleSubmit} className={'form'}>
            <h2>Crea tu tarea</h2>
            <input placeholder={"Escribe tu tarea"} value={title} required={true} onChange={
                (e) => setTitle(e.target.value)
            }/>
            <br />
            <br />
            <textarea placeholder={"Escribe tu descripcion"} value={description} onChange={e => setDescription(e.target.value)}></textarea>
            <br />
            <br />
            <button>
                Guardar
            </button>
        </form>
    )
}

export default TaskForm
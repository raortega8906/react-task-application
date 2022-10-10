import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App(){

    return (
        <main className={'main'}>
            <TaskForm />
            <TaskList />
        </main>
    )
}

export default App


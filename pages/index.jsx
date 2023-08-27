import styles from "../styles/indexStyles.module.css";

import InputTask from "../components/InputTask/InputTask.jsx";
import Title from "../components/title/Title.jsx";
import { useEffect, useState } from "react";
import ListItems from "../components/ListItems/ListItems.jsx";


const index = () => {

    const [todotext, setTodotext] = useState("");
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState('');    

    const handleAddTODO = () => {

        let taskID = parseInt(window.localStorage.getItem("taskid"));

        if (todotext === '') {
            return setError('Debes agregar una descripción a tu tarea');
        } else {
            setError('');
        }

        taskID += 1;

        setTasks([{
            description: todotext,
            complete: false,
            id: parseInt(window.localStorage.getItem("taskid"))
        }, ...tasks]);

        window.localStorage.setItem("taskid", taskID);

        setTodotext('');
         
    }

    const handleChange = (value) => {
        setTodotext(value);
    };

    const handleTaskChange = (taskChanged) => {
        setTasks(taskChanged);
    }

    useEffect(() => {
        if (tasks.length > 0) {
            window.localStorage.setItem("tasks", JSON.stringify(tasks));
        } else {

        }
    }, [tasks]);

    useEffect(() => {

        if (window.localStorage.getItem("taskid") === null) {
            window.localStorage.setItem("taskid", 1);
        }

        if (window.localStorage.getItem("tasks") === null) {
            window.localStorage.setItem("tasks", '[]');
        } else {
            setTasks(JSON.parse(window.localStorage.getItem("tasks")));
        }

    }, []);

    const handleClear = () => {
        
        setTodotext('');

    }

    const handleComplete = () => {
        
        const tasksFiltered = tasks.filter(task => task.complete === false);
        window.localStorage.setItem("tasks", JSON.stringify(tasksFiltered));
        setTasks(tasksFiltered);

    }

  
    return (
        <>
            <Title/>
            <InputTask todoText={todotext} on={handleChange} placeholder="Write your todo here." description="Add a new todo"/>
            <div className={styles.error}>{error}</div>
            <div className={styles.buttonFlexer}>
                <button onClick={handleAddTODO} className={styles.buttonAdd}>Add TODO</button>
                <button onClick={handleClear} className={styles.buttonClear}>Clear Text</button>
                <button onClick={handleComplete} className={styles.buttonDeleteComplete}>Delete completed</button>
            </div>
            <ListItems taskChange={handleTaskChange} tasks={tasks}/>
            <footer className={styles.footer}>
                Made with &#10084; by <b>Frank Maga&ntilde;a</b>
                <div className={styles.info}>
                    To add a task to the TODO list, you need to write the task in the dialog box and press the button.<br/>
                    To delete a task you only need to click again on a completed one.<br/><br/>
                    This app uses localStorage to store your tasks, you don't need an account, but your tasks exist only in this browser and may be deleted when you clear the data of it. 
                </div>
            </footer>
        </>
    )

};

export default index;

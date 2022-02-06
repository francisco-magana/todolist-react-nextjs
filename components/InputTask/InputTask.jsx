import { useState } from "react";
import styles from "./InputTask.module.css";

const InputTask = ({placeholder, description, todoText, on}) => {

    const handleChange = (e) => {
      
        on(e.target.value);

    }

    return (
        <>
        <div className={styles.desc}>{description}</div>
        <input value={todoText} onChange={handleChange} className={styles.inputTask} type="text" placeholder={placeholder}/>
        </>
    );

}

export default InputTask;
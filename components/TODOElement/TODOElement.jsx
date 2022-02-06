import styles from "./TODOElement.module.css";

const TODOElement = ({description, on, id, completed}) => {

    const taskColor = completed ? styles.elementCompleted : styles.element;

    const handleClick = (e) => {
        on(e.target.id);
    }

    return (
        <>
            <li onClick={handleClick} id={id} className={taskColor}>{description}</li>
        </>
    );

}

export default TODOElement;
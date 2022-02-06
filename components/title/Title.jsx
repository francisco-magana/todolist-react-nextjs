import styles from "./Title.module.css";

const Title = () => {

    return (
        <>
            <h1 className={styles.text}>
                TODO APP IN <div className={styles.next}>NEXTJS</div> AND <div className={styles.react}>REACT</div>
            </h1>
        </>
    );

}

export default Title;
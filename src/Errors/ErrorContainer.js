import React from "react";
import styles from "./ErrorContainer.module.scss";

const ErrorContainer = props =>{
   
    const negateDisplay = ()=>{
        props.onErrorContainer(false,"No error")
    }
    return (
        <div className={`${styles["error-container"]} ${props.display && styles["display"]}`}>
            <div className={styles["modal"]}>
                <h3 className={styles["error-heading"]}>Form Submission Error</h3>
                <p className={styles["error-description"]}>{props.message}</p>
                <button onClick={negateDisplay}>&times;</button>
            </div>
        </div>
    )
}

export default ErrorContainer;
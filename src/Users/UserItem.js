import React from "react";
import styles from "./UserItem.module.scss";

const UserItem = props =>{

    
    const deleteSingleUserHandler= ()=>{
        props.onDeleteUser(props.id)
    }

    return (
        <li className={styles["user-item"]} onClick={deleteSingleUserHandler}>
            <p className={styles["user-name"]}>{props.name}</p>
            <p className={styles["user-age"]}>{`${props.age} ${props.age>1?"years":"year"}`}</p>
        </li>
    );
}

export default UserItem;
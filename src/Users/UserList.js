import React from "react";
import styles from "./UserList.module.scss";

import UserItem from "./UserItem";


const UserList = props =>{
    
    return (
        <ul className={styles["user-list"]}>
            {props.users.map(user=> <UserItem onDeleteUser={props.onDeleteUser} id={user.id} key={user.id} name={user.name} age={user.age}/>)}
        </ul>
    )
}

export default UserList;
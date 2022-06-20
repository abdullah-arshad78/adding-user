
import React, {useState} from "react";
import styles from "./InputContainer.module.scss";
import Button from "../UI/Button";
import UserForm from "./UserForm";

const InputContainer = props => {
    const [showForm, setShowForm] = useState(false);
    const changeShowForm = ()=>{
        setShowForm(true);
    }

    const hideFormHandler = ()=>{
        setShowForm(false)
    }
    return (
        <div className={`${styles["input-container"]} ${!showForm && styles["button-space"]}`}>
            {showForm && <h2 className={styles["input-container__heading"]}>Add A New User</h2>}
            {showForm && <UserForm  onAddUser={props.onAddUser} onErrorHandler = {props.onErrorContainer} onHideForm={hideFormHandler} users={props.users}/>}
            {!showForm &&<Button className="centered" type="button" onClick = {changeShowForm} >Add User</Button>}
        </div>
    )
}
export default InputContainer;
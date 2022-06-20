import React, {useState} from "react";
import styles from "./UserForm.module.scss";
import Button from "../UI/Button";

const UserForm = props =>{
    const [enteredName, setEnteredName] = useState("");
    const [enteredAge, setEnteredAge]= useState("");
    const [validAge,setValidAge] = useState(true);
    const [validName,setValidName] = useState(true);
   const errorMessages ={
       inputError: "Please fill both inputs correctly",
       nameError:"Please add a valid name",
       ageError:"Please add a valid age (between 0 and 110)",
       existingUsers: "User already exists"
   }
    const validNameRegex = /^[a-z ,.'-]+$/i;
    const setNameHandler = (e)=>{
       
        setEnteredName(e.target.value);
        setValidName(true)
    }
    const setAgeHandler = (e)=>{
        setEnteredAge(e.target.value);
        setValidAge(true)
        
    }

    const checkExistingUsers = props.users.some(user=> user.name === enteredName && user.age == enteredAge)

    const submitFormHAndler = e => {
        e.preventDefault();
        if(checkExistingUsers){
            setValidAge(false);
            setValidName(false);
            setEnteredAge("");
            setEnteredName("")
            props.onErrorHandler(true,errorMessages.existingUsers);
            return;
        }
        if (!enteredAge.trim() && !validNameRegex.test(enteredName)){
            setValidAge(false);
            setValidName(false);
            setEnteredAge("");
            setEnteredName("")
            props.onErrorHandler(true,errorMessages.inputError)
            return;
        } else if(validNameRegex.test(enteredName)){
            setValidName(true);
            if(enteredAge<=0 || enteredAge>110){
                setValidAge(false);
                props.onErrorHandler(true,errorMessages.ageError)
                setEnteredAge("");
           
                return ;
        }
        } else if(enteredAge>0 && enteredAge<110){
           
            if(!validNameRegex.test(enteredName)){
                setValidName(false);
                setEnteredAge(true);
                props.onErrorHandler(true,errorMessages.nameError)
               
            setEnteredName("")
                return;
            }
        }
        const userObject = {
            id: Math.random().toString(),
            name:enteredName,
            age:+enteredAge
        }
        props.onAddUser(userObject)
        setEnteredAge("");
        setEnteredName("");
        props.onHideForm()
    }
   
   
    
        return (
        <form className={styles["user-form"]} onSubmit={submitFormHAndler}>
            <div className={`${styles["form-controls"]} ${!validName &&styles["invalid"]}`}>
                <label for="name">Name</label>
                <input value={enteredName} id="name" type="text" placeholder="Full Name" onChange={setNameHandler}></input>
            </div>
            <div className={`${styles["form-controls"]} ${!validAge && styles["invalid"]}`}>
                <label for="age">Age</label>
                <input value={enteredAge} id="age" type="number" placeholder="Age" onChange={setAgeHandler}></input>
            </div>
            <Button type="submit">Add User</Button>

        </form>
    );
}
export default UserForm;
import React, {useState }from "react";
import styles from './App.module.scss';

import UserList from "./Users/UserList";
import EmptyUsers from "./UI/EmptyUsers";
import InputContainer from "./UserInputs/InputContainer";
import ErrorContainer from "./Errors/ErrorContainer";

function App() {

const [userArr, setUserArr]= useState([]);


  const [displayError, setDisplayError]= useState(false);
  const [errorContainerMessage, setErrorContainerMessage]= useState("");

  const displayErrorHandler = (value,message)=>{
    setDisplayError(value);
    setErrorContainerMessage(message)
  }

  // const userArr = [
  //   {id:"1", name:"Abdullah", age:21},
  //   {id:"2",name:"John", age:30},
  //   {id:"4", name:"Kingsley", age:"26"}
  // ];

  const deleteUserHandler = (id)=>{
    setUserArr(prevState=>{
      
      const modifiedArr = prevState.filter(user=> user.id!==id);
      return modifiedArr;
    })
  }

  const addUserHandler = userObject =>{

    setUserArr(prevState=>{
      const updatedArr = [...prevState]
       updatedArr.unshift(userObject);
       return updatedArr
    })
  }
 
  return (
    <div className={styles["App"]}>
      <InputContainer  onAddUser = {addUserHandler} onErrorContainer = {displayErrorHandler} users={userArr}/>
      {userArr.length===0 && <EmptyUsers/>}
     {userArr.length!==0 && <UserList onDeleteUser={deleteUserHandler} users={userArr}/>}
     <ErrorContainer message = {errorContainerMessage} display={displayError} onErrorContainer = {displayErrorHandler}/>
    </div>
  );
}

export default App;


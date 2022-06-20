import React from "react";
import "./EmptyUsers.scss"
import Card from "./Card";
const EmptyUsers = ()=>{
    return(
        <Card className="empty-users">
            <h2 className="empty-users__heading">No User Found</h2>
            <p className="empty-users__text">Please add users</p>
        </Card>
    )
}

export default EmptyUsers;
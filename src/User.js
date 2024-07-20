import React, {useContext} from "react";
import { AppContext } from "./ContextTutorial";


function User () {
    const {username}= useContext(AppContext)
    return (
        <h1>User : {username}</h1>
    );
}

export default User;
import { React, useState } from 'react'
import { Redirect, Route } from "react-router-dom";
import UserForm from './UserForm'

let ChatList = ({ childRef }) => {

    // onSubmit = () => {
    //     if(userFound){
    //         this.props.history.push('/posts/');
    //     }
    //  }

const submitedUserForm=()=>{
    alert(`aaa ${FormData.FirstName}`)
}

    return (
        <div>
            <span class="badge badge-pill badge-warning">Chat List</span>
            {/* <p>Name:{props.name}</p> */}

            {/* <button onClick={this.onSubmit}>Login</button> */}
            <UserForm ref={childRef} submitedUserForm={submitedUserForm}/>
        </div>
    )
};

export default ChatList

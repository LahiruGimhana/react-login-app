import { React, useState } from 'react'
import { Redirect, Route } from "react-router-dom";
import UserForm from './UserForm';
import ChatInterface from './ChatInterface/ChatInterface';

// let ChatList = ({childRef}) => {
let ChatList = ({childRef, ...props}) => {

    // onSubmit = () => {
    //     if(userFound){
    //         this.props.history.push('/posts/');
    //     }
    //  }

const submitedUserForm = (formData)=>{
    // alert(`aaa ${formData.FirstName}`)
    props.submitedUserFormmm(formData);
}

const editedUserForm=(formData)=>{
    props.editedUserFormm(formData);
}

    return (
        <div>
            {/* <span class="badge badge-pill badge-warning">Chat List</span> */}
            {/* <p>Name:{props.name}</p> */}

            {/* <button onClick={this.onSubmit}>Login</button> */}
            <UserForm ref={childRef} submitedUserFormm={submitedUserForm} />
            <ChatInterface />
        </div>
    )
};

export default ChatList

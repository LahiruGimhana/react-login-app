import React from 'react'
import { Redirect, Route } from "react-router-dom";
import UserForm from './UserForm'

function ChatList(props) {

    const addNewUser=(x)=>{
        return x ? <Redirect  to={'./UserForm'} />:null;
    }

    // onSubmit = () => {
    //     if(userFound){
    //         this.props.history.push('/posts/');
    //     }
    //  }

    return (
        <div>
            <span class="badge badge-pill badge-warning">Chat List</span>
                {/* <p>Name:{props.name}</p> */}
                <button className="btn btn-primary m-2"  onClick={(x) => {
                        addNewUser();
                    }}>Add new User</button>
                    {/* <button onClick={this.onSubmit}>Login</button> */}
            <UserForm/>
        </div>
    )
}

export default ChatList

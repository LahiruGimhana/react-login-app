import React, { useLayoutEffect } from 'react'
import { useHistory } from 'react-router-dom';
import './Console.css';
import ChatList from './sub/ChatList';
import UserList from './sub/UserList';
import NameList from './sub/NameList';


const Console = (props) => {

    let history = useHistory();

    let session = sessionStorage.getItem('userLoginSessionData');

    const logout = () => {
        // setdetails({ name: "", email: "" });
        sessionStorage.removeItem('userLoginSessionData');
        console.log("Logout");
        history.push('/login');
    }

    useLayoutEffect(() => {
        if (!getData()) {
            history.push('/login');
        }
    }, []);


    const getData = () => {
        let data = sessionStorage.getItem('userLoginSessionData');
        return data ? JSON.parse(data).email : null;
    };

    return (
        <div className="container">
            <h3 >Console login</h3>
            <h4 >Welcome, <span>{session ? session.name : ""}</span></h4>

            <div className="row">
                <div className="col-3 border border-primary m-1" >
                    {/* <UserList/> */}
                    <NameList />
                </div>
                <div className="col border border-primary m-1">
                    <ChatList />
                </div>
            </div>
            <button className="btn btn-warning" onClick={() => {
                logout();


            }}>Logout</button>
        </div>
    )
}

export default Console

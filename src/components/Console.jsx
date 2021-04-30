import React, { useLayoutEffect } from 'react'
import { useHistory } from 'react-router-dom';
import './Console.css';
import ChatList from './sub/ChatList';
import UserList from './sub/UserList';
import NameList from './sub/NameList';


const Console = (props) => {

    let history = useHistory();

    let session=sessionStorage.getItem('userLoginSessionData');
    let s_name=JSON.parse(session).name;
    // console.log(s_name);

    const logout = () => {
        // setdetails({ name: "", email: "" });
        sessionStorage.removeItem('userLoginSessionData');
        console.log("Logout");
        history.push('/login');
      }

      useLayoutEffect(()=>{
        if(!getData()){
            history.push('/login');
        }
    },[]);

    
    const getData=()=> {
        let data=sessionStorage.getItem('userLoginSessionData');
        return data? JSON.parse(data).email : null;
      };


   

    return (
        <div className="container">
            <div class="header">
            <h3 >Console login</h3>
            <h4 >Welcome, <span>{s_name}</span></h4>
        </div>
        <div class="wrapper clearfix">
            <div class="nav">
                <div className="col border border-primary m-1" >
                    <div className="col" id="add" style={{float:"left", textAlign:"left", width:'10%', margin:"0%", padding:"0%"}}>
                        {/* <buuton className="btn btn-primary" onClick={addUserHandeler}>add user</buuton> */}
                    </div>
                    <div className="col" id="user" style={{float:"right", textAlign:"left", width:'90%', margin:"0%", padding:"0%"}}>  
                        <NameList/>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="col border border-primary m-1">
                    <ChatList/>
                </div>
            
                <div className="col">
                <button className="btn btn-warning" onClick={() => {
                        logout();
                    }}>Logout</button>
                </div>
            </div>
        </div>
        <div class="footer">
            <p>copyright &copy; tutorialrepublic.com</p>
        </div>

        </div>
    )
}

export default Console

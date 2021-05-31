//  import React from 'react';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './login.css';
import LoginData from '../config/json/loginData';

import {register , registerCallBack} from '../socket/index';
import { useDispatch, useSelector } from 'react-redux';


function LoginForm() {
    let dispatch = useDispatch();


    let history = useHistory();
    const [details, setDetails] = useState({ name: "", email: "", password: "" });
    const [error, setError] = useState("")

    useEffect(() => {
        if (getData()) {
            history.push('/console');
        }
    }, []);

    const getData = () => {
        let data = sessionStorage.getItem('userLoginSessionData');
        return data ? JSON.parse(data).email : null;

        //meke theruma
        // if(data ekak tiye nam){
        //   data=JSON.parse(data);
        //   return data.email;
        // } else{
        //   return null;
        // }
    };





    const login = (details) => {
        // console.log(`${details} use input data`);
        let newLoginData = LoginData.map((item) => ({ name: item.name, email: item.email, password:item.password }));
        // console.log('aaaaaaaaaaaaa');
        // console.log(newLoginData[0]);
        // console.log('aaaaaaaaaaaaa');

        // console.log(newLoginData);
        newLoginData.forEach(element => {
            console.log(element);
            if (details.email == element.email && details.password == element.password) {
                console.log("Loged in success")
                //add login data to sesssion storage
                // localStorage.setItem('myData', JSON.stringify(details));
                sessionStorage.setItem('userLoginSessionData', JSON.stringify(details));

                //call socket 
                register(element.name); 

                //call registerCallBack
                const checkMsg=(message)=>{
                    console.log("this is a call back function");
                    console.log(message);
                }
    
                registerCallBack(checkMsg);
                
                history.push('/console');
    
            } else {
                setError("error in the code");
                console.log("password or email not match");
                //   setError("details not match");
            }
        });

        // if (details.email == LoginData.email && details.password == LoginData.password) {
        //     console.log("Loged in")
        //     //add login data to sesssion storage
        //     // localStorage.setItem('myData', JSON.stringify(details));
        //     sessionStorage.setItem('userLoginSessionData', JSON.stringify(details));
        //     history.push('/console');

        // } else {
        //     setError("error in the code");
        //     console.log("password or email not match");
        //     //   setError("details not match");
        // }

    };


    const submitHandler = (e) => {
        e.preventDefault();
        login(details);
        // <Redirect to='./Home'/>
        {/* <Redirect to='./console'/> */ }
        // <Route exact path='/' component={Home} />

    }

    return (
        <form onSubmit={submitHandler}>
            <div className="container" id="log" style={{ border: "blue solid" }}>
                <h2>Login</h2>
                {(error != "") ? (<div className="error" >{error}</div>) : " "}

                <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name" onChange={e => setDetails({ ...details, name: e.target.value })} value={details.name} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                </div>
                <input type="submit" value="LOGIN" />
            </div>
        </form>
    )
}

export default LoginForm;

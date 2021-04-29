import './App.css';
import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import Nav from './components/nav';
import Home from './components/Home';
import console from './components/Console';
import Register from './components/Register';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {



  return (
    <BrowserRouter>
      <div className="App">
        <Nav />

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>

              {/* {!LoginData.email ? (<Route exact path="/login"> */}
              {/* {!getData() ? (<Route exact path="/login"> */}

              <Route exact path="/login">
                <LoginForm />
              </Route>
              {/* ) :  */}
                {/* ( */}
              <Route exact path="/console">
                <console/>
              </Route>
              {/* ) */}
              {/* } */}

              <Register exact path="/register"/>
              <Route path="*">
                <Redirect to="/login" />
              </Route>
             
            </Switch>
          </div>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;

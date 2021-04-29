import './App.css';
import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import Nav from './components/nav';
import Home from './components/Home';
import Console from './components/Console';
import Register from './components/Register';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {

  console.log("================");

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
                <Console />
              </Route>
              {/* ) */}
              {/* } */}

              <Register exact path="/register" />
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

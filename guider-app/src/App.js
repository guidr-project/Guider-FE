import React from 'react';
import { Route, Redirect} from "react-router-dom";

import SignUp from './components/loginInfo/SignUp'
import { HomePage } from './components/ProfileCards/HomePage'
import Links from './components/loginInfo/Links'
import Login from './components/loginInfo/Login'

import './App.css';



function App() {
  return (
    <div className="App">

        <Route exact path='/' component={Links} />

        <Route exact path='/login' component={Login} />

        <Route exact path='/signup' component={SignUp} />

        <Route exact path='/homepage' component={HomePage} />

    </div>
  );
}

export default App;

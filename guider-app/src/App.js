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

      <div>
        <Route exact path='/' component={Links} />
        {/* <Route exact path='/' component={SignUp} /> */}
        <Route exact path='/users/login' component={Login} />
        <Route exact path='/users/signUp' component={SignUp} />

      </div>

      <div>
        <Route exact path='/homepage' component={HomePage} />
        <Route exact path='/homepage/alljourneys' component={HomePage} />
        <Route exact path='/homepage/profile' component={HomePage} />
        <Route exact path='/homepage/journey' component={HomePage} />
      </div>
    </div>
  );
}

export default App;
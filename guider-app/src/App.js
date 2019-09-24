import React from 'react';
import { Route, Redirect} from "react-router-dom";

import SignUp from './components/loginInfo/SignUp'
import { Profile } from './components/ProfileCards/Profile'
import Links from './components/loginInfo/Links'
import TripCard from './components/ProfileCards/TripCard'
import Login from './components/loginInfo/Login'
import Header from "./components/ProfileCards/Header.js";
import TabNav from "./components/ProfileCards/TabNav.js";

import './App.css';



function App() {
  return (
    <div className="App">


        <Route exact path='/' component={Header} />

        <Route exact path='/' component={TabNav} />

        <Route exact path='/' component={Links} />

        <Route exact path='/login' component={Login} />

        <Route exact path='/signup' component={SignUp} />

        <Route exact path='/profile' component={Profile} />

        <Route exact path='/form' component={TripCard} />

    </div>
  );
}

export default App;

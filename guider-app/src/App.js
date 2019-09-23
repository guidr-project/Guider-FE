import React from 'react';
import { Route, Redirect} from "react-router-dom";

import SignUp from './components/loginInfo/SignUp'
import { Profile } from './components/ProfileCards/Profile'
import Links from './components/loginInfo/Links'

import './App.css';
import TripCard from "./components/ProfileCards/TripCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Route exact path='/' component={Links} />

        <Route exact path='/signup' component={SignUp} />

        <Route exact path='/profile' component={Profile} />

        Hello There
      </header>
      <TripCard/>
    </div>
  );
}

export default App;

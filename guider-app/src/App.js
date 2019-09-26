import React, { useState, useEffect } from "react";
import { axiosAuth } from './components/utils/axiosAuth'
// import axios from 'axios'
import { Route, Redirect} from "react-router-dom";

import SignUp from './components/loginInfo/SignUp'
import { HomePage } from './components/ProfileCards/HomePage'
import Links from './components/loginInfo/Links'
import Login from './components/loginInfo/Login'

import {JourneyContext} from './context/GuidrContext'

import './App.css';



function App() {

  const [journeys, setJourneys] = useState([])


  const getJourneys = () => {
    axiosAuth()
      .get("https://guidr-project.herokuapp.com/trips")
      .then(response => {
        // console.log(response.data)
        setJourneys(response.data)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getJourneys()
  }, [])

  // console.log(journeys)

  return (
    <div className="App">

      <JourneyContext.Provider value={{journeys}}>

          <Route exact path='/' component={Links} />
          <Route exact path='/users/login' component={Login} />
          <Route exact path='/users/signUp' component={SignUp} />        

        
          <Route exact path='/homepage' render={props => {
            const token = localStorage.getItem("token")
            if(!token){
              return <Redirect to='/users/login' />;
            } else {
              return <HomePage {...props} getJourneys={getJourneys} />
            }
          }} />


          <Route exact path='/homepage/alljourneys' render={props => {
            const token = localStorage.getItem("token")
            if(!token){
              return <Redirect to='/users/login' />;
            } else {
              return <HomePage {...props} getJourneys={getJourneys} />
            }
          }} />


          <Route exact path='/homepage/profile' render={props => {
            const token = localStorage.getItem("token")
            if(!token){
              return <Redirect to='/users/login' />;
            } else {
              return <HomePage {...props} getJourneys={getJourneys} />
            }
          }} />


          <Route exact path='/homepage/journey' render={props => {
            const token = localStorage.getItem("token")
            if(!token){
              return <Redirect to='/users/login' />;
            } else {
              return <HomePage {...props} getJourneys={getJourneys} />
            }
          }} />
        
      </JourneyContext.Provider>
    </div>
  );
}

export default App;
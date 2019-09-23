import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './components/loginInfo/Login'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          Hello There
          <Route exact path="/login" component={Login} />
        </header>
      </div>
    </Router>
  );
}

export default App;

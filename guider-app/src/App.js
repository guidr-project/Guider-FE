import React from 'react';
import './App.css';
import Header from "./components/ProfileCards/Header.js";
import TabNav from "./components/ProfileCards/TabNav.js";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <TabNav />
      </Router>
    </div>
  );
}

export default App;

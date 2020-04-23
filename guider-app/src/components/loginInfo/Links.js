import React from 'react';
import { Link } from "react-router-dom";
import Login from './Login.js'
import './links.css'

function Links() {
  return (
    <div className='background'>
    <h2 className="title">GUIDR</h2>
    <Login />
    </div>
  );
}

export default Links;
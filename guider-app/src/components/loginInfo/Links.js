import React from 'react';
import { Link } from "react-router-dom";

function Links() {
  return (
      <ul class="navbar">
        <Link className="navlink" to='/users/signUp'>Sign Up</Link>
        <Link className="navlink" to='/users/login'>Login</Link>
      </ul>
  );
}

export default Links;
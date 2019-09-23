import React from 'react';
import { Link } from "react-router-dom";

function Links() {
  return (
    <div >
      <Link className="navlink" to='/signup'>Sign Up</Link>
      <Link className="navlink" to='/login'>Login</Link>
    </div>
  );
}

export default Links;
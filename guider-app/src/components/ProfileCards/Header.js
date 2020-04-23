import React from "react";
import TabNav from './TabNav'
import {withRouter} from 'react-router-dom'
import "semantic-ui-css/semantic.min.css";

const Header = (props) => {

  const logOut = () => {
  localStorage.clear()
  props.history.push("/")
  // console.log('props', props)
}

  return (
    <div className='NavBar'>
      <h1 className='guidr'>GUIDR</h1>

      <TabNav />
      <button onClick={logOut}>Log Out</button>
    </div>
  );
}


export default withRouter(Header)
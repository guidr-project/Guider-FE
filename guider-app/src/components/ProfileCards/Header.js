import React from "react";
import TabNav from './TabNav'
import "semantic-ui-css/semantic.min.css";

export default function Header() {
  return (
    <div className='NavBar'>
      <h1 className='guidr'>GUIDR</h1>

      <TabNav />

    </div>
  );
}
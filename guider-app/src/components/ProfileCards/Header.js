import React from "react";
// import { NavLink } from "react-router-dom";
import TabNav from './TabNav'
import "semantic-ui-css/semantic.min.css";

export default function Header() {
  return (
    <div>
      <h1>GUIDR</h1>

      <TabNav />

    </div>
  );
}
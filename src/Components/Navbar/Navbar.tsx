import React from "react";
import classes from './Navbar.module.scss'
import { Link } from "react-router-dom";

function Navbar() {
  return <div className={classes.parent}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="dashboard">Dashboard</Link>
  </div>;
}

export default Navbar;

import React from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className={classes.navbar}>
      <div className={classes.navbar__items}>
        <Link to="/profile">Profile</Link>
        <Link to="/dialogs">Dialogs</Link>
        <a href="/messages">Messages</a>
        <a href="/music">Music</a>
        <a href="/settings">Settings</a>
      </div>
    </nav>
  );
}

export default Navbar;

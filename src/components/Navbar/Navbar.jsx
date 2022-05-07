import React from "react";
import classes from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={classes.navbar}>
      <div className={classes.navbar__items}>
        <a href="#">Profile</a>
        <a href="#">News</a>
        <a href="#">Messages</a>
        <a href="#">Music</a>
        <a href="#">Settings</a>
      </div>
    </nav>
  );
}

export default Navbar;

import React from "react";
import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <h2 className={classes.header__name}>MagicSoft group</h2>
    </header>
  );
}

export default Header;

import React from "react";
import { NavLink } from "react-router-dom";
import NavItems from "./NavItems/NavItems";
import NavToggler from "./NavToggler/NavToggler";
import classes from "./Nav.css";

const nav = props => (
  <div className={classes["nav-container"]}>
    <div className={classes["nav-inner-container"]}>
      <h3 className={classes["nav-brand"]}>
        <NavLink to="/">BrandName</NavLink>
      </h3>
      <nav className={classes["nav-desktop"]}>
        <NavItems />
      </nav>
      <NavToggler clicked={props.toggleClicked} />
    </div>
  </div>
);

export default nav;

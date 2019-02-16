import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavItem.css";

const navItem = props => {
  let item = (
    <li className={classes["navitem"]}>
      <NavLink to={props.link}>{props.children}</NavLink>
    </li>
  );

  if (props.logoStyle) {
    item = (
      <h3 className={classes["navitem-logo"]} style={props.logoStyle}>
        <NavLink to={props.link}>{props.children}</NavLink>
      </h3>
    );
  }

  return item;
};

export default navItem;

import React from "react";
import Ax from "../../../hoc/Ax/Ax";
import NavItem from "./NavItem/NavItem";
import classes from "./NavItems.css";

const navItems = props => (
  <Ax>
    <ul className={classes["navitems-ul-container"]}>
      <NavItem link="/myaccount">My Account</NavItem>
      <NavItem link="/help">Help</NavItem>
      <NavItem link="/pricing">Pricing</NavItem>
      <NavItem link="/download">Download</NavItem>
    </ul>
  </Ax>
);

export default navItems;

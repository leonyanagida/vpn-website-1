import React from "react";
import NavItems from "../NavItems/NavItems";
import classes from "./NavDrawer.css";

const navDrawer = props => {
  let drawerClasses = [classes["navdrawer-close"], classes["navdrawer-item"]];
  let backDrop = [];

  if (props.open) {
    drawerClasses = [classes["navdrawer-open"], classes["navdrawer-item"]];
    backDrop = [classes["navdrawer-backdrop"]];
  }

  return (
    <div className={backDrop.join(" ")} onClick={props.closed}>
      <div className={drawerClasses.join(" ")} onClick={props.closed}>
        <NavItems />
      </div>
    </div>
  );
};

export default navDrawer;

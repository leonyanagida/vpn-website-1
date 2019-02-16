import React from "react";
import classes from "./NavToggler.css";

const navToggler = props => {
  return (
    <div className={classes["navtoggler-container"]} onClick={props.clicked}>
      <i className="fas fa-bars fa-2x" />
    </div>
  );
};

export default navToggler;

import React from "react";
import classes from "./DisplayIp.css";

const DisplayIp = props => (
  // Display the passed props "ip" from UserIP container
  <div className={classes["displayip-container"]}>
    <div className={classes["displayip-ip"]}>{props.ip}</div>
  </div>
);

export default DisplayIp;

import React from "react";
import Spacer from "../UI/Spacer/Spacer";
import classes from "./Footer.css";

const footer = props => (
  <div className={classes["footer-container"]}>
    <Spacer customHeight={{ height: "5em" }} />
    <div className={classes["footer-inner-container"]}>
      <div className={classes["footer-ul-container"]}>
        <p className={classes["footer-ul-header"]}>BrandName VPN</p>
        <ul className={classes["footer-ul"]}>
          <li>Download</li>
          <li>Pricing</li>
          <li>Help</li>
          <li>Account</li>
          <li>Customer Support</li>
        </ul>
      </div>

      <div className={classes["footer-ul-container"]}>
        <p className={classes["footer-ul-header"]}>Learn More</p>
        <ul className={classes["footer-ul"]}>
          <li>VPN for Windows</li>
          <li>VPN for Mac</li>
          <li>VPN for Linux</li>
          <li>VPN for Mobile</li>
        </ul>
      </div>

      <div className={classes["footer-ul-container"]}>
        <p className={classes["footer-ul-header"]}>Help</p>
        <ul className={classes["footer-ul"]}>
          <li>Help</li>
          <li>Live Chat</li>
          <li>Submit a Bug</li>
          <li>Community</li>
        </ul>
      </div>

      <div className={classes["footer-ul-container"]}>
        <p className={classes["footer-ul-header"]}>About Us</p>
        <ul className={classes["footer-ul"]}>
          <li>About Us</li>
          <li>Privacy & Legal</li>
          <li>Terms of Use</li>
          <li>Disclaimers</li>
        </ul>
      </div>
    </div>
    <Spacer customHeight={{ height: "7em" }} />
    <p className={classes["footer-leon"]}>
      <a href="leonyanagida.com">Created by Leon Yanagida</a>
    </p>
    <Spacer customHeight={{ height: "1em" }} />
  </div>
);

export default footer;

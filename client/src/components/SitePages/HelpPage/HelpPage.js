import React from "react";
import Spacer from "../../UI/Spacer/Spacer";
import classes from "./HelpPage.css";

const helpPage = props => (
  <div className={classes["helppage-container"]}>
    <Spacer customHeight={{ height: "5em" }} />
    <div className={classes["helppage-inner-container"]}>
      <div>
        <h1 className={classes["helppage-header"]}>
          Hello, we are here to help
        </h1>
        <h3 className={classes["helppage-header-text"]}>
          Search or ask our customer support agents for help
        </h3>
        <form className={classes["helppage-form"]}>
          <input
            type="text"
            className={classes["helppage-input"]}
            placeholder="Search for answers here"
          />
        </form>
      </div>

      <Spacer customHeight={{ height: "2em" }} />

      <div className={classes["helppage-ul-flex-container"]}>
        <Spacer customHeight={{ height: "4em" }} />
        <ul className={classes["helppage-flex-container"]}>
          <a href="#">
            <li className={classes["helppage-flex-item"]}>
              <div className={classes["helppage-flex-item-inner"]}>
                <i className="fas fa-book fa-2x" />
                <h3>Getting Started</h3>
                <p>We can help you get started with our VPN service</p>
              </div>
            </li>
          </a>

          <a href="#">
            <li className={classes["helppage-flex-item"]}>
              <div className={classes["helppage-flex-item-inner"]}>
                <i className="far fa-credit-card fa-2x" />
                <h3>Billing</h3>
                <p>
                  Billing change, renewal, or cancelation questions can be
                  answered here
                </p>
              </div>
            </li>
          </a>

          <a href="#">
            <li className={classes["helppage-flex-item"]}>
              <div className={classes["helppage-flex-item-inner"]}>
                <i className="fas fa-headset fa-2x" />
                <h3>Customer Support</h3>
                <p>We have live agents ready to chat 24/7!</p>
              </div>
            </li>
          </a>
        </ul>
        <Spacer customHeight={{ height: "7em" }} />
      </div>

      <Spacer customHeight={{ height: "8em" }} />

      <div className={classes["helppage-ul-container"]}>
        <h1 className={classes["helppage-ul-header"]}>
          Top Searched Questions
        </h1>
        <ul className={classes["helppage-ul"]}>
          <li className={classes["helppage-ul-li"]}>
            <a href="#">How does Facebook track me?</a>
          </li>
          <li className={classes["helppage-ul-li"]}>
            <a href="#">Setting up our VPN</a>
          </li>
          <li className={classes["helppage-ul-li"]}>
            <a href="#">Common Errors and Issues</a>
          </li>
          <li className={classes["helppage-ul-li"]}>
            <a href="#">Renewing Licence Keys</a>
          </li>
          <li className={classes["helppage-ul-li"]}>
            <a href="#">Change my billing</a>
          </li>
          <li className={classes["helppage-ul-li"]}>
            <a href="#"> VPN Configuration Settings</a>
          </li>
        </ul>
      </div>
    </div>
    <Spacer customHeight={{ height: "11em" }} />
  </div>
);

export default helpPage;

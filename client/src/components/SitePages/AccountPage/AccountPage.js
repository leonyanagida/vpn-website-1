import React, { Component } from "react";
import Button from "../../UI/Button/Button";
import Spacer from "../../UI/Spacer/Spacer";
import classes from "./AccountPage.css";

class AccountPage extends Component {
  state = {
    isTrue: false
  };

  buttonHandler = event => {
    // Prevent the default page refresh from btn click
    event.preventDefault();
  };

  clickHandler = event => {
    event.preventDefault();
    // Set the new state to the opposite of the previous state
    this.setState(prevState => {
      return { isTrue: !prevState.isTrue };
    });
  };

  render() {
    // The login page is shown by default
    let account = (
      <div>
        <h1 className={classes["accountpage-register"]}>Login</h1>
        <div className={classes["accountpage-form-container"]}>
          <form className={classes["accountpage-form"]}>
            Email:
            <input type="email" placeholder="Email" />
            Password:
            <input type="password" placeholder="Create a Password" />
            <br />
            <Button
              customStyles={{
                borderRadius: "4px",
                fontSize: "1em",
                padding: "12px",
                width: "100%"
              }}
              clicked={e => this.buttonHandler(e)}
            >
              Submit
            </Button>
          </form>
        </div>

        <Spacer customHeight={{ height: "2em" }} />
        <div className={classes["accountpage-switch-container"]}>
          <div className={classes["accountpage-switch"]}>
            <p className={classes["accountpage-switch-text"]}>
              Need an account?
            </p>
            <div onClick={e => this.clickHandler(e)}>
              <strong>
                <span className={classes["accountpage-switcher"]}>
                  Create an account here!
                </span>
              </strong>
            </div>
          </div>
        </div>
      </div>
    );

    if (this.state.isTrue) {
      account = (
        <div>
          <h1 className={classes["accountpage-register"]}>Create an Acount</h1>
          <div className={classes["accountpage-form-container"]}>
            <form className={classes["accountpage-form"]}>
              Full Name:
              <input type="text" placeholder="Name" />
              Email:
              <input type="email" placeholder="Email" />
              Password:
              <input type="password" placeholder="Create a Password" />
              Confirm Password
              <input type="password" placeholder="Confirm your Password" />
              <br />
              <Button
                customStyles={{
                  borderRadius: "4px",
                  fontSize: "1em",
                  padding: "12px",
                  width: "100%"
                }}
                clicked={e => this.buttonHandler(e)}
              >
                Submit
              </Button>
            </form>
          </div>

          <Spacer customHeight={{ height: "2em" }} />
          <div className={classes["accountpage-switch-container"]}>
            <div className={classes["accountpage-switch"]}>
              <p className={classes["accountpage-switch-text"]}>
                Already have an account?
              </p>
              <div onClick={e => this.clickHandler(e)}>
                <strong>
                  <span className={classes["accountpage-switcher"]}>
                    Login Here
                  </span>
                </strong>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className={classes["accountpage-container"]}>
        <Spacer customHeight={{ height: "4em" }} />
        <div className={classes["accountpage-inner-container"]}>{account}</div>
        <Spacer customHeight={{ height: "4em" }} />
      </div>
    );
  }
}

export default AccountPage;

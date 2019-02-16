import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import UserGoogleMaps from "./UserGoogleMaps/UserGoogleMaps";
import Spinner from "../../components/UI/Spinner/Spinner";
import DisplayIp from "../HomePage/HomePageSections/DisplayIp/DisplayIp";
import Button from "../../components/UI/Button/Button";
import Spacer from "../../components/UI/Spacer/Spacer";
import classes from "./UserIp.css";

// NOTE:
// There is suppose to be a backend server connected to this project,
// however, I decided not to commit it and only to only upload the front-end
// This project is for personal and future references
class UserIp extends Component {
  state = {
    // ip: houses the user's IP
    // isLoading: true when user visits the site initially
    // error: returns an error on 2 cases:
    //  - case1: Failed to fetch data
    //  - case2: User calls API too much (Middleware)
    ip: null,
    country: null,
    location: null,
    coordinates: [], // [lat, lng]
    isLoading: true,
    error: null
  };

  componentDidMount() {
    // Call the handleGetIp to fetch API data
    this.handleGetIP();
  }

  // Get the IP address from back end sever
  // NOTE: I will not upload backend server code
  // NOTE: However, dummy data will be inserted in the components
  handleGetIP = async () => {
    // Set the entire state to default
    this.setState({
      ip: null,
      error: null,
      country: null,
      location: null,
      isLoading: true,
      coordinates: [] // [lat, lng]
    });
    // Fetch the API from the server side
    await axios
      .get("/ip", { crossDomain: true })
      .then(ipData => {
        // Updated the state with new data
        this.setState({
          ip: ipData.data.ip,
          location: ipData.data.location,
          country: ipData.data.country,
          coordinates: ipData.data.coor,
          isLoading: false
        });
      })
      .catch(err => {
        // Set the error state and set isLoading to false
        return this.setState({ error: err, isLoading: false });
      });
  };

  render() {
    // Loading spinner as we fetch data from the API
    let ip = <Spinner />;
    let mapIp = <Spinner />;
    // Once the data is fetched, update the ip and mapIp
    if (!this.state.isLoading) {
      ip = <DisplayIp ip={this.state.ip} />;
      mapIp = (
        <UserGoogleMaps latLng={this.state.coordinates} zoomHeight={11} />
      );
    }

    return (
      <div className={classes["userip-container"]}>
        <Spacer customHeight={{ height: "2em" }} />
        <div className={classes["userip-inner-container"]}>
          <div className={classes["userip-box-container"]}>
            <h1 className={classes["userip-headline"]}>
              What is My IP Address?
            </h1>
            <p className={classes["userip-text-headline"]}>
              Did you know hackers can use your IP address to track you?
              <br />
              Find ways to protect yourself from exposing your IP Address.
            </p>
            <Spacer customHeight={{ height: "1.7em" }} />
            <div className={classes["userip-box-inner-container"]}>
              <div className={classes["userip-box-left"]}>
                <ul className={[classes["userip-box-ul"]]}>
                  <li className={classes["userip-box-ul-li"]}>
                    <span className={classes["userip-box-item-head"]}>
                      IP Address
                    </span>
                    <br />
                    {this.state.error ? (
                      <p className={classes["userip-box-item-dummy-header"]}>
                        Here is some dummy data
                      </p>
                    ) : null}
                    <span className={classes["userip-box-item-ip"]}>
                      {this.state.error ? <p>11.222.333.444</p> : ip}
                    </span>
                  </li>
                  <li className={classes["userip-box-ul-li"]}>
                    <span className={classes["userip-box-item-head"]}>
                      Location
                    </span>
                    <br />
                    <span className={classes["userip-box-detail"]}>
                      {this.state.error ? (
                        <p>Los Angeles</p>
                      ) : (
                        `${this.state.location}`
                      )}
                    </span>
                  </li>
                  <li className={classes["userip-box-ul-li"]}>
                    <span className={classes["userip-box-item-head"]}>
                      Country
                    </span>
                    <br />
                    <span className={classes["userip-box-detail"]}>
                      {this.state.error ? <p>US</p> : `${this.state.country}`}
                    </span>
                  </li>
                  <li className={classes["userip-box-ul-li"]}>
                    <Button
                      customStyles={{ fontSize: "1.1em", fontWeight: "600" }}
                    >
                      <NavLink
                        className={classes["userip-navlink-btn"]}
                        to="/download"
                      >
                        Change My IP
                      </NavLink>
                    </Button>
                  </li>
                </ul>
              </div>
              <div className={classes["userip-box-right"]}>{mapIp}</div>
            </div>
          </div>
          <Spacer customHeight={{ height: "3em" }} />
        </div>
      </div>
    );
  }
}

export default UserIp;

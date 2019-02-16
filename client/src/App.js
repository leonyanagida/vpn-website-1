import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import HomePage from "./containers/HomePage/HomePage";
import HelpPage from "./components/SitePages/HelpPage/HelpPage";
import DownloadPage from "./components/SitePages/DownloadPage/DownloadPage";
import PricingPage from "./components/SitePages/PricingPage/PricingPage";
import AccountPage from "./components/SitePages/AccountPage/AccountPage";

import classes from "./App.css";
import "./App.css";

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/download" component={DownloadPage} />
        <Route path="/pricing" component={PricingPage} />
        <Route path="/help" component={HelpPage} />
        <Route path="/myaccount" component={AccountPage} />
        <Route path="/" exact component={HomePage} />
      </Switch>
    );

    return (
      <div className={classes["app-container"]}>
        <Layout>{routes}</Layout>
      </div>
    );
  }
}

export default App;

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./hoc/ScrollToTop/ScrollToTop";

// In order to use "classes" in import statements as classes,
// you must add the following to the .css in website config:
// modules: true,
// localIdentName: '[name]__[local]__[hash:base64:5]'

// Create an app
const app = (
  <BrowserRouter>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

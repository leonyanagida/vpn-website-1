import React from "react";
import classes from "./Button.css";

const Button = props => {
  // Create default button that is used across the website
  let btn = (
    // The button has a default class from the css file
    <button
      // In order to add multiple classes you must join the array
      // Then display the text of the button as props.children
      className={[classes.default, classes["button-1"]].join(" ")}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );

  // If customStyles is set on Button, pass these props
  // Note: When creating a Button you can pass in custom syles
  if (props.customStyles) {
    // Leave the default css style in the className
    // Create a new btn with new customStyles prop in style
    btn = (
      <button
        className={[classes.default, classes["button-1"]].join(" ")}
        style={props.customStyles}
        onClick={props.clicked}
      >
        {props.children}
      </button>
    );
  }
  // Return the button
  return btn;
};

export default Button;

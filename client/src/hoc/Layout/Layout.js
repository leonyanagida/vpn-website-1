import React, { Component } from "react";
import Ax from "../Ax/Ax";
import Nav from "../../components/Nav/Nav";
import NavDrawer from "../../components/Nav/NavDrawer/NavDrawer";
import Footer from "../../components/Footer/Footer";

class Layout extends Component {
  state = {
    isToggled: false
  };

  toggleCloseHandler = () => {
    this.setState({ isToggled: false });
  };

  toggleHandler = () => {
    this.setState(prevState => {
      return { isToggled: !prevState.isToggled };
    });
  };

  render() {
    // Pass the children to render everything from App.js
    return (
      <Ax>
        <Nav toggleClicked={this.toggleHandler} />
        <NavDrawer
          open={this.state.isToggled}
          closed={this.toggleCloseHandler}
        />
        {this.props.children}
        <Footer />
      </Ax>
    );
  }
}

export default Layout;

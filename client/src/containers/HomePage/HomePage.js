import React, { Component } from "react";
import Ax from "../../hoc/Ax/Ax";
import UserIp from "../UserIp/UserIp";
import IpInformation from "./HomePageSections/IpInformation/IpInformation";
import BuySection from "./HomePageSections/BuySection/BuySection";

class HomePage extends Component {
  state = {
    isLoading: false
  };

  render() {
    return (
      <Ax>
        <UserIp style={{ backgroundColor: "white" }} />
        <IpInformation style={{ backgroundColor: "#f8f8f8" }} />
        <BuySection />
      </Ax>
    );
  }
}

export default HomePage;

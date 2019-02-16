import React from "react";
import Button from "../../UI/Button/Button";
import Spacer from "../../UI/Spacer/Spacer";
import classes from "./DownloadPage.css";
import vpnConnect from "../../../images/vpn-connect.png";

const downloadPage = props => (
  <div className={classes["downloadpage-container"]}>
    <div className={classes["downloadpage-header-container"]}>
      <Spacer customHeight={{ height: "7em" }} />

      <div className={classes["downloadpage-inner-header-container"]}>
        <h1 className={classes["downloadpage-header"]}>
          Download our Latest VPN
        </h1>

        <div className={classes["downloadpage-header-trial"]}>
          <h2>Enjoy a free trial for 30 days!*</h2>
          <p>
            Did you know that using a VPN allows you to stay anonymous online?
          </p>
        </div>

        <Spacer customHeight={{ height: "1.5em" }} />

        <div className={classes["downloadpage-btn-container"]}>
          <Button
            customStyles={{ borderRadius: "4px", margin: "5px", width: "8em" }}
          >
            <i className="fab fa-windows" />
            <span className={classes["downloadpage-btn-text"]}>Windows</span>
          </Button>

          <Button
            customStyles={{ borderRadius: "4px", margin: "5px", width: "8em" }}
          >
            <i className="fab fa-apple" />
            <span className={classes["downloadpage-btn-text"]}>Mac</span>
          </Button>

          <Button
            customStyles={{ borderRadius: "4px", margin: "5px", width: "8em" }}
          >
            <i className="fab fa-linux" />
            <span className={classes["downloadpage-btn-text"]}>Linux</span>
          </Button>
        </div>
        <p className={classes["downloadpage-btn-disclaimer"]}>
          Please note that after 30 days, you will need to purchase our VPN in
          order to keep using our services
        </p>
        <Spacer customHeight={{ height: "1em" }} />
      </div>
      <Spacer customHeight={{ height: "7em" }} />
    </div>

    <Spacer customHeight={{ height: "5em" }} />

    <div className={classes["downloadpage-info-container"]}>
      <div className={classes["downloadpage-info-inner-container"]}>
        <h1>How does our VPN work?</h1>
        <Spacer customHeight={{ height: "1.1em" }} />
        <p>
          Through a large network of specialized servers, we make sure that our
          users are not only anonymous online, but also their data remains{" "}
          <strong> safe </strong>
          against hackers and surveillance agencies. After downloading our VPN,
          activate it in order to <strong> encrypt </strong> your identity on
          the internet. We protect your real data from being seen to the public
          with our servers.
        </p>
        <Spacer customHeight={{ height: "1.5em" }} />
        <img
          className={classes["downloadpage-info-img"]}
          src={vpnConnect}
          alt="vpn connection"
        />
        <Spacer customHeight={{ height: "1.5em" }} />
        <p>
          Surf the web comfortably knowing that your data is{" "}
          <strong> not </strong> publicly available for anyone to snoop on. If
          someone does try to track your information, they will be unable to
          because of our firewall. Finally, feel <strong> confident </strong>
          using the internet without the worry of someone spying on you.
        </p>

        <Spacer customHeight={{ height: "3em" }} />
        <h1>Stay connected 24/7 with our VPN</h1>
        <Spacer customHeight={{ height: "0.7em" }} />
        <p>
          A recent study showed that most hackers and companies can find the
          location and browsing habits of its users just by taking a look at
          your unprotected browsing data.
        </p>

        <p>
          Users have the freedom to select which data to route through our VPN,
          and which to route through their Internet service provider (ISP). Stay
          safe and secure browsing on all devices connect to our VPN. Great when
          using public wifi or unknown connections. Protects you from websites
          trying to steal your data. Affordable pricing and trusted amoungst
          customers. Downloads are available on Windows, Mac, Linux, and Android
          Devices.
        </p>
      </div>
    </div>
    <Spacer customHeight={{ height: "10em" }} />
  </div>
);

export default downloadPage;

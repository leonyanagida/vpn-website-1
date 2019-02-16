import React from "react";
import classes from "./IpInformation.css";
import Spacer from "../../../../components/UI/Spacer/Spacer";

const ipInformation = props => (
  <div className={classes["ipinformation-container"]}>
    <Spacer customHeight={{ height: "8em" }} />
    <div className={classes["ipinformation-inner-container"]}>
      <h1 className={classes["ipinformation-inner-header"]}>
        What's so important about my IP Address?
      </h1>
      <p className={classes["ipinformation-inner-header-text"]}>
        Your IP address is a unique set of numbers that identifies your device
        online.
        <br />
        It is almost like your real home address, but for online devices.
      </p>
      <Spacer customHeight={{ height: "2em" }} />
      <div className={classes["ipinformation-box-container"]}>
        <div className={classes["ipinformation-box-col"]}>
          <div className={classes["ipinformation-box-col-inner"]}>
            <i className="fal fa-street-view fa-5x" />
            <h4 className={classes["ipinformation-text-title"]}>
              Your Location is Exposed
            </h4>
            <p className={classes["ipinformation-text"]}>
              Your IP Address could give <strong>hackers</strong> a general idea
              of your current location.
              <br />
              <br />
              Just imagine someone that owns your general location everytime you
              connect to Wifi or use your phone's data name.
            </p>
          </div>
        </div>

        <div className={classes["ipinformation-box-col"]}>
          <div className={classes["ipinformation-box-col-inner"]}>
            <i className="fal fa-puzzle-piece fa-5x" />
            <h4 className={classes["ipinformation-text-title"]}>
              You Leave Traces of Data
            </h4>
            <p className={classes["ipinformation-text"]}>
              As you visit websites through out the day, you leave small{" "}
              <strong>traces</strong> of data for companies/hackers to look
              into.
              <br />
              <br />
              These small pieces of data are enough to identify who you are and
              your <strong>online habits</strong>.
            </p>
          </div>
        </div>

        <div className={classes["ipinformation-box-col"]}>
          <div className={classes["ipinformation-box-col-inner"]}>
            <i className="fab fa-facebook-square fa-5x" />
            <h4 className={classes["ipinformation-text-title"]}>
              Websites Track You
            </h4>
            <p className={classes["ipinformation-text"]}>
              Did you know that big companies such as Facebook and Google{" "}
              <strong> track </strong>
              your usage of the internet?
              <br />
              <br />
              Facebook can even track you after you leave their website!
            </p>
          </div>
        </div>
      </div>
    </div>
    <Spacer customHeight={{ height: "12em" }} />
  </div>
);

export default ipInformation;

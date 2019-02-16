import React from "react";
import Spacer from "../../UI/Spacer/Spacer";
import Button from "../../UI/Button/Button";
import classes from "./PricingPage.css";

const pricingPage = props => (
  <div className={classes["pricingpage-container"]}>
    <div className={classes["pricingpage-inner-container"]}>
      <Spacer customHeight={{ height: "3.5em" }} />
      <h1 className={classes["pricingpage-title"]}>Select your VPN Plan</h1>
      <h4 className={classes["pricingpage-title-text"]}>
        Take advantage of our seasonal sales!
      </h4>
      <Spacer customHeight={{ height: "2em" }} />
      <div className={classes["pricingpage-col-container"]}>
        <div className={classes["pricingpage-col-1"]}>
          <div className={classes["pricingpage-header-container"]}>
            <h3 className={classes["pricingpage-header"]}>1 Month</h3>
            <h2 className={classes["pricingpage-header-sale"]}>No Savings</h2>
            <h1 className={classes["pricingpage-header"]}>$10.99</h1>
            <p className={classes["pricingpage-header-text"]}>per month</p>
          </div>
          <div className={classes["pricingpage-btn-container"]}>
            <Button
              customStyles={{
                fontSize: "1.2em",
                fontWeight: "bold",
                padding: "12px 32px 12px 32px"
              }}
            >
              Buy Now
            </Button>
            <p className={classes["pricingpage-price"]}>
              <span className={classes["pricingpage-price-sale"]}>$10.99</span>
            </p>
            <p className={classes["pricingpage-payment-date"]}>
              Billed monthly
            </p>
          </div>
        </div>

        <div className={classes["pricingpage-col-2"]}>
          <div className={classes["pricingpage-header-container"]}>
            <h3 className={classes["pricingpage-header"]}>24 Months</h3>
            <h1 className={classes["pricingpage-header-sale-24"]}>Save 58%</h1>
            <h1 className={classes["pricingpage-header"]}>$4.99</h1>
            <p className={classes["pricingpage-header-text"]}>per month</p>
          </div>
          <div className={classes["pricingpage-btn-container-center"]}>
            <Button
              customStyles={{
                fontSize: "1.2em",
                fontWeight: "bold",
                padding: "12px 32px 12px 32px"
              }}
            >
              Buy Now
            </Button>
            <p className={classes["pricingpage-price"]}>
              <span className={classes["pricingpage-price-original"]}>
                $287.76
              </span>{" "}
              <span className={classes["pricingpage-price-sale"]}>$119.76</span>
            </p>
            <p className={classes["pricingpage-payment-date"]}>
              Billed every 24 months
            </p>
          </div>
        </div>

        <div className={classes["pricingpage-col-3"]}>
          <div className={classes["pricingpage-header-container"]}>
            <h3 className={classes["pricingpage-header"]}>12 Months</h3>
            <h2 className={classes["pricingpage-header-sale-12"]}>Save 42%</h2>
            <h1 className={classes["pricingpage-header"]}>$6.99</h1>
            <p className={classes["pricingpage-header-text"]}>per month</p>
          </div>
          <div className={classes["pricingpage-btn-container"]}>
            <Button
              customStyles={{
                fontSize: "1.2em",
                fontWeight: "bold",
                padding: "12px 32px 12px 32px"
              }}
            >
              Buy Now
            </Button>
            <p className={classes["pricingpage-price"]}>
              <span className={classes["pricingpage-price-original"]}>
                $143.88
              </span>{" "}
              <span className={classes["pricingpage-price-sale"]}>$83.88</span>
            </p>
            <p className={classes["pricingpage-payment-date"]}>Billed Yearly</p>
          </div>
        </div>
      </div>
      <Spacer customHeight={{ height: "10em" }} />
    </div>

    <div className={classes["pricingpage-benefits-container"]}>
      <Spacer customHeight={{ height: "6em" }} />
      <div className={classes["pricingpage-benefits-inner-container"]}>
        <h1>Benefits of BrandName VPN</h1>
        <p>Our VPN comes with all these features and more!</p>
        <Spacer customHeight={{ height: "1.8em" }} />
        <ul className={classes["pricingpage-benefits-ul"]}>
          <li className={classes["pricingpage-benefits-li"]}>
            <div className={classes["pricingpage-benefits"]}>
              <i className="fas fa-bolt fa-3x" />
              <h3>Rapid Speeds</h3>
              <p className={classes["pricingpage-benefits-text"]}>
                It takes seconds to connect to our servers
              </p>
            </div>
          </li>
          <li className={classes["pricingpage-benefits-li"]}>
            <div className={classes["pricingpage-benefits"]}>
              <i className="fas fa-check fa-3x" />
              <h3>Easy to Use</h3>
              <p className={classes["pricingpage-benefits-text"]}>
                Connect to our VPN with just 1 click
              </p>
            </div>
          </li>
          <li className={classes["pricingpage-benefits-li"]}>
            <div className={classes["pricingpage-benefits"]}>
              <i className="fas fa-infinity fa-3x" />
              <h3>Unlimited Data</h3>
              <p className={classes["pricingpage-benefits-text"]}>
                Use our VPN without worrying about data caps
              </p>
            </div>
          </li>
          <li className={classes["pricingpage-benefits-li"]}>
            <div className={classes["pricingpage-benefits"]}>
              <i className="fas fa-wifi fa-3x" />
              <h3>Secure Connection</h3>
              <p className={classes["pricingpage-benefits-text"]}>
                Enjoy a protected connection at all times
              </p>
            </div>
          </li>
          <li className={classes["pricingpage-benefits-li"]}>
            <div className={classes["pricingpage-benefits"]}>
              <i className="fas fa-mask fa-3x" />
              <h3>Anonymity</h3>
              <p className={classes["pricingpage-benefits-text"]}>
                Hides your IP and Location at all times
              </p>
            </div>
          </li>
          <li className={classes["pricingpage-benefits-li"]}>
            <div className={classes["pricingpage-benefits"]}>
              <i className="fas fa-desktop fa-3x" />
              <h3>Multi Logins</h3>
              <p className={classes["pricingpage-benefits-text"]}>
                Have multiple devices connected to the VPN at the same time
              </p>
            </div>
          </li>
          <li className={classes["pricingpage-benefits-li"]}>
            <div className={classes["pricingpage-benefits"]}>
              <i className="fas fa-landmark fa-3x" />
              <h3>Bypass Government</h3>
              <p className={classes["pricingpage-benefits-text"]}>
                Get passed blocked websites set by the government
              </p>
            </div>
          </li>
          <li className={classes["pricingpage-benefits-li"]}>
            <div className={classes["pricingpage-benefits"]}>
              <i className="fas fa-server fa-3x" />
              <h3>Global Servers</h3>
              <p className={classes["pricingpage-benefits-text"]}>
                We have global servers ready to protect all customers
              </p>
            </div>
          </li>
        </ul>
      </div>
      <Spacer customHeight={{ height: "14em" }} />
    </div>
  </div>
);

export default pricingPage;

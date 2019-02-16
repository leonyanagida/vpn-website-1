import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./BuySection.css";
import Button from "../../../../components/UI/Button/Button";
import Spacer from "../../../../components/UI/Spacer/Spacer";
import vpn from "../../../../images/vpn.jpg";
import vpnProduct from "../../../../images/vpn-product.png";

const buySection = props => (
  <div className={classes["buysection-container"]}>
    <Spacer customHeight={{ height: "8em" }} />
    <div className={classes["buysection-inner-container"]}>
      <div>
        <div>
          <h1 className={classes["buysection-header"]}>
            How do I hide my IP address and stay anonymous online?
          </h1>
          <Spacer customHeight={{ height: "0.5em" }} />
          <p className={classes["buysection-header-text"]}>
            There are various IP tools available (for example, anonymous proxy),
            but the easiest and the most secure method of hiding your IP address
            is using a VPN – a virtual private network, such as BrandName Vpn.
            <br />
            <br />
            VPN works as a secure gateway to the Internet: it redirects your
            connection via a remote server run by the VPN provider, encrypting
            it all the way. This way, your data is protected from snoopers and
            cybercriminals, while your actual IP address stays hidden.
          </p>
          <Spacer customHeight={{ height: "3em" }} />

          <h2 className={classes["buysection-header-2"]}>
            What happens when I use a VPN?
          </h2>
          <p className={classes["buysection-header-text-2"]}>
            A VPN will increase security and privacy from online snoopers. The
            user's original IP address and location will be hidden and replaced
            by with a new IP address provided by the VPN company. While using
            the VPN, your data traffic will be routed thought different
            protocals and passed through an encryption process. This leads to a
            more anonymous experience online and ensures your data is protected
            from hackers.
          </p>
          <div className={classes["buysection-img-cont"]}>
            <img
              src={vpn}
              className={classes["buysection-vpn-image"]}
              alt="vpn connection"
            />
          </div>
          <Spacer customHeight={{ height: "5em" }} />

          <div className={classes["buysection-ul-container"]}>
            <h2 className={classes["buysection-ul-header"]}>
              Benefits of a VPN
            </h2>
            <ul className={classes["buysection-ul"]}>
              <li className={classes["buysection-ul-li"]}>
                <div className={classes["buysection-li-box"]}>
                  <div className={classes["buysection-li-icon"]}>
                    <i className="fab fa-expeditedssl fa-3x" />
                  </div>

                  <div className={classes["buysection-li-texts"]}>
                    <h3 className={classes["buysection-li-box-header"]}>
                      ENHANCED SECURITY
                    </h3>
                    <p className={classes["buysection-li-box-text"]}>
                      Using a VPN ensures no one is able to access your internet
                      data while browsing the web. Your web history and online
                      acitives will not be traceable back to you.
                    </p>
                  </div>
                </div>
              </li>

              <li className={classes["buysection-ul-li"]}>
                <div className={classes["buysection-li-box"]}>
                  <div className={classes["buysection-li-icon"]}>
                    <i className="fas fa-mask fa-3x" />
                  </div>

                  <div className={classes["buysection-li-texts"]}>
                    <h3 className={classes["buysection-li-box-header"]}>
                      ANONYMITY
                    </h3>
                    <p className={classes["buysection-li-box-text"]}>
                      A VPN masks your identity online, hiding your original IP
                      address and location from hackers and snoopers looking to
                      take a peek your data. Surf the web with enhanced security
                      and full anonymity.
                    </p>
                  </div>
                </div>
              </li>

              <li className={classes["buysection-ul-li"]}>
                <div className={classes["buysection-li-box"]}>
                  <div className={classes["buysection-li-icon"]}>
                    <i className="fal fa-user-secret fa-3x" />
                  </div>

                  <div className={classes["buysection-li-texts"]}>
                    <h3 className={classes["buysection-li-box-header"]}>
                      BYPASS RESTRICTIONS
                    </h3>
                    <p className={classes["buysection-li-box-text"]}>
                      Take advantage of being able to bypass websites blocked by
                      the government or by your internet service provider. Your
                      data will be safe when bypassing restricted websites.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Spacer customHeight={{ height: "3em" }} />
      <div className={classes["buysection-vpn-product-container"]}>
        <div className={classes["buysection-vpn-product-inner-container"]}>
          <div className={classes["buysection-vpn-product-left"]}>
            <img
              src={vpnProduct}
              className={classes["buysection-vpn-product"]}
              alt="#"
            />
          </div>

          <div className={classes["buysection-vpn-product-right"]}>
            <h2>BrandName VPN</h2>
            <p className={classes["buysection-vpn-product-text"]}>
              Our VPN will hide your IP address on all connected devices! Our
              services will ensure that your privacy remains anonymous on the
              internet and that no sites will be able to personally track your
              data.
            </p>

            <h5 className={classes["buysection-fab-header"]}>
              We support all of the most common devices!
            </h5>
            <div className={classes["buysection-fab-container"]}>
              <i className="fab fa-windows fa-2x" />
              <i className="fab fa-apple fa-2x" />
              <i className="fab fa-android fa-2x" />
              <i className="fab fa-linux fa-2x" />
              <i className="fab fa-chrome fa-2x" />
              <i className="fab fa-firefox fa-2x" />
              <i className="fab fa-internet-explorer fa-2x" />
              <i className="fab fa-safari fa-2x" />
            </div>
            <Spacer customHeight={{ height: "1.8em" }} />
            <Button
              customStyles={{
                fontSize: "1.1em",
                borderRadius: "35px",
                marginLeft: "-6px"
              }}
            >
              <NavLink
                className={classes["buysection-navlink-btn"]}
                to="/download"
              >
                Buy VPN Now!
              </NavLink>
            </Button>
          </div>
        </div>
      </div>
    </div>
    <Spacer customHeight={{ height: "10em" }} />
  </div>
);

export default buySection;

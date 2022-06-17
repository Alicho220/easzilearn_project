import React from "react";
import { OVERALL } from "./Footer.element";
import logo from "../../assets/easzi-logo-header.png";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
function Footer() {
  return (
    <OVERALL>
      <div className="inner-div">
        <div className="logo-div">
          <img src={logo} />
        </div>
        <div className="information-div">
          <div>
            <h6>Get In Touch</h6>
            <ul>
              <li>About Us</li>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h6>Latest</h6>
            <ul>
              <li>Get Started</li>
              <li>Sell Product</li>
              <li>Get Jobs</li>
              <li>Marketplace</li>
            </ul>
          </div>
          <div>
            <h6>Market</h6>
            <ul>
              <li>Post a product</li>
              <li>Post a service</li>
              <li>
                Post a delivery <span className="label">coming soon</span>
              </li>
            </ul>
          </div>
          <div>
            {" "}
            <h6>Account</h6>
            <ul>
              <li>My Account</li>
              <li>My Store</li>
              <li>Wallet</li>
              <li>My Order</li>
            </ul>
          </div>
        </div>
        <div className="social-div">
          <div>
            {" "}
            <h6>Need Information?</h6>
            <MailOutlineIcon />
            <p>
              For enquires be sure to email us <span>hello@easzi.com</span>
            </p>
            <PhoneInTalkIcon /> <WhatsAppIcon />
            <p>
              You can also call and send a whatsapp message on{" "}
              <span>08108531855</span>
            </p>
          </div>
          <div>
            {" "}
            <h6>Connect With Us?</h6>
            <FacebookIcon />
            <p>
              Connect with us to stay updated on <span>hellowaszi</span>
            </p>
            <InstagramIcon />
            <p>
              Connect with us on instagram <span>@helloeaszi</span>
            </p>
          </div>
          <div>
            {" "}
            <h6>Get lastest updates</h6>
            <p>Stay up to date with the latest happenings at easzi.com.</p>
            <p>Enter your email address below</p>
            <form className="form">
              <input
                className="form-control"
                placeholder="Enter your email address here"
              />
              <button className="btn">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="reserved-div">
          <small> &copy; 2021-2022 Easzi. All Rights Reserved</small>
        </div>
      </div>
    </OVERALL>
  );
}

export default Footer;

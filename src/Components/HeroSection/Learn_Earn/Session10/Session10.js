import React from "react";
import { OVERALL } from "./Session10.element";
import one from "../../../../assets/Easzi-number-1-green.png";
import two from "../../../../assets/Easzi-number-2-green.png";
import three from "../../../../assets/Easzi-number-3-green.png";
import four from "../../../../assets/Easzi-number-4-green (1).png";
import early from "../../../../assets/Easzi-Learn-and-Earn-Course-Limited-Slots-Available-Act-Now.png";

function Session10() {
  return (
    <OVERALL>
      <div className="inner-div">
        <div className="header-div">
          <h1>
            How To Join
            <br /> Easzi Learn
            <br /> And Earn
            <br /> Course Today
          </h1>
          <hr />
        </div>
        <div className="center-div">
          <div className="left-side">
            <div className="numbered-session">
              <div>
                <img src={one} />
              </div>
              <div>
                <h2>Create An Account on The Website</h2>
                <p>Account creation IS FREE</p>
              </div>
            </div>
            <div className="numbered-session">
              <div>
                <img src={two} />
              </div>
              <div>
                <h2>Login</h2>
                <p> Once you create an account, login.</p>

                <p>
                  You will see your Influencer Link when you login to your
                  account.
                </p>
              </div>
            </div>
            <div className="numbered-session">
              <div>
                <img src={three} />
              </div>
              <div>
                <h2>Click On Learn & Earn App</h2>
                <p>After you Login to your account.</p>
                <p>Click on Learn & Earn App.</p>
              </div>
            </div>
            <div className="numbered-session">
              <div>
                <img src={four} />
              </div>
              <div>
                <h2>Click On Course Registration</h2>
                <p>Fill the form and follow the instruction.</p>
                <p>It’s simple.</p>
                <p>
                  When you pay for The Gold, Classic or VIP Plan of Easzi Learn
                  and Earn
                  <br /> App, <span>YOU WILL RECEIVE</span> a Course Plan
                  payment receipt and <span>A PROFIT</span>
                  <br /> <span>SHARING AGREETMENT/CONTRACT.</span>
                </p>
                <p>It’s so amazing. Act now.</p>
              </div>
            </div>
          </div>
          <div className="right-side">
            <img src={early} />
          </div>
        </div>
        <div className="button-div">
          <div className="left-btn">
            <button>Create Account For Free</button>
          </div>
          <div className="right-btn">
            <button>Login To Your Account</button>
          </div>
        </div>
      </div>
    </OVERALL>
  );
}

export default Session10;

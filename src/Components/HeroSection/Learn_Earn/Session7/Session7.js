import React from "react";
import learn from "../../../../assets/Easzi-Learn-Earn-Course.png";
import { OVERALL } from "./Session7.element";
// import

function Session7() {
  return (
    <OVERALL>
      <div className="inner-div">
        <div className="header-div">
          <h1>
            Why Easzi
            <br /> Learn <br />& Earn App
          </h1>
          <hr />
        </div>
        <div className="inner-row">
          <div className="left-side">
            <img src={learn} />
          </div>
          <div className="right-side">
            <p>
              The truth is, Training and Skills Acquisition is great{" "}
              <span>BUT YOU MAY NOT</span> be able <span>TO FULLY</span> apply
              the training or skills <span>IF YOU ARE BROKE.</span>
            </p>
            <p>
              To solve that problem, we have created an amazing system that can
              help you learn and earn.
            </p>
            <p>
              You can <span>PRACTICALLY</span> make ₦200 Million{" "}
              <span>AND ALMOST ANYBODY </span>
              can do it.
            </p>
            <p>
              It is <span>VERY SIMPLE</span> and without stress{" "}
              <span>BECAUSE THE ONLY THING </span>
              you have to do is <span>CREATE FOR</span>
              <span>FREE AN ACCOUNT</span> on Easzi and share your Influencer
              Link for people <span>TO CREATE FOR FREE</span> an account on
              Easzi.
            </p>
            <p>
              See the amazing benefits you can earn through Easzi Learn and Earn
              App
            </p>
          </div>
        </div>
      </div>
    </OVERALL>
  );
}

export default Session7;

import React from "react";
import learn from "../../../../assets/Easzi-Learn-Earn-Course.png";
import { OVERALL } from "./Session7.element";
// import

function Session7() {
  return (
    <OVERALL>
      <div className="inner-div">
        <h1>
          Why Easzi
          <br /> Learn <br />& Earn App
        </h1>
        <hr />
        {/* <div className=""></div> */}
        <div className="inner-row">
          <div className="left-side">
            <img src={learn} />
          </div>
          <div className="right-side">
            <p>
              The truth is, Training and Skills Acquisition is great BUT YOU MAY
              NOT be able TO FULLY apply the training or skills IF YOU ARE
              BROKE.
            </p>
            <p>
              To solve that problem, we have created an amazing system that can
              help you learn and earn.
            </p>
            <p>
              You can PRACTICALLY make ₦200 Million AND ALMOST ANYBODY can do
              it.
            </p>
            <p>
              It is VERY SIMPLE and without stress BECAUSE THE ONLY THING you
              have to do is CREATE FOR FREE AN ACCOUNT on Easzi and share your
              Influencer Link for people TO CREATE FOR FREE an account on Easzi.
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

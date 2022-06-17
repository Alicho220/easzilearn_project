import React from "react";
import { OVERALL } from "./Session2.element";
import earn from "../../../../assets/You-Can-Earn-For-Life-Multiple-Daily-And-yearly-Income.jpg";
import one from "../../../../assets/Easzi-number-1-green.png";
import two from "../../../../assets/Easzi-number-2-green.png";
import three from "../../../../assets/Easzi-number-3-green.png";
import TestImg from "../../../../assets/download/download.svg";

function Session2() {
  return (
    <OVERALL>
      {/* <img className="img" src={TestImg} /> */}
      <div className="inner-div">
        <div className="header-div">
          <h1>About Easzi</h1>
          <hr />
        </div>
        <div className="row-div">
          <div className="left-side">
            <p>
              Easzi <span>IS AN ALL-IN-ONE</span> technology <span>WHERE</span>{" "}
              you can learn and earn, sell and buy{" "}
              <span>PRIVATE AND PUBLIC</span> physical products, digital
              products, and services, <span>FIND</span> logistics/delivery
              agents, <span>ADVERTISE</span> and grow your business,{" "}
              <span>PERFORM</span>
              banking/financial transactions, <span>AND PROTECT </span>your life
              in cases of health emergencies.
            </p>
            <p>
              Easzi <span>CAN ALSO MAKE YOU</span> ₦200 Million,{" "}
              <span>IN THE SHORTEST</span>
              time possible.
            </p>
            <p>
              But <span>FOR YOU</span> to make ₦200 Million,{" "}
              <span>YOU NEED MULTIPLE</span>
              streams of income.
            </p>
            <p>
              Also, <span>HOW YOU MAKE MONEY</span> cannot be based{" "}
              <span>ON ONLY</span> your efforts.{" "}
              <span>YOU MUST ALSO BE ABLE TO</span> earn money{" "}
              <span>EVEN WHEN SLEEPING.</span>
            </p>
            <p>
              The amazing technology we have created can help you achieve that.
              You can earn <span>OVER 1,000 STREAMS</span> of Income through
              Easzi..
            </p>

            <div className="numbered-session">
              <div>
                <img src={one} />
              </div>
              <div>
                <p>
                  When <span>A SELLER </span>sells a <span>PHYSICAL</span>{" "}
                  product, a <span>DIGITAL</span> product or a Service on Easzi,
                  <span>YOU EARN money.</span>
                </p>
              </div>
            </div>
            <div className="numbered-session">
              <div>
                <img src={two} />
              </div>
              <div>
                <p>
                  When <span>A BUYER</span> buys a <span>PHYSICAL </span>
                  product, a <span>DIGITAL</span> product or a Service on easzi,{" "}
                  <span>YOU EARN money.</span>
                </p>
              </div>
            </div>
            <div className="numbered-session">
              <div>
                <img src={three} className="three" />
              </div>
              <div>
                <p>
                  When <span>A PERSON</span> pays for Easzi Learn and Earn App,
                  <span> YOU EARN</span> money.
                </p>
              </div>
            </div>
            <p>
              See <span>HOW IT WORKS</span>below.
            </p>
          </div>
          <div className="right-side">
            <img src={earn} />
          </div>
        </div>
      </div>
    </OVERALL>
  );
}

export default Session2;

import React from "react";
import { OVERALL } from "./Session5.element";
import one from "../../../../assets/Easzi-number-1-green.png";
import two from "../../../../assets/Easzi-number-2-green.png";
import three from "../../../../assets/Easzi-number-3-green.png";
import having from "../../../../assets/Not-Having-Money-Should-Not-Be-An-Excuse-To-Not-Succeed1.jpg";

function Session5() {
  return (
    <OVERALL>
      <div className="inner-div">
        <h1>
          More Ways Yo
          <br />u Can Earn
          <br /> Money On Easzi <br />
          Without <br />
          Paying Money
        </h1>
        <hr />
        <div className="row-div">
          <div className="left-side">
            {/* <p>
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
            <p>The technology we have created can help you achieve that.</p>
            <p>You can earn OVER 1,000 Streams of Income through Easzi.</p> */}
            <div className="numbered-session">
              <div>
                <img src={one} />
              </div>
              <div>
                <h2>Arbitrage Income:</h2>
                <p>
                  On easzi, you can find WHOLESALE and RETAIL physical products.
                </p>
                <p>
                  WITHOUT FIRST buying the product, YOU CAN CHOOSE any physical
                  product you like on easzi, ADD YOUR PROFIT to it, and sell it
                  as your own product to your family, friends or your customers.
                </p>
              </div>
            </div>
            <div className="numbered-session">
              <div>
                <img src={two} />
              </div>
              <div>
                <h2>Affiliate Income:</h2>
                <p>
                  On easzi, you can find PHYSICAL products, DIGITAL products,
                  and SERVICES with Affiliate Commissions.
                </p>
                <p>
                  On a product or service you will like to advertise, you can
                  generate an Affiliate Link for that item and earn the
                  Affiliate Commission when a person buys the product or
                  services through your affiliate link.
                </p>
              </div>
            </div>
            <div className="numbered-session">
              <div>
                <img src={three} className="three" />
              </div>
              <div>
                <h2>Store Affiliate Income:</h2>
                <p>
                  This is one of the best parts of Easzi. YOU CAN generate an
                  Affiliate Link FOR A STORE OR BUSINESS on Easzi.
                </p>
                <p>
                  Once any person clicks on your link and buys ANY NUMBER OF
                  PRODUCTS from that store, YOU WILL EARN the affiliate
                  commission ON ALL THE PRODUCTS the person bought from that
                  store.
                </p>
              </div>
            </div>
            <p>Don’t miss this opportunity.</p>
          </div>
          <div className="right-side">
            <img src={having} />
          </div>
        </div>
      </div>
    </OVERALL>
  );
  //  <OVERALL>
}

export default Session5;

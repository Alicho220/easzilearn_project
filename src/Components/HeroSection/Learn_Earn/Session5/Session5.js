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
        <div className="header-div">
          <h1>
            More Ways Yo
            <br />u Can Earn
            <br /> Money On Easzi <br />
            Without <br />
            Paying Money
          </h1>
          <hr />
        </div>

        <div className="row-div">
          <div className="left-side">
            <div className="numbered-session">
              <div>
                <img src={one} />
              </div>
              <div>
                <h2>Arbitrage Income:</h2>
                <p>
                  On easzi, you can find <span>WHOLESALE</span> and{" "}
                  <span>RETAIL</span> physical products.
                </p>
                <p>
                  <span>WITHOUT FIRST</span> buying the product,{" "}
                  <span>YOU CAN CHOOSE </span>
                  any physical product you like on easzi,
                  <span> ADD YOUR PROFIT</span> to it, and sell it as your own
                  product to your family, friends or your customers.
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
                  On easzi, you can find <span>PHYSICAL</span> products,{" "}
                  <span>DIGITAL </span>products, and <span>SERVICES</span> with
                  Affiliate Commissions.
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
                  This is one of the best parts of Easzi. <span>YOU CAN </span>
                  generate an Affiliate Link{" "}
                  <span>FOR A STORE OR BUSINESS </span>
                  on Easzi.
                </p>
                <p>
                  Once any person clicks on your link and buys{" "}
                  <span>ANY NUMBER OF PRODUCTS</span> from that store,{" "}
                  <span>YOU WILL EARN </span>
                  the affiliate commission <span>ON ALL THE PRODUCTS</span> the
                  person bought from that store.
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
}

export default Session5;

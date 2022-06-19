import React from "react";
import { OVERALL } from "./Session4.element";
import learn from "../../../../assets/Pay-For-Something-Through-Easzi-And-Earn-Money.jpg";
import one from "../../../../assets/Easzi-number-1-blue.png";
import two from "../../../../assets/Easzi-number-2-blue.png";
import three from "../../../../assets/Easzi-number-3-blue.png";

function Session4() {
  return (
    <OVERALL>
      <div className="inner-div">
        <div className="header-div">
          <h1>
            3 Reasons You <br />
            Should Only <br />
            Buy Things
            <br /> Through Easzi
          </h1>
          <hr />
        </div>

        <div className="inner-row">
          <div className="left-side">
            <img src={learn} />
          </div>
          <div className="right-side">
            <div className="numbered-session">
              <div>
                <img src={one} />
              </div>
              <div>
                <p>
                  You <span>WILL EARN MONEY</span> when you <span>BUY</span> a
                  <span>DIGITAL</span> product, a <span>DIGITAL</span> product,
                  or <span>A SERVICE</span> through Easzi.
                </p>
              </div>
            </div>
            <div className="numbered-session">
              <div>
                <img src={two} />
              </div>
              <div>
                <p>
                  Easzi <span>IS ALSO AN ESCROW </span>App{" "}
                  <span>AND PROTECTS</span> buyers and sellers <span>FROM</span>{" "}
                  being scammed.
                </p>
              </div>
            </div>
            <div className="numbered-session">
              <div>
                <img src={three} />
              </div>
              <div>
                <p>
                  You <span>CANNOT GET SCAMMED</span> if you pay for{" "}
                  <span>ANY PHYSICAL PRODUCT </span>or <span>SERVICE</span>
                  through Easzi Escrow System.
                </p>
              </div>
            </div>
            <p>This is how our Escrow System works.</p>
            <p>
              Anybody can create a <span>A PRIVATE OR PUBLIC</span> product or{" "}
              <span>A PRIVATE OR PUBLIC</span> service on Easzi.{" "}
              <span>IT IS FREE.</span>
            </p>
            <p>
              If you create <span>A PUBLIC</span> product or service,{" "}
              <span>ANYBODY CAN SEE IT</span> and pay for it, <span>BUT</span>
              if you create <span>A PRIVATE</span> product or service,{" "}
              <span>ONLY YOU</span> and the buyer or anyone who has the private
              link can see it and pay for it.
            </p>
            <p>Are you a buyer or client?</p>
            <p>
              Do you want <span>TO DO AN OFFLINE</span> business transaction
              with a person <span>AND ARE YOU WORRIED</span> of being scammed?
            </p>
            <p>
              Tell the Seller or Service Provider to{" "}
              <span>CREATE A PRIVATE </span>product or service link on Easzi{" "}
              <span>AND SEND YOU THE PRIVATE</span> link to make payment.
            </p>
            <p>Are you a Seller or service Provider?</p>
            <p>
              <span>STOP DOING PAYMENT ON DELIVERY.</span> Create a private
              product link or a private service link and send the link to your
              buyers or clients to make payment.
            </p>
            <p>
              <span>WHEN A BUYER</span> makes payment through Easzi for any
              physical product or service, <span>THE SELLER SEES</span> the
              money in his Sales Earnings Dashboard,{" "}
              <span>BUT CANNOT WITHDRAW</span> the money{" "}
              <span>UNTIL THE SELLER</span> delivers the product or service to
              the buyer.
            </p>
            <p>
              That way, <span>BUYERS DON’T </span>get scammed and{" "}
              <span>SELLERS DON’T</span>
              get scammed.
            </p>
            <p>
              Also, The <span>BUYER EARNS MONEY</span> when he makes payment
              through Easzi.
            </p>
            <p>
              If the buyer does not make payment, maybe he is not a serious
              buyer, and if the seller <span>DOES NOT DELIVER</span> the
              physical product or service <span>TO THE BUYER</span> the buyer
              can <span>GET BACK</span> his money.
            </p>
          </div>
        </div>
      </div>
    </OVERALL>
  );
}

export default Session4;

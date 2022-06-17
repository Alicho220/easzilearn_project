import React from "react";
import { OVERALL } from "./Session4.element";
import learn from "../../../../assets/Easzi-Learn-Earn-Course.png";
import one from "../../../../assets/Easzi-number-1-blue.png";
import two from "../../../../assets/Easzi-number-2-blue.png";
import three from "../../../../assets/Easzi-number-3-blue.png";

function Session4() {
  return (
    <OVERALL>
      <div className="inner-div">
        <h1>
          3 Reasons You <br />
          Should Only <br />
          Buy Things
          <br /> Through Easzi
        </h1>
        <hr />
        {/* <div className=""></div> */}
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
                  You WILL EARN MONEY when you BUY a PHYSICAL product, a DIGITAL
                  product, or A SERVICE through Easzi.
                </p>
              </div>
            </div>
            <div className="numbered-session">
              <div>
                <img src={two} />
              </div>
              <div>
                <p>
                  Easzi IS ALSO AN ESCROW App AND PROTECTS buyers and sellers
                  FROM being scammed.
                </p>
              </div>
            </div>
            <div className="numbered-session">
              <div>
                <img src={three} />
              </div>
              <div>
                <p>
                  You CANNOT GET SCAMMED if you pay for ANY PHYSICAL PRODUCT or
                  SERVICE through Easzi Escrow System.
                </p>
              </div>
            </div>
            <p>This is how our Escrow System works.</p>
            <p>
              Anybody can create a A PRIVATE OR PUBLIC product or A PRIVATE OR
              PUBLIC service on Easzi. IT IS FREE.
            </p>
            <p>
              If you create A PUBLIC product or service, ANYBODY CAN SEE IT and
              pay for it, BUT if you create A PRIVATE product or service, ONLY
              YOU and the buyer or anyone who has the private link can see it
              and pay for it.
            </p>
            <p>Are you a buyer or client?</p>
            <p>
              Do you want TO DO AN OFFLINE business transaction with a person
              AND ARE YOU WORRIED of being scammed?
            </p>
            <p>
              Tell the Seller or Service Provider to CREATE A PRIVATE product or
              service link on Easzi AND SEND YOU THE PRIVATE link to make
              payment.
            </p>
            <p>Are you a Seller or service Provider?</p>
            <p>
              STOP DOING PAYMENT ON DELIVERY. Create a private product link or a
              private service link and send the link to your buyers or clients
              to make payment.
            </p>
            <p>
              WHEN A BUYER makes payment through Easzi for any physical product
              or service, THE SELLER SEES the money in his Sales Earnings
              Dashboard, BUT CANNOT WITHDRAW the money UNTIL THE SELLER delivers
              the product or service to the buyer.
            </p>
            <p>
              That way, BUYERS DON’T get scammed and SELLERS DON’T get scammed.
            </p>
            <p>
              Also, The BUYER EARNS MONEY when he makes payment through Easzi.
            </p>
            <p>
              If the buyer does not make payment, maybe he is not a serious
              buyer, and if the seller DOES NOT DELIVER the physical product or
              service TO THE BUYER the buyer can GET BACK his money.
            </p>
          </div>
        </div>
      </div>
    </OVERALL>
  );
}

export default Session4;

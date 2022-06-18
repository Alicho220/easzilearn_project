import React from "react";
import { OVERALL } from "./Section3.element";
import earn from "../../../../assets/You-Can-Earn-Lifetime-Income-1.jpg";

function Session3() {
  return (
    <OVERALL>
      <div className="inner-div">
        <div className="header-div">
          <h1>
            You Can Earn
            <br /> For Life
            <br /> Over 100,000
            <br /> Streams
            <br /> Of Income,
            <br /> Even
            <br /> When Sleeping
          </h1>
          <hr />
        </div>
        <div className="inner-row">
          <div className="left-side">
            <img src={earn} />
          </div>
          <div className="right-side">
            <p>
              Every person who creates an account on Easzi{" "}
              <span>BECOMES AUTOMATICALLY</span>
              an influencer and has an influencer link. Registration{" "}
              <span>IS FREE.</span>{" "}
            </p>
            <p>
              If any person <span>CLICK ON</span> your Influencer Link and
              create <span>FOR FREE</span> an account on Easzi, it can count for
              you as a new Stream of Income.
            </p>
            <p>
              Even <span>IF THE PERSON</span> clicked on your Influencer Link
              <span>AND DON’T CREATE</span> an account immediately,{" "}
              <span>BUT CREATE</span>
              an account <span>WITHIN 90 DAYS</span> (that is within 3 Months),
              it can <span>COUNT FOR YOU AS A NEW</span> Stream of Income.
            </p>
            <p>
              You<span>DON’T HAVE TO KNOW </span>the person.
            </p>
            <p>
              The <span></span>ONLY THING they have to do <span>IS CLICK</span>
              on your link <span>AND CREATE</span> an account{" "}
              <span>FOR FREE,</span> either <span>IMMEDIATELY OR WITHIN</span> 3
              months.
            </p>
            <p>
              <span>If 10,000 </span>persons click on your Influencer Link and
              create<span>FOR FREE</span> an account on Easzi, you can have
              10,000 Streams of Income on Easzi.
            </p>
            <p>
              You can earn money <span>FOR LIFE FROM EVERY PERSON</span> who
              creates an account on Easzi through your Influencer Link.
            </p>
            <p>
              The persons can be a <span>BUYER OR SELLER.</span>
            </p>
            <p>
              You can earn money <span>FOR LIFE</span> from every person,
              <span>EVERYTIME THEY BUY OR SELL</span> products or services on
              Easzi, <span>EVEN WHEN YOU ARE SLEEPIN</span>G.
            </p>
            <p>It’s so amazing.</p>
          </div>
        </div>
      </div>
    </OVERALL>
  );
}

export default Session3;

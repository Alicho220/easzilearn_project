import React from "react";
import { OVERALL } from "./Session9.element";
import one from "../../../../assets/Easzi-number-1-green.png";
import two from "../../../../assets/Easzi-number-2-green.png";
import three from "../../../../assets/Easzi-number-3-green.png";
// import{ OVERALL}

function Session9() {
  return (
    <OVERALL>
      <div className="inner-div">
        <div className="header-div">
          <h1>
            See Why You
            <br /> Should Act Now,
            <br /> The Financial
            <br /> Valuation Of
            <br /> Our Company
            <br /> Is Over
            <br /> 77 Billion Naira
          </h1>
          <hr />
        </div>
        <div className="text-area">
          <p>
            <span>THE FINANCIAL VALUATION</span> of our company is
            ₦77,430,254,901.50. <span>IN WORDS,</span> it is{" "}
            <span> SEVENTY SEVEN BILLION, </span>
            Four Hundred And <span></span>Thirty MILLION, Two Hundred and
            Fifty-Four Thousand, Nine Hundred and One Naira, Fifty Kobo.
          </p>
          <p>
            No company really does this <span>BUT WE do it</span>{" "}
            <span>BECAUSE WE REALLY</span> want you to make money.Therefore, as{" "}
            <span>A BONUS, </span>
            you will enjoy the following <span>EXTRA </span>benefits below:
          </p>
          <p>
            Please <span>NOTE THAT THIS IS NOT</span> a Financial Investment.
            <span>THIS IS A BONUS.</span>{" "}
          </p>
          <div className="numbered-session">
            <div>
              <img src={one} className="three" />
            </div>
            <div>
              <h2>Easzi Learn & Earn Gold Plan Bonus</h2>
              <p>
                If you pay for <span>THE GOLD PLAN </span>of Easzi Learn and
                Earn App, <span>YOU WILL SHARE IN </span>5% of the profit of our
                company
                <span>EVERY YEAR FOR FIVE YEARS.</span> You will also have
                access to <span>ALL FREE AND ALL PREMIUM</span> Training Videos
                <span>FROM VARIOUS EXPERTS</span> on Easzi Learn and Earn App
                <span>FOR THE 5 YEARS.</span>
              </p>
              <p>
                This includes <span>ALL NEWLY ADDED</span> Training videos
                <span>WITHIN THE 5 YEARS.</span>
              </p>
            </div>
          </div>
          <div className="numbered-session">
            <div>
              <img src={two} className="three" />
            </div>
            <div>
              <h2>Easzi Learn & Earn Gold Plan Bonus</h2>
              <p>
                If you pay for <span>THE GOLD PLAN</span> of Easzi Learn and
                Earn App, <span>YOU WILL SHARE IN</span> 5% of the profit of our
                company <span>EVERY YEAR FOR FIVE YEARS.</span> You will also
                have access to <span>ALL FREE AND ALL PREMIUM</span> Training
                Videos <span>FROM VARIOUS EXPERTS</span> on Easzi Learn and Earn
                App <span>FOR THE 5 YEARS.</span>
              </p>
              <p>
                This includes <span>ALL NEWLY ADDED </span>Training videos
                <span>WITHIN THE 5 YEARS.</span>
              </p>
            </div>
          </div>
          <div className="numbered-session">
            <div>
              <img src={three} className="three" />
            </div>
            <div>
              <h2>Easzi Learn & Earn Gold Plan Bonus</h2>
              <p>
                If you pay for <span>THE GOLD PLAN</span> of Easzi Learn and
                Earn App, <span>YOU WILL SHARE IN</span> 5% of the profit of our
                company <span>EVERY YEAR FOR FIVE YEARS.</span> You will also
                have access to <span>ALL FREE AND ALL PREMIUM</span> Training
                Videos <span>FROM VARIOUS EXPERTS</span> on Easzi Learn and Earn
                App <span>FOR THE 5 YEARS.</span>
              </p>
              <p>
                This includes <span>ALL NEWLY ADDED</span> Training videos
                <span>WITHIN THE 5 YEARS.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </OVERALL>
  );
}

export default Session9;

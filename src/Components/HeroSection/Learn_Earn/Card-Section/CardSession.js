import React from "react";
import { OVERALL } from "./CardSession.element";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

function CardSession() {
  return (
    <OVERALL>
      <div className="inner-div">
        <div className="header-div">
          <h1>
            Payment Plans
            <br /> And Benefits
            <br /> For Easzi Learn
            <br /> And Earn App
          </h1>
        </div>
        <div className="card-div">
          <div className="card">
            <h2>The Free Plan</h2>
            <hr />
            <h2>
              Cost:
              <br />
              #0
            </h2>
            <h2>The Benefits</h2>
            <div className="first">
              <CheckCircleOutlineIcon />
              <p>Easzi Learn and Earn App FREE Courses, NO PAID Courses.</p>
            </div>
            <div className="first">
              <CheckCircleOutlineIcon />
              <p>Easzi Learn and Earn App FREE Courses, NO PAID Courses.</p>
            </div>
            <div className="first">
              <HighlightOffIcon className="closeIcon" />
              <p>Easzi Learn and Earn App FREE Courses, NO PAID Courses.</p>
            </div>
            <div className="first">
              <HighlightOffIcon className="closeIcon" />
              <p>Easzi Learn and Earn App FREE Courses, NO PAID Courses.</p>
            </div>
            <div className="first">
              <HighlightOffIcon className="closeIcon" />
              <p>Easzi Learn and Earn App FREE Courses, NO PAID Courses.</p>
            </div>
            <div className="first">
              <HighlightOffIcon className="closeIcon" />
              <p>Easzi Learn and Earn App FREE Courses, NO PAID Courses.</p>
            </div>
            <hr />
          </div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </div>
      </div>
    </OVERALL>
  );
}

export default CardSession;

import React from "react";
import hold from "../../assets/Holding-Easzi-App-.png";
import Logo from "../../assets/easzi-earn-and-learn-course-logo-with-blue-text.png";
import { HEROWRAP, INNERWRAP } from "./HeroSectio.element";
import { Container, GlobalStyle } from "../globalStyles";

export default function () {
  return (
    <HEROWRAP className="hero-section">
      {/* <GlobalStyle /> */}
      {/* <Container> */}
      {/* <div className="logo-header">
          <img src={Logo} alt="easzi-logo" />
        </div> */}
      <div className="inner-div">
        <div className="left-side">
          <h2>Registration IS FREE</h2>
          <div className="">
            <h1>
              Our <span>Technology </span>
              <br />
              Can Help
              <br /> You Earn
              <br /> ₦200 Million In
              <br /> The Shortest
              <br /> Time Possible
              <br /> With Or <br /> Without You
              <br /> Paying Money
            </h1>
            <hr />
          </div>
        </div>
        <div className="right-side">
          <img src={hold} />
        </div>
      </div>
      {/* </Container> */}
    </HEROWRAP>
  );
}

import React from "react";
import hold from "../../assets/Holding-Easzi-App-.png";
import Logo from "../../assets/easzi-earn-and-learn-course-logo-with-blue-text.png";
// import HeroImage from "../assets/images/online-training.jpg";
import { HEROWRAP, INNERWRAP } from "./HeroSectio.element";
import { Container, GlobalStyle } from "../globalStyles";

export default function () {
  return (
    <HEROWRAP className="hero-section">
      <GlobalStyle />
      <Container>
        {/* <div className="logo-header">
          <img src={Logo} alt="easzi-logo" />
        </div> */}

        <div className="left-side">
          <h2>Registration IS FREE</h2>
          <h1>
            The <span>Technology</span>
            <br /> We Have Built
            <br /> Can Help
            <br /> You Earn
            <br /> 26 Streams
            <br /> Of Income
          </h1>
          <hr />
        </div>
        <div className="right-side">
          <img src={hold} />
        </div>
      </Container>
    </HEROWRAP>
  );
}

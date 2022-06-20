import React from "react";
import { OVERALL } from "./Navbar.element";
import logo from "../../assets/easzi-logo-header.png";
import TestImg from "../../assets/download/download.svg";
import TestImg2 from "../../assets/download/download2.svg";
import TestImg3 from "../../assets/download/download3.svg";
import TestImg4 from "../../assets/download/download3.svg";
import TestImg5 from "../../assets/download/download5.svg";
import TestImg6 from "../../assets/download/download6.svg";

function Navbar() {
  return (
    <OVERALL>
      <div className="inner-div logo-header">
        <nav>
          <img src={logo} />
        </nav>
        {/* <img src={TestImg}></img>
        <img src={TestImg2}></img>
        <img src={TestImg3}></img>
        <img src={TestImg4}></img>
        <img src={TestImg5}></img>
        <img src={TestImg6}></img> */}
      </div>
    </OVERALL>
  );
}

export default Navbar;

import React from "react";
import { OVERALL } from "./Navbar.element";
import logo from "../../assets/easzi-logo-header.png";

function Navbar() {
  return (
    <OVERALL>
      <div className="inner-div logo-header">
        <nav>
          <img src={logo} />
        </nav>
      </div>
    </OVERALL>
  );
}

export default Navbar;

import React from "react";
import "./NavBar.css";
import Hamburger from "./Hamburger/Hamburger";
import Login from "./Login-SignUp/Login";
import DemoID from "./Demo ID/DemoID";
import WorldLanguageIcon from "./World-Language/WorldLanguage";


function NavBar(props) {
  return (
    <>
      <div className="Navbar-Container">
        <Hamburger />
        <div className="Navbar-right">
          <Login />
          <DemoID />
          <WorldLanguageIcon />
        </div>
      </div>
    </>
  );
}

export default NavBar;

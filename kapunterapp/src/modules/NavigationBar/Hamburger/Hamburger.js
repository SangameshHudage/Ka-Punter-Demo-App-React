import React, { useState } from "react";
import "./Hamburger.css";
import HamburgerClickIndex from "./HamburgerContent/index"


function Hamburger() {
  const [hamburgerIconClicked, sethamburgerIconClicked] = useState(false);

  function toggleHamburgerIconClicked() {
    sethamburgerIconClicked(!hamburgerIconClicked);

    if(hamburgerIconClicked === true){
      
    }
  }

  return (
    <>
    {hamburgerIconClicked && <HamburgerClickIndex toggleHamburgerIconClicked={toggleHamburgerIconClicked} />} 
    <div className="Icon-Hamburger" 
    onClick={toggleHamburgerIconClicked}
    >
      <div className="Icon-Hamburger">
        <div className="Icon-Hamburger-div"></div>
        <div className="Icon-Hamburger-div"></div>
        <div className="Icon-Hamburger-div"></div>
      </div>
    </div>
    </>
  );
}

export default Hamburger;


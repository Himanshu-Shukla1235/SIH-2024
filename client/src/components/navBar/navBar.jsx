import React from "react";
import { useState } from "react";
import "./navBar.css";
import ContactButton from "./contactButton";
import { FaBars } from 'react-icons/fa'; // Import the hamburger icon
const NavBar = () => {
  const [dropDown, setDropDown] = useState('dropDownMenu');

  const handleHomeClick = () => {
    setDropDown(dropDown === 'dropDownMenu' ? 'dropDownMenuHide' : 'dropDownMenu');
  };
  return (
    <React.Fragment>
      <nav>
      <div className="nav">

        {/* logo */}
        <div className="navLogo">Logo</div>

        {/* navOptions */}
        <div className="navOptions">
          <ul>
            <li onClick={handleHomeClick}>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
          </ul>
        </div>

          {/* navConatiner */}
          <div className="NavContactBtn">
                <div className="ContactButton">
                  <ContactButton/>
                </div>
          </div>
        </div>

        {/* nav Ham burger  */}
        <nav className="NavhamBurger">
          <FaBars size={24} /> {/* Use the icon in your component */}
        </nav>

        {/* //backdrop */}
          {/* drop down */}
          <div className={dropDown}>
              <ul>
                 <li>new Tech</li>
                 <li>carnon foot print</li>
                  <li>c</li>
                 <li>d</li>
                 <li>e</li>
               </ul>
        </div>
      </nav>

    
    </React.Fragment>
  );
};

export default NavBar;

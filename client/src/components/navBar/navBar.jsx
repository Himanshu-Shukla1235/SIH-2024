import React from "react";
import "./navBar.css";
import ContactButton from "./contactButton";
import { FaBars } from 'react-icons/fa'; // Import the hamburger icon
const NavBar = () => {
  
  return (
    <React.Fragment>
      <nav>
      <div className="nav">
        <div className="navLogo">Logo</div>
        <div className="navOptions">
          <ul>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
          </ul>
        </div>

        <div className="NavContactBtn">
              <div className="ContactButton">
                <ContactButton/>
              </div>
        </div>
      </div>
      <nav className="NavhamBurger">
        <FaBars size={24} /> {/* Use the icon in your component */}
    </nav>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;

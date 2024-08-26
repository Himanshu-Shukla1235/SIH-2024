import React from "react";
import "./navBar.css";
import ContactButton from "./contactButton";
import { FaBars } from 'react-icons/fa'; // Import the hamburger icon
const NavBar = () => {
  
  return (
    <React.Fragment>
      <nav>
      <div className="nav">

        {/* logo */}
        <div className="navLogo">Logo</div>

        {/* navOptions */}
        <div className="navOptions">
          <ul>
            <li>home</li>
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
          <div className="resoursesMenu">
              <ul>
                 <li>a</li>
                 <li>b</li>
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

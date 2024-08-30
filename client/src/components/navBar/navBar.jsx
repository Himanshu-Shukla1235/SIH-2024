import React, { useState, useEffect } from "react";
import "./navBar.css";
import ContactButton from "./contactButton";
import { FaBars } from 'react-icons/fa'; 
import { SlArrowDown } from "react-icons/sl";
import HelpIcon from '@mui/icons-material/Help';
import EastIcon from '@mui/icons-material/East';


const ResoursesOptions = [
  { title: "Option 1", description: "Here is the description" },
  { title: "Option 2", description: "Another description" },
  { title: "Option 1", description: "Here is the description" },
  { title: "Option 2", description: "Another description" },
  // Add more options as needed
];
const GuideOptions = [
  { title: "Guide 1", description: "Guide description" },
  { title: "Guide 2", description: "Another guide description" },
  // Add more options as needed
];

const NavBar = () => {
  const [dropDown, setDropDown] = useState('dropDownMenuHide');
  const [navClass, setNavClass] = useState('navZero');
  const [dropdownType, setDropdownType] = useState('');

  const handleMouseEnter = (type) => {
    setDropdownType(type);
    setDropDown('dropDownMenu');
  };

  const handleMouseLeave = () => {
    setDropDown('dropDownMenuHide');
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setNavClass('navZero');
      } else {
        setNavClass('nav');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <React.Fragment>
      <nav>
        <div className={navClass}>
          {/* logo */}
          <div className="navLogo">CarbonTrack</div>

          {/* navOptions */}
          <div className="navOptions">
            <ul>
              <li><a href="/">Home</a></li>
              <li 
                onMouseEnter={() => handleMouseEnter('resources')}
                onMouseLeave={handleMouseLeave}
              >
                Resources <SlArrowDown className="DownArrow" />
              </li>
              <li 
                onMouseEnter={() => handleMouseEnter('guide')}
                onMouseLeave={handleMouseLeave}
              >
                Guide <SlArrowDown className="DownArrow" />
              </li>
              <li>About Us</li>
            </ul>
          </div>

          {/* navContainer */}
          <div className="NavContactBtn">
            <div className="ContactButton">
              <ContactButton/>
            </div>
          </div>
        </div>

        {/* nav Hamburger */}
        <nav className="NavhamBurger">
          <FaBars size={24} />
        </nav>

        {/* drop down */}
        <div 
          className={dropDown}
          onMouseEnter={() => handleMouseEnter(dropdownType)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="dropSection1">
            <div className="imageDropSection1">

            </div>
              <button className="dropSecButton">Check it out</button>
    
          </div>
          <div className="dropSection2">
              <ul className="menuOptions">
                {(dropdownType === 'resources' ? ResoursesOptions : GuideOptions).map((option, index) => (
                  <div>
                    <li key={index}>
                    <a href="#">{option.title}</a>
                    <EastIcon className="arrow"/>
                    </li>
                  </div>
                  
                ))}
                
              </ul>
          </div>
          <div className="dropSection3">
            <span>
            <p>Quick Links</p>
            <ul>
              <li>Analytic Board </li>
              <li>Maket Notices</li>
              <li>Guide and Rule Book</li>
              <li>Press Release</li>
            </ul>
            </span>
            <main>
              <HelpIcon className="helpIcon"/>
              <p>Help Center</p>
            </main>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;


import React, { useEffect, useState } from 'react';
import NavBar from '../../components/navBar/navBar';
import './Home.css';
import Section1 from '../../components/HomePage/section1/Section1'
import Section2 from '../../components/HomePage/section2/section2';
import Section3 from '../../components/HomePage/section3/section3';
import Section4 from '../../components/HomePage/section4/section4'
import Section5 from '../../components/HomePage/section5/section5'
import Slider from "../../components/HomePage/section1/slider";
import Slide2 from '../../components/HomePage/section1/slide2/slide2'
import Slide3 from '../../components/HomePage/section1/slide3/slide3'
const Home = () => {
  const [showNavBar, setShowNavBar] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;

      if (currentScrollTop > lastScrollTop) {
        setShowNavBar(false);
      } else {
        setShowNavBar(true);
      }

      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  // ---------------------------------slider content-----------------------------------
  const slides = [
    { key: 0, content:  <Section1></Section1> },
    { key: 1, content: <Slide2></Slide2>
      
     },
    { key: 2, content:<Slide3></Slide3>  },
    // Add more slides as needed
  ];

  return (
    <React.Fragment>
      {/* nav bar logic */}
      <div
        className={`navComponent ${
          showNavBar ? "navComponentShow" : "navComponentHide"
        }`}
      >
        <NavBar />
      </div>

      {/* section1 */}
      <div className="sec_1">
      
      <Slider slides={slides} />
  
       
      </div>

      {/* //background */}
      <div className="background">
        <div className="filter"></div>
      </div>

      {/* rest sectins */}
      <div className='restSections'>
          <div className="section2">
            <Section2/>
          </div>

          <div className="section3">
            <Section3/>
          </div>

          <div className="section4">
            <Section4/>
          </div>

          <div className="section5">
            <Section5/>
          </div>
          
      </div>
    </React.Fragment>
  );
};

export default Home;

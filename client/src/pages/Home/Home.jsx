import React from 'react';
import NavBar from '../../components/navBar/navBar';
import './Home.css'
import ContactButton from "../../components/navBar/contactButton"

const Home = () => {
  return (
    <React.Fragment>
        <NavBar/>
        <div className='box_1'>
            <div className="sec_1">
                //paste comp1 here 
            </div>
            <div className="sec_2">
                //paste comp1 here 
            </div>
            //rest comp
        </div>
        <div className="filter"></div>
      
    </React.Fragment>
  );
}

export default Home;

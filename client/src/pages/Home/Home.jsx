import React from 'react';
import NavBar from '../../components/navBar/navBar';
import './Home.css'

const Home = () => {
  return (
    <React.Fragment>
        <NavBar/>
        <div className='box_1'>
            <div className="com_1">
                //past comp1 here 
            </div>
            //rest comp
        </div>
        <div className="filter"></div>
      
    </React.Fragment>
  );
}

export default Home;

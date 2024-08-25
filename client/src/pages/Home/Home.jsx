import React from 'react';
import NavBar from '../../components/navBar/navBar';
import './Home.css'

const Home = () => {
  return (
    <React.Fragment>
        <NavBar/>
        <div className='box_1'>
            //comnent1
        </div>
        <div className="filter"></div>
        //rest components    
    </React.Fragment>
  );
}

export default Home;

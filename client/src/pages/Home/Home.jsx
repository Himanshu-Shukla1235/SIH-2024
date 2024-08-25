import React from 'react';
import NavBar from '../../components/navBar/navBar';
import './Home.css'

const Home = () => {
  return (
    <React.Fragment>
        <NavBar/>
        <div className='comp_1'>Home</div>
        <div className="filter"></div>
    </React.Fragment>
  );
}

export default Home;

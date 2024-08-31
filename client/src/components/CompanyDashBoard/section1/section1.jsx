import React from 'react';
import './section1.css';

const Section1 = () => {
  return (
    <React.Fragment>
      <main className="compSec1Main">
        <div className="mainBox">
          <div className="ProfileVisual">
            <div className="profilePhoto">
              P
            </div>
            <div className="CompanyName">
              <a href="#">Coal India Limited</a>
            </div>
          </div>

          <div className="ProfileInfo">
            <ul>
              <li><a>Location:</a> Delhi ,India</li>
              <li><a>Year Established:</a> 1993</li>
              <li><a>Type of Mining Operation:</a>Whether the company operates underground, open-cast, or both.</li>
              <li><a>Type of Mining Operation:</a>Whether the company operates underground, open-cast, or bot</li>
              <li><a>Ownership Structure:</a>Public, private, or government-owned, and details of any parent company.</li>
            </ul>
            <button>UPDATE</button>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default Section1;

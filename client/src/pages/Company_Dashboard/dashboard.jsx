import React from 'react'
import './dashboard.css'
import NavBar from '../../components/navBar/navBar'

const Dashboard = () => {
  return (
    <React.Fragment>
        <div className="NavBar">
          <NavBar/>
        </div>
        <div className="section1">
          INFO OF THE MINE
        </div>

        <main className='ComDashboardMain'>
            <div className="section2">
              GRAPH AND RESTssssssssssssssssssssssssssssssssssssssssssssssssss
            </div>

            <div className="section3">
              PROJECT SHOW CASE
            </div>
        </main>
    </React.Fragment>
  )
}

export default Dashboard
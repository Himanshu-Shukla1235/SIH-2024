import React from 'react'
import './dashboard.css'
import NavBar from '../../components/navBar/navBar'
import Section2 from '../../components/CompanyDashBoard/section2/section2'

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
             <Section2></Section2>
            </div>

            <div className="section3">
              PROJECT SHOW CASE
            </div>
        </main>
    </React.Fragment>
  )
}

export default Dashboard
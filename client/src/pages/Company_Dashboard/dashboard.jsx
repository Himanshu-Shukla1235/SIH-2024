import React from 'react'
import './dashboard.css'
import NavBar from '../../components/navBar/navBar'
import Section2 from '../../components/CompanyDashBoard/section2/section2'
import Section1 from '../../components/CompanyDashBoard/section1/section1'
import Section3 from '../../components/CompanyDashBoard/section3/section3'

const Dashboard = () => {
  return (
    <React.Fragment>
        <div className="comAllMain">
            <div className="NavBar">
              <NavBar/>
            </div>
            <div className="section1">
              <Section1/>
            </div>

            <main className='ComDashboardMain'>
                <div className="section2">
                <Section2></Section2>
                </div>

                <div className="com_section3">
                  <div className='com_sec3'>
                    <Section3/>
                  </div>
                </div>
            </main>
        </div>
    </React.Fragment>
  )
}

export default Dashboard
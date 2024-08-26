import React from "react";
import NavBar from "../../components/navBar/navBar";
import "./Home.css";
// import ContactButton from "../../components/navBar/contactButton"

const Home = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div className="box_1">
        <div className="sec_1">
          <a href="#">
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
          </a>
        </div>

        <div className="sec_2">
          <div className="sec_2-2">
            <div className="sec_2-3">
              <h2>Tailored Solutions for Every Mine</h2>
              <p>
                Whether you{`'`}re overseeing a small operation or managing
                multiple sites, our scalable platform adapts to your unique
                needs.
              </p>
              <button>Explore plans</button>
            </div>
            <img src="/public/images/plant1.jpg" alt="Plant1" />
          </div>
        </div>

        {/* rest comp */}
      </div>
      <div className="background">
        <div className="filter"></div>
      </div>
    </React.Fragment>
  );
};

export default Home;

import React from "react";
import "./Section1.css";
import Button1 from "./Button1";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Chart1 from "./chart";
import img1 from "../../../../public/Images/sec1_image1.jpg";
import img2 from "../../../../public/Images/sec1_img3.jpg";
import Videoplayer from "./videoplayer";

const Section1 = () => {
  useGSAP(() => {
    gsap.from(".sec_111 h1", {
      y: 100,
      opacity: 0,
    });
  });

  return (
    <React.Fragment>
      <div className="sec1">
        <div className="sec_11">
          <div className="sec_111">
            <h1>CarbonTrack India</h1>
            <h3>Quantify, Analyze,and Neutalize Your Carbon Footprint</h3>
            {/* <h3>Your Carbon Footprint</h3> */}
            <p>
              CarbonTrack India is developed by a team of environmental experts,
              data scientists, and software engineers dedicated to supporting
              India's coal sector in balancing energy needs with climate
              commitments. For the landing page of CarbonTrack India, you should
              focus on concisely.
            </p>
          </div>
          <div className="sec_112">
            <button
              style={{
                backgroundColor: "#FF8C00",
                color: "white",
                fontFamily: "sans-serif",
                width: "120px",
                marginRight: "30px",
                borderRadius: "10px",
                padding: "5px",
                border: "none",
               
              }}
            >
              Get Started Now
            </button>{" "}
            <Button1 text="Learn more" />
          </div>
        </div>

        <div className="sec_12">
          {/* <div className="img1">
=======
        <div className="sec_112">
          <button
            style={{
              backgroundColor: "#FF8C00",
              color: "BLACK",
              fontFamily: "sans-serif",
              width:'9em',
              marginRight:"30px",
              borderRadius:"10px"
              ,padding:"5px"   
              ,border:"none"
              ,
            }}
          >
            Get Started Now
          </button>{" "}
          <Button1  text="Learn more"  />
        </div>
      </div>
      <div className="sec_12">
        {/* <div className="img1">

          <img
            src={img2}
            alt="Description"
            style={{
              width: "100%", // Make the image responsive to the container's width
              height: "auto", // Maintain the aspect ratio
              display: "block", // Remove any extra space below the image
              objectFit: "cover", // Ensure the image covers the container without distortion
              borderRadius: "8px", // Optional: Add rounded corners
            }}
          />
        </div>
        <div className="img2">
          <img
            src={img1}
            alt="Description"
            style={{
              width: "100%", // Make the image responsive to the container's width
              height: "auto", // Maintain the aspect ratio
              display: "block", // Remove any extra space below the image
              objectFit: "cover", // Ensure the image covers the container without distortion
              borderRadius: "8px", // Optional: Add rounded corners
            }}
          />
        </div> */}
          <Videoplayer></Videoplayer>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Section1;

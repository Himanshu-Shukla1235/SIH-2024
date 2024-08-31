// eslint-disable-next-line no-unused-vars
import React from "react";
import "./section5.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function section5() {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useGSAP(() => {
    gsap.from(".sec_5 h1", {
      y: 100,
      opacity: 0,

      scrollTrigger: {
        trigger: ".sec_5 h1",
        scroller: "body",
        // markers:true,
        start: "top 100%",
        end: "top 50%",
        scrub: 1,
      },
    });
  });

  return (
    <>
      <h1 className="sec_5-main-heading">How It Works</h1>
      <div className="sec_5">
        <h1>Your Path to a Greener Mine</h1>
        <div className="sec_5-1">
          <ul className="points">
            <li>
              <p>
                <span>Input Your Data: </span>Seamlessly integrate your
                operational information.
              </p>
            </li>
            <li>
              <p>
                <span>Analyze Your Footprint: </span>
                Gain a comprehensive emissions. understanding of your.
              </p>
            </li>
            <li>
              <p>
                <span>Explore Solutions: </span>
                Discover and simulate various reduction strategies.
              </p>
            </li>
            <li>
              <p>
                <span>Implement & Track: </span>
                Put plans into action and monitor your progress in real-time.
              </p>
            </li>
          </ul>
          <button>Get Started</button>
        </div>
      </div>
    </>
  );
}

export default section5;

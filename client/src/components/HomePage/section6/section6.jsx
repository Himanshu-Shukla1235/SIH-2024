// eslint-disable-next-line no-unused-vars
import React from "react";
import "./section6.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const section6 = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useGSAP(() => {
    gsap.from(".sec_6-2 h1, .sec_6-1 img", {
      y: 100,
      opacity: 0,

      scrollTrigger: {
        trigger: ".sec_6-2 h1, .sec_6-1 img",
        scroller: "body",
        // markers:true,
        start: "top 100%",
        end: "top 60%",
        scrub: 1,
      },
    });
  });

  return (
    <div className="sec_6">
      <div className="sec_6-1">
        <img src="/public/images/graph.png" alt="Plant1" />
        <div className="sec_6-2">
          <h1>Driving Positive Change in Indian Coal Mining</h1>
          <p>
            At CarbonTrack India, we{`,`}re more than just a tech company. We
            {`,`}re a team of passionate experts in environmental science, data
            analytics, and software engineering, united by a common goal: to
            help India{`,`}s coal sector balance energy needs with climate
            commitments.
          </p>
          <button>Explore</button>
        </div>
      </div>
    </div>
  );
};

export default section6;

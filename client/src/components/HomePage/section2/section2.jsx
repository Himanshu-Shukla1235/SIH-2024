// eslint-disable-next-line no-unused-vars
import React from "react";
import "./section2.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const section2 = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useGSAP(() => {
    gsap.from(".sec_2-2 h1", {
      y: 100,
      opacity: 0,

      scrollTrigger: {
        trigger: ".sec_2-2 h1",
        scroller: "body",
        // markers:true,
        start: "top 100%",
        end: "top 50%",
        scrub: 1,
      },
    });
  });

  return (
    <div className="sec_2">
      <div className="sec_2-1">
        <div className="sec_2-2">
          <h1>Tailored Solutions for Every Mine</h1>
          <p>
            Whether you{`,`}re managing a small operation or overseeing multiple
            locations, our versatile platform scales effortlessly to meet your
            unique requirements, ensuring seamless integration and enhanced
            efficiency across all levels of your operation.
          </p>
          <button>Explore</button>
        </div>
        <img src="/public/images/plant1.jpg" alt="Plant1" />
      </div>
    </div>
  );
};

export default section2;

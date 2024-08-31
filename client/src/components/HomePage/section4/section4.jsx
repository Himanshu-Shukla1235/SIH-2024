// eslint-disable-next-line no-unused-vars
import React from "react";
import './section4.css'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function section4() {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useGSAP(() => {
    gsap.from(".sec_4", {
      opacity: 0.5,
      scale:0.8,
      duration:1,
      scrollTrigger: {
        trigger: ".sec_4",
        scroller: "body",
        // markers:true,
        start: "top 90%",
        end: "top 40%",
        scrub: 1,
      },
    });
  });

  return (
  <div className="sec_4">
    <img src="/public/images/plant2.png" alt="plant-2" />
  </div>
  )
}

export default section4;

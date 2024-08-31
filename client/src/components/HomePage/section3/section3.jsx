// eslint-disable-next-line no-unused-vars
import React from "react";
import "./section3.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function section3() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useGSAP(() => {
    gsap.from(".sec_3-1 a", {
      y: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: ".sec_3-1 a",
        scroller: "body",
        // markers:true,
        start: "top 100%",
        end: "top 50%",
        scrub: 1,
      },
    });
  });

  return (
    <div className="sec_3">
      <div className="sec_3-1">
        <a>Powerful Features at Your Fingertips</a>
        <div className="sec_3-2">
          <p>
            Harness the transformative power of data-driven insights with our
            state-of-the-art emission quantification platform. Our cutting-edge
            algorithms deliver precise calculations of activity-based emissions,
            equipping you with the clarity and accuracy needed to steer your
            organization toward carbon neutrality. Experience the future of
            environmental management with our advanced real-time visualization
            tools and interactive dashboards, which seamlessly convert complex
            datasets into intuitive, actionable insights. Elevate your
            sustainability strategy with unparalleled transparency and control,
            and turn data into decisive action.
          </p>
          <button>Features</button>
        </div>
      </div>
    </div>
  );
}

export default section3;

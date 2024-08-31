// eslint-disable-next-line no-unused-vars
import React from "react";
import "./section3.css";
import { useState, useEffect } from "react";
import ProjectStripes from "./projectStripes.jsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Section3 = () => {

  useGSAP(() => {
    gsap.from(".com-sec-3-1 h1, .com-sec-3-1 p", {
      y: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: ".com-sec-3-1 h1, .com-sec-3-1 p",
        scroller: "body",
        // markers:true,
        start: "top 100%",
        end: "top 55%",
        scrub: 1,
      },
    });
  });

  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch the JSON data from the public directory
    fetch("/project.json")
      .then((response) => response.json())
      .then((data) => {
        // console.log('Fetched data:', data);
        // Sort the data alphabetically by projectName
        const sortedProjects = data.sort((a, b) =>
          a.projectName.localeCompare(b.projectName)
        );
        setProjects(sortedProjects);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProjects = projects.filter((project) =>
    project.projectName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="com-sec-3">
      <div className="com-sec-3-1">
        <h1>Projects</h1>
        <p>This is the collection of all the projects done by xyz company.</p>
        <p>
          With mine{`'`}s location and it{`'`}s type.
        </p>
      </div>

      <div className="com-sec-3-2">
        <div className="com-sec-3-21">
          <label htmlFor="search">
            <b>Search: </b>
          </label>
          <input
            type="text"
            id="search"
            placeholder="Project Name"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className="com-sec-3-22">
          <ul className="strips">
            {filteredProjects.map((curProject) => {
              return (
                <ProjectStripes key={curProject.id} projectData={curProject} />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Section3;

import React from "react";
import { useState } from "react";
import "./MarketPlace.css";
import FilterBar from "../../components/MarketPlace/FilterBar.jsx";
import ProjectCard from "../../components/MarketPlace/ProjectCard.jsx";

function MarketPlace() {
  // Data array to store project details
  const projects = [
    {
      imageSrc:
        "https://g1.img-dpreview.com/FB305EFE13ED494D941186334E2E2AE0.jpg",
      title: "Green Horizon Project",
      location: "Brazil",
      projectCode: "1382",
      projectCategory: "Avoidance, Engineered",
      projectType: "Waste management",
      standards: "VCS & 1 more",
      price: "10.50",
      tonnesAvailable: "899",
      vintages: "2017-2020",
    },
    {
      imageSrc:
        "https://g2.img-dpreview.com/EFD6DDAC682147CA838FC5040455E1A3.jpg",
      title: "Forest Conservation REDD+ Project",
      location: "Indonesia",
      projectCode: "1477",
      projectCategory: "Avoidance, Natural Climate Solutions",
      projectType: "REDD+",
      standards: "VCS & 1 more",
      price: "9.55",
      tonnesAvailable: "913,506,993",
      vintages: "2015-2020",
    },
    {
      imageSrc:
        "https://g4.img-dpreview.com/C06AC38267B844EA81F4BC9F7BEC59BE.jpg",
      title: "Solar Energy Initiative",
      location: "India",
      projectCode: "1584",
      projectCategory: "Renewable Energy",
      projectType: "Solar Power",
      standards: "VCS",
      price: "12.75",
      tonnesAvailable: "500,000",
      vintages: "2018-2022",
    },
    {
      imageSrc: "https://via.placeholder.com/150",
      title: "Wind Farm Development",
      location: "Germany",
      projectCode: "1620",
      projectCategory: "Renewable Energy",
      projectType: "Wind Power",
      standards: "VCS & Gold Standard",
      price: "15.00",
      tonnesAvailable: "250,000",
      vintages: "2016-2021",
    },
    {
      imageSrc: "https://via.placeholder.com/150",
      title: "Mangrove Restoration Project",
      location: "Philippines",
      projectCode: "1703",
      projectCategory: "Avoidance, Natural Climate Solutions",
      projectType: "Ecosystem Restoration",
      standards: "Gold Standard",
      price: "8.25",
      tonnesAvailable: "1,200,000",
      vintages: "2019-2023",
    },
    {
      imageSrc: "https://via.placeholder.com/150",
      title: "Hydropower Project",
      location: "Nepal",
      projectCode: "1738",
      projectCategory: "Renewable Energy",
      projectType: "Hydropower",
      standards: "VCS & 1 more",
      price: "14.10",
      tonnesAvailable: "350,000",
      vintages: "2017-2022",
    },
  ];
  const [filters, setFilters] = useState({
    location: "All locations",
    category: "All categories",
    startDate: "",
    endDate: "",
    rating: "All ratings",
  });

  // Function to handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  // Function to apply filters
  const filteredProjects = projects.filter((project) => {
    const { location, category, startDate, endDate } = filters;
    const isLocationMatch =
      location === "All locations" || project.location === location;
    const isCategoryMatch =
      category === "All categories" || project.projectCategory === category;
    const isDateMatch =
      (!startDate || project.vintages.split("-")[0] >= startDate) &&
      (!endDate || project.vintages.split("-")[1] <= endDate);
    return isLocationMatch && isCategoryMatch && isDateMatch;
  });

  return (
    <div className="marketplace-container">
      <div className="marketplace-header">
        <h1>Marketplace</h1>
        <FilterBar filters={filters} onFilterChange={handleFilterChange} />
      </div>

      <div className="projects-list">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            imageSrc={project.imageSrc}
            title={project.title}
            location={project.location}
            projectCode={project.projectCode}
            projectCategory={project.projectCategory}
            projectType={project.projectType}
            standards={project.standards}
            price={project.price}
            tonnesAvailable={project.tonnesAvailable}
            vintages={project.vintages}
          />
        ))}
      </div>
    </div>
  );
}

export default MarketPlace;

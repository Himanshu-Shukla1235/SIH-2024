import React from "react";
import { useState } from "react";
import "./FilterBar.css";

function FilterBar({ filters, onFilterChange }) {
  return (
    <div className="filter-bar">
      <select
        name="location"
        className="filter-dropdown"
        value={filters.location}
        onChange={onFilterChange}
      >
        <option>All locations</option>
        <option>Brazil</option>
        <option>Indonesia</option>
        <option>India</option>
        <option>Germany</option>
        <option>Philippines</option>
        <option>Nepal</option>
        {/* Add more options here as needed */}
      </select>
      <select
        name="category"
        className="filter-dropdown"
        value={filters.category}
        onChange={onFilterChange}
      >
        <option>All categories</option>
        <option>Avoidance, Engineered</option>
        <option>Avoidance, Natural Climate Solutions</option>
        <option>Renewable Energy</option>
      </select>
      <input
        type="date"
        name="startDate"
        className="filter-date"
        value={filters.startDate}
        onChange={onFilterChange}
      />
      <input
        type="date"
        name="endDate"
        className="filter-date"
        value={filters.endDate}
        onChange={onFilterChange}
      />
      <select
        name="rating"
        className="filter-dropdown"
        value={filters.rating}
        onChange={onFilterChange}
      >
        <option>All ratings</option>
        {/* Add more options here as needed */}
      </select>
      <button className="search-button">Search</button>
    </div>
  );
}

export default FilterBar;

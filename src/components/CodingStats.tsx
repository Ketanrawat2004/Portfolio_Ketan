import React from "react";
import "./styles/CodingStats.css";

const CodingStats: React.FC = () => {
  return (
    <div className="coding-stats-simple">
      <div className="stat-card">
        <span className="stat-number">150+</span>
        <span className="stat-label">Questions Solved</span>
      </div>
      <div className="stat-card">
        <span className="stat-number">&lt; 1000</span>
        <span className="stat-label">Global Rank on Unstop</span>
      </div>
    </div>
  );
};

export default CodingStats;

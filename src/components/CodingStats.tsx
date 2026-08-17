import React from "react";
import "./styles/CodingStats.css";
import { FaTrophy, FaBolt, FaCode, FaChartPie } from "react-icons/fa6";

const difficultyData = [
  { level: "Easy", solved: 31, total: 338, color: "#10b981" },
  { level: "Medium", solved: 34, total: 572, color: "#f59e0b" },
  { level: "Hard", solved: 19, total: 270, color: "#f43f5e" },
];

const CodingStats: React.FC = () => {
  const totalSolved = 84;
  const totalQuestions = 1180;

  return (
    <div className="coding-stats-container">
      {/* Ambient Glow */}
      <div className="coding-stats-glow"></div>

      {/* Header Bar */}
      <div className="coding-stats-header">
        <div className="coding-badge">
          <FaCode className="badge-icon" />
          <span>CODING PRACTICE FOR PLACEMENTS & INTERVIEWS</span>
        </div>
        <div className="coding-rank-pill">
          <FaTrophy className="pill-trophy" />
          <span>Global Rank: <strong>#1313</strong></span>
        </div>
      </div>

      {/* Main 2-Column Clean Grid */}
      <div className="coding-simple-grid">
        {/* Left Card: Questions Solved & Difficulty Breakdown */}
        <div className="coding-card progress-card">
          <div className="card-top">
            <h4><FaChartPie className="card-icon" /> Questions Solved</h4>
            <span className="card-badge total-badge">{totalSolved} / {totalQuestions}</span>
          </div>

          <div className="progress-body">
            {/* Circular Gauge */}
            <div className="circular-meter">
              <svg className="meter-svg" viewBox="0 0 120 120">
                <circle
                  className="meter-bg"
                  cx="60"
                  cy="60"
                  r="48"
                  strokeWidth="10"
                />
                {/* Easy Arc */}
                <circle
                  className="meter-bar-easy"
                  cx="60"
                  cy="60"
                  r="48"
                  strokeWidth="10"
                  strokeDasharray="301.6"
                  strokeDashoffset="240"
                />
                {/* Medium Arc */}
                <circle
                  className="meter-bar-medium"
                  cx="60"
                  cy="60"
                  r="48"
                  strokeWidth="10"
                  strokeDasharray="301.6"
                  strokeDashoffset="260"
                  transform="rotate(75 60 60)"
                />
                {/* Hard Arc */}
                <circle
                  className="meter-bar-hard"
                  cx="60"
                  cy="60"
                  r="48"
                  strokeWidth="10"
                  strokeDasharray="301.6"
                  strokeDashoffset="278"
                  transform="rotate(135 60 60)"
                />
              </svg>
              <div className="meter-text">
                <span className="meter-number">{totalSolved}</span>
                <span className="meter-total">/{totalQuestions}</span>
                <span className="meter-sub">Solved</span>
              </div>
            </div>

            {/* Difficulty Breakdown Bars */}
            <div className="difficulty-list">
              {difficultyData.map((item) => {
                const percent = ((item.solved / item.total) * 100).toFixed(0);
                return (
                  <div key={item.level} className="difficulty-item">
                    <div className="diff-header">
                      <span className={`diff-name ${item.level.toLowerCase()}`}>{item.level}</span>
                      <span className="diff-count">
                        <strong>{item.solved}</strong> / {item.total}
                      </span>
                    </div>
                    <div className="diff-bar-track">
                      <div
                        className={`diff-bar-fill ${item.level.toLowerCase()}-fill`}
                        style={{
                          width: `${Math.max(12, Number(percent) * 3)}%`,
                          backgroundColor: item.color,
                        }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="progress-footer">
            <span className="hard-ratio-tag">⚡ 63.1% Medium &amp; Hard Problems Solved</span>
          </div>
        </div>

        {/* Right Card: Candidate Standing & Score */}
        <div className="coding-card standing-card">
          <div className="card-top">
            <h4><FaTrophy className="card-icon trophy" /> Placement Standing</h4>
            <span className="card-badge rank-badge">Rank #1313</span>
          </div>

          <div className="standing-body">
            <div className="standing-highlight-box">
              <div className="standing-avatar-wrap">
                <div className="standing-avatar">KR</div>
                <span className="standing-online-dot"></span>
              </div>
              <div className="standing-user-info">
                <h5 className="standing-name">Ketan Rawat</h5>
                <span className="standing-role">Placement Ready · DSA Problem Solver</span>
              </div>
            </div>

            <div className="standing-metrics-row">
              <div className="metric-box score-box">
                <span className="metric-label">Total Score</span>
                <span className="metric-value">9,810 <small>Pts</small></span>
              </div>
              <div className="metric-box rank-box">
                <span className="metric-label">Current Rank</span>
                <span className="metric-value rank-val"><FaBolt className="bolt-icon" /> #1313</span>
              </div>
            </div>

            <div className="standing-footer">
              <span className="standing-tag">🎯 High Consistency in Algorithmic Problem Solving</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodingStats;

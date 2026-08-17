import React, { useState } from "react";
import "./styles/CodingStats.css";
import { FaFire, FaTrophy, FaStar, FaBolt, FaCode, FaChartPie } from "react-icons/fa6";
import { MdOutlineDateRange, MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

interface DifficultyStat {
  level: "Easy" | "Medium" | "Hard";
  solved: number;
  total: number;
  color: string;
  bgColor: string;
}

const difficultyData: DifficultyStat[] = [
  { level: "Easy", solved: 31, total: 338, color: "#10b981", bgColor: "rgba(16, 185, 129, 0.15)" },
  { level: "Medium", solved: 34, total: 572, color: "#f59e0b", bgColor: "rgba(245, 158, 11, 0.15)" },
  { level: "Hard", solved: 19, total: 270, color: "#f43f5e", bgColor: "rgba(244, 63, 94, 0.15)" },
];

const leaderboardTop = [
  { rank: 1, name: "Prakash Sanjay", points: "143,017 Pts", color: "#fbbf24", avatarBg: "#d97706" },
  { rank: 2, name: "Aniket Karmakar", points: "142,975 Pts", color: "#60a5fa", avatarBg: "#2563eb" },
  { rank: 3, name: "Purbayon Sarkar", points: "139,425 Pts", color: "#fb923c", avatarBg: "#c2410c" },
];

// Activity calendar month representations
const month1Days = [
  { status: "empty" }, { status: "empty" }, { status: "empty" }, { status: "empty" },
  { status: "empty" }, { status: "empty" }, { status: "star" }, { status: "star" }, { status: "star" },
  { status: "green" }, { status: "green" }, { status: "green" }, { status: "empty" }, { status: "empty" },
  { status: "empty" }, { status: "empty" }, { status: "green" }, { status: "green" }, { status: "star" },
  { status: "star" }, { status: "star" }, { status: "star" }, { status: "star" }, { status: "star" }
];

const month2Days = [
  { status: "star" }, { status: "star" }, { status: "star" }, { status: "green" }, { status: "green" },
  { status: "star" }, { status: "star" }, { status: "star" }, { status: "star" }, { status: "star" },
  { status: "star" }, { status: "green" }, { status: "green" }, { status: "green" }, { status: "green" },
  { status: "star" }, { status: "star" }, { status: "star" }, { status: "star" }, { status: "green" },
  { status: "star" }, { status: "empty" }, { status: "empty" }, { status: "empty" }
];

const month3Days = [
  { status: "empty" }, { status: "empty" }, { status: "empty" }, { status: "empty" },
  { status: "empty" }, { status: "star" }, { status: "star" }, { status: "star" }, { status: "star" },
  { status: "star" }, { status: "star" }, { status: "star" }, { status: "star" }, { status: "empty" },
  { status: "empty" }, { status: "empty" }, { status: "empty" }, { status: "empty" },
  { status: "empty" }, { status: "empty" }, { status: "empty" }, { status: "empty" }
];

const CodingStats: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"all" | "progress" | "activity" | "rank">("all");
  const totalSolved = 84;
  const totalQuestions = 1180;
  const percentage = ((totalSolved / totalQuestions) * 100).toFixed(1);

  return (
    <div className="coding-stats-container">
      {/* Glow Ambient Effect */}
      <div className="coding-stats-glow"></div>

      {/* Header Bar */}
      <div className="coding-stats-header">
        <div className="coding-badge">
          <FaCode className="badge-icon" />
          <span>CODING PRACTICE FOR PLACEMENTS & INTERVIEWS</span>
        </div>
        <div className="coding-tabs" style={{ display: "flex", gap: "6px" }}>
          {(["all", "progress", "activity", "rank"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`coding-tab-btn ${activeTab === tab ? "active" : ""}`}
              data-cursor="disable"
            >
              {tab === "all" ? "Overview" : tab === "progress" ? "Progress" : tab === "activity" ? "Activity" : "Rank"}
            </button>
          ))}
        </div>
        <div className="coding-streak-live">
          <span className="live-pulse"></span>
          <FaFire className="streak-fire" />
          <span>Active Streak: <strong>9 Days</strong></span>
        </div>
      </div>

      <div className="coding-stats-headline">
        <h3>Algorithmic Problem Solving & Placement Standing</h3>
        <p>Consistent daily practice across core Data Structures, Algorithms & Competitive Programming</p>
      </div>

      {/* Main Stats Grid */}
      <div className={`coding-grid tab-mode-${activeTab}`}>
        {/* Panel 1: Solved Progress & Breakdown */}
        {(activeTab === "all" || activeTab === "progress") && (
          <div className={`coding-card progress-card ${activeTab === "progress" ? "single-view" : ""}`}>
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
              <span className="hard-ratio-tag">⚡ 63.1% Medium &amp; Hard Problems ({percentage}% Platform Solved)</span>
            </div>
          </div>
        )}

        {/* Panel 2: Activity Heatmap & Consistency */}
        {(activeTab === "all" || activeTab === "activity") && (
          <div className={`coding-card activity-card ${activeTab === "activity" ? "single-view" : ""}`}>
            <div className="card-top">
              <div className="activity-month-selector">
                <MdOutlineDateRange className="card-icon" />
                <span>Jun 2026 – Aug 2026</span>
              </div>
              <div className="month-arrows">
                <button className="arrow-btn" aria-label="Previous month" data-cursor="disable"><MdArrowBackIos size={10} /></button>
                <button className="arrow-btn" aria-label="Next month" data-cursor="disable"><MdArrowForwardIos size={10} /></button>
              </div>
            </div>

            {/* Activity Heatmap Columns */}
            <div className="activity-heatmap">
              <div className="heatmap-month">
                <div className="month-label">Jun</div>
                <div className="heatmap-grid">
                  {month1Days.map((day, idx) => (
                    <div key={`m1-${idx}`} className={`heat-cell ${day.status}`}>
                      {day.status === "star" && <FaStar className="cell-star" />}
                    </div>
                  ))}
                </div>
              </div>

              <div className="heatmap-month">
                <div className="month-label">Jul</div>
                <div className="heatmap-grid">
                  {month2Days.map((day, idx) => (
                    <div key={`m2-${idx}`} className={`heat-cell ${day.status}`}>
                      {day.status === "star" && <FaStar className="cell-star" />}
                    </div>
                  ))}
                </div>
              </div>

              <div className="heatmap-month">
                <div className="month-label">Aug</div>
                <div className="heatmap-grid">
                  {month3Days.map((day, idx) => (
                    <div key={`m3-${idx}`} className={`heat-cell ${day.status}`}>
                      {day.status === "star" && <FaStar className="cell-star" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="heatmap-legend">
              <div className="legend-item">
                <span className="legend-box green"></span>
                <span>Questions</span>
              </div>
              <div className="legend-item">
                <FaStar className="legend-star" />
                <span>POTD question</span>
              </div>
            </div>

            {/* Streaks Banner */}
            <div className="streak-stats-row">
              <div className="streak-pill current">
                <span className="pill-title">Current Streak</span>
                <span className="pill-val">🔥 9 Days</span>
              </div>
              <div className="streak-pill max">
                <span className="pill-title">Max Streak</span>
                <span className="pill-val">⚡ 13 Days</span>
              </div>
              <div className="streak-pill global">
                <span className="pill-title">Global Max</span>
                <span className="pill-val">🌐 530 Days</span>
              </div>
            </div>
          </div>
        )}

        {/* Panel 3: Placement Leaderboard & Standing */}
        {(activeTab === "all" || activeTab === "rank") && (
          <div className={`coding-card leaderboard-card ${activeTab === "rank" ? "single-view" : ""}`}>
            <div className="card-top">
              <h4><FaTrophy className="card-icon trophy" /> Leaderboard Standing</h4>
              <span className="card-badge rank-badge">Rank #1313</span>
            </div>

            {/* Mini Podium */}
            <div className="leaderboard-podium">
              {leaderboardTop.map((user) => (
                <div key={user.rank} className={`podium-col rank-${user.rank}`}>
                  <div className="podium-avatar-wrap">
                    <div className="podium-avatar" style={{ background: user.avatarBg }}>
                      {user.name.charAt(0)}
                    </div>
                    {user.rank === 1 && <span className="podium-crown">👑</span>}
                  </div>
                  <span className="podium-name">{user.name.split(" ")[0]}</span>
                  <span className="podium-pts">{user.points}</span>
                  <div className={`podium-pillar pillar-${user.rank}`}>
                    <span>{user.rank}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Ketan's Spotlight User Card */}
            <div className="user-standing-card">
              <div className="user-avatar-box">
                <div className="user-avatar">KR</div>
                <span className="status-dot"></span>
              </div>
              <div className="user-details">
                <div className="user-name-row">
                  <span className="user-title">You (Ketan Rawat)</span>
                  <span className="user-pts-tag">9,810 Pts</span>
                </div>
                <div className="user-rank-row">
                  <span className="rank-highlight"><FaBolt className="rank-icon" /> 1313 Rank</span>
                  <span className="percentile-text">Placement Ready</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CodingStats;

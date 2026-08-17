import { MdSchool, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const educationData = [
  {
    institution: "National Institute of Technology, Jamshedpur",
    degree: "B.Tech in Electronics & Communication Engineering (Final Year)",
    duration: "2023 – 2027",
    score: null,
    highlight: true,
  },
  {
    institution: "Govt. H.S. School Boys, Bhander",
    degree: "Class XII · MP Board of Secondary Education (2021 – 2022)",
    duration: "2021 – 2022",
    score: "84.20%",
    highlight: false,
  },
  {
    institution: "Saraswati Vidhya Mandir, Bhander",
    degree: "Class X · MP Board of Secondary Education (2019 – 2020)",
    duration: "2019 – 2020",
    score: "96.00%",
    highlight: false,
  },
];

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        {/* Education Showcase Card */}
        <div className="education-showcase-card">
          <div className="education-card-header">
            <div className="edu-badge-tag">Academic Background</div>
            <h3>Education</h3>
            <p className="edu-subtitle">
              Formal engineering curriculum and academic foundations at premier institutions.
            </p>
          </div>

          <div className="education-list">
            {educationData.map((item, index) => (
              <div
                key={index}
                className={`education-item ${item.highlight ? "highlight-item" : ""}`}
              >
                <div className="edu-icon-wrap">
                  <MdSchool className="edu-main-icon" />
                </div>
                <div className="edu-details">
                  <div className="edu-header-row">
                    <h4>{item.institution}</h4>
                    <div className="edu-badges-wrap">
                      {item.score && <span className="edu-score-badge">{item.score}</span>}
                      <span className="edu-year-badge">{item.duration}</span>
                    </div>
                  </div>
                  <p className="edu-degree-text">{item.degree}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer info */}
        <div className="contact-footer">
          <div className="footer-author">
            Designed &amp; Developed with Passion by <span>Ketan Rawat</span>
          </div>
          <div className="footer-copyright">
            <MdCopyright /> 2026 · All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

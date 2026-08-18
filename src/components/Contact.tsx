import { MdSchool, MdCopyright } from "react-icons/md";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa6";
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
    <div className="contact-section section-container">
      <div className="contact-container">
        {/* Education Showcase Card */}
        <div className="education-showcase-card" id="education">
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

        {/* Simple Clean Contact Section */}
        <div className="contact-card" id="contact">
          <div className="contact-card-header">
            <div className="contact-badge-tag">Get in Touch</div>
            <h3>Contact</h3>
            <p className="contact-subtitle">
              Feel free to connect for opportunities, projects, or any questions.
            </p>
          </div>

          <div className="contact-links-grid">
            <a
              href="https://github.com/Ketanrawat2004"
              target="_blank"
              rel="noreferrer"
              className="contact-pill-item"
              aria-label="GitHub"
            >
              <div className="contact-icon-circle github-icon">
                <FaGithub />
              </div>
              <div className="contact-link-info">
                <span className="contact-link-title">GitHub</span>
                <span className="contact-link-handle">github.com/Ketanrawat2004</span>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/ketan-rawat-97a8aa2a0/"
              target="_blank"
              rel="noreferrer"
              className="contact-pill-item"
              aria-label="LinkedIn"
            >
              <div className="contact-icon-circle linkedin-icon">
                <FaLinkedinIn />
              </div>
              <div className="contact-link-info">
                <span className="contact-link-title">LinkedIn</span>
                <span className="contact-link-handle">linkedin.com/in/ketan-rawat</span>
              </div>
            </a>

            <a
              href="mailto:rawatketan06@gmail.com"
              className="contact-pill-item"
              aria-label="Email"
            >
              <div className="contact-icon-circle email-icon">
                <FaEnvelope />
              </div>
              <div className="contact-link-info">
                <span className="contact-link-title">Email</span>
                <span className="contact-link-handle">rawatketan06@gmail.com</span>
              </div>
            </a>
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

import {
  MdArrowOutward,
  MdCopyright,
  MdEmail,
  MdPhone,
  MdSchool,
  MdFileDownload,
} from "react-icons/md";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h3>Contact</h3>
          <p className="contact-subtitle">
            Let's connect! Open to software engineering roles, hackathons, and innovative collaborations.
          </p>
        </div>

        <div className="contact-grid">
          {/* Box 1: Direct Connect */}
          <div className="contact-card">
            <div className="contact-card-header">
              <span className="card-badge">Get in Touch</span>
              <h4>Direct Connect</h4>
            </div>
            <div className="contact-items">
              <a
                href="mailto:rawatketan06@gmail.com"
                className="contact-item"
                data-cursor="disable"
              >
                <div className="item-icon">
                  <MdEmail />
                </div>
                <div className="item-text">
                  <span className="item-label">Email</span>
                  <span className="item-val">rawatketan06@gmail.com</span>
                </div>
                <MdArrowOutward className="item-arrow" />
              </a>

              <a
                href="tel:+917489898361"
                className="contact-item"
                data-cursor="disable"
              >
                <div className="item-icon">
                  <MdPhone />
                </div>
                <div className="item-text">
                  <span className="item-label">Phone</span>
                  <span className="item-val">+91 7489898361</span>
                </div>
                <MdArrowOutward className="item-arrow" />
              </a>

              <a
                href="https://www.linkedin.com/in/ketan-rawat-97a8aa2a0/"
                target="_blank"
                rel="noreferrer"
                className="contact-item"
                data-cursor="disable"
              >
                <div className="item-icon">
                  <FaLinkedinIn />
                </div>
                <div className="item-text">
                  <span className="item-label">LinkedIn</span>
                  <span className="item-val">linkedin.com/in/ketan-rawat</span>
                </div>
                <MdArrowOutward className="item-arrow" />
              </a>
            </div>
          </div>

          {/* Box 2: Education */}
          <div className="contact-card">
            <div className="contact-card-header">
              <span className="card-badge">Academic Background</span>
              <h4>Education</h4>
            </div>
            <div className="education-timeline">
              <div className="edu-item">
                <div className="edu-icon">
                  <MdSchool />
                </div>
                <div className="edu-info">
                  <div className="edu-top">
                    <h5>National Institute of Technology, Jamshedpur</h5>
                    <span className="edu-year">2023 – 2027</span>
                  </div>
                  <p>B.Tech in Electronics &amp; Communication Engineering (Final Year)</p>
                </div>
              </div>

              <div className="edu-item">
                <div className="edu-icon">
                  <MdSchool />
                </div>
                <div className="edu-info">
                  <div className="edu-top">
                    <h5>Govt. H.S. School Boys, Bhander</h5>
                    <span className="edu-badge">84.20%</span>
                  </div>
                  <p>Class XII, MP Board of Secondary Education (2021 – 2022)</p>
                </div>
              </div>

              <div className="edu-item">
                <div className="edu-icon">
                  <MdSchool />
                </div>
                <div className="edu-info">
                  <div className="edu-top">
                    <h5>Saraswati Vidhya Mandir, Bhander</h5>
                    <span className="edu-badge">96.00%</span>
                  </div>
                  <p>Class X, MP Board of Secondary Education (2019 – 2020)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Box 3: Social & Resume */}
          <div className="contact-card contact-card-action">
            <div className="contact-card-header">
              <span className="card-badge">Profiles &amp; CV</span>
              <h4>Quick Links</h4>
            </div>
            <div className="social-links-grid">
              <a
                href="https://github.com/Ketanrawat2004"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                data-cursor="disable"
              >
                <FaGithub /> GitHub <MdArrowOutward />
              </a>
              <a
                href="https://www.linkedin.com/in/ketan-rawat-97a8aa2a0/"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                data-cursor="disable"
              >
                <FaLinkedinIn /> LinkedIn <MdArrowOutward />
              </a>
            </div>

            <a
              href="/Ketan_Rawat.pdf"
              target="_blank"
              rel="noreferrer"
              className="resume-download-card"
              data-cursor="disable"
            >
              <div className="resume-content">
                <MdFileDownload className="resume-icon" />
                <div>
                  <h6>Resume (PDF)</h6>
                  <span>Download latest CV</span>
                </div>
              </div>
              <MdArrowOutward />
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

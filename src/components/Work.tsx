import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward, MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";

const projects = [
  {
    title: "SecureFlow",
    category: "Enterprise Access Governance & Compliance Audit Platform",
    tools: "Python, FastAPI, React 18, TypeScript, PostgreSQL, Redis, Kafka, Docker, NGINX",
    image: "/images/secureflow.png",
    link: "https://secureflow.duckdns.org",
    github: "https://github.com/Ketanrawat2004/SecureFlow",
  },
  {
    title: "Pariksha · परीक्षा",
    category: "Cryptographic National Examination Integrity Platform",
    tools: "React, TypeScript, Supabase Realtime, TriShield Vault, AES-256-GCM, Razorpay",
    image: "/images/pariksha.png",
    link: "https://pariksha-platform.lovable.app",
    github: "https://github.com/Ketanrawat2004/pariksha-platform",
  },
  {
    title: "CampusBite",
    category: "Event-Driven Microservices Campus Food Delivery Ecosystem",
    tools: "React, Node.js, Express, MongoDB, Redis, Apache Kafka, Docker Compose, Razorpay",
    image: "/images/campusbite.png",
    link: "https://github.com/Ketanrawat2004/campusBite",
    github: "https://github.com/Ketanrawat2004/campusBite",
  },
  {
    title: "Bookztron",
    category: "Full-Stack MERN E-Commerce Web Application",
    tools: "React.js, Node.js, Express.js, MongoDB, JWT Auth, Razorpay API, Netlify, Vercel",
    image: "/images/bookztron.png",
    link: "https://bookztron-dev-branch.netlify.app/",
    github: "https://github.com/Ketanrawat2004/Bookztron",
  },
  {
    title: "Portfolio · 3D Developer Portfolio",
    category: "3D Interactive WebGL & Physics Portfolio Platform",
    tools: "React 18, TypeScript, Three.js, React Three Fiber, Rapier Physics, GSAP ScrollSmoother",
    image: "/images/portfolio_preview.png",
    link: "https://portfolio-ketan.onrender.com/",
    github: "https://github.com/Ketanrawat2004/Portfolio_Ketan",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tech Stack</span>
                          <p>{project.tools}</p>
                        </div>
                        <div className="carousel-actions" style={{ display: "flex", gap: "12px", marginTop: "18px", flexWrap: "wrap" }}>
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noreferrer"
                              data-cursor="disable"
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                                padding: "7px 16px",
                                borderRadius: "20px",
                                background: "rgba(94, 234, 212, 0.12)",
                                border: "1px solid var(--accentColor)",
                                color: "var(--accentColor)",
                                fontSize: "13px",
                                fontWeight: 500,
                                textDecoration: "none",
                                transition: "all 0.3s ease",
                              }}
                            >
                              Live Demo <MdArrowOutward />
                            </a>
                          )}
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noreferrer"
                              data-cursor="disable"
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                                padding: "7px 16px",
                                borderRadius: "20px",
                                background: "rgba(255, 255, 255, 0.06)",
                                border: "1px solid rgba(255, 255, 255, 0.2)",
                                color: "#eae5ec",
                                fontSize: "13px",
                                fontWeight: 500,
                                textDecoration: "none",
                                transition: "all 0.3s ease",
                              }}
                            >
                              <FaGithub /> GitHub <MdArrowOutward />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;

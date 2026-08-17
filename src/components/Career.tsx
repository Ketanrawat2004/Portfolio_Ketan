import "./styles/Career.css";

const achievements = [
  {
    year: "2026",
    role: "Semi-Finalist",
    org: "ET AI Hackathon 2.0 · The Economic Times & Unstop",
    desc: "Reached the semi-finalist stage in this nationwide AI hackathon, architecting intelligent generative AI workflows and scalable solutions for industry use cases.",
  },
  {
    year: "2026",
    role: "Grand Finalist",
    org: "Careers of the Future Hackathon · LIT School (Impact Entrepreneur Challenge)",
    desc: "Qualified for the grand finale in the Impact Entrepreneur Challenge by developing high-impact tech product prototypes solving future career & learning bottlenecks.",
  },
  {
    year: "2026",
    role: "Semi-Finalist",
    org: "CreaTech 2026 · Larsen & Toubro Limited (L&T)",
    desc: "Selected as a semi-finalist in L&T's flagship technology innovation challenge, recognized for creative engineering problem-solving and systems design.",
  },
  {
    year: "2026",
    role: "Qualified Round 1 (Ongoing)",
    org: "Adobe University Hackathon 2026 · Adobe",
    desc: "Successfully cleared Round 1 in Adobe's prestigious national university hackathon, competing against top engineering talent across India.",
  },
  {
    year: "2026",
    role: "Qualified Round 2",
    org: "HMEL Energy Quest 3.0 · HPCL-Mittal Energy Limited",
    desc: "Advanced to Round 2 by delivering data-driven analytical strategies and technology-enabled energy management solutions.",
  },
  {
    year: "2025",
    role: "National Finalist (Top 15)",
    org: "Nothing Incubator 2025 · Nothing Tech & Unstop",
    desc: "Selected among top 15 national finalist teams out of 10,450+ teams across India. Built innovative software architecture evaluated on system performance, scalability, and product design.",
  },
  {
    year: "2024",
    role: "Top 20 Finalist",
    org: "SupeRR Selector Hackathon · Rajasthan Royals & Unstop",
    desc: "Secured a position in the Additional Top 20 among 7,500+ participants for architecting auction strategy analytics and real-time team decision scenario modeling.",
  },
  {
    year: "2024–25",
    role: "Creative Head & Leadership",
    org: "Soft Skills Club, NSS & Dramatics Society · NIT Jamshedpur",
    desc: "Led creative direction, visual branding, and event execution for campus-wide workshops on communication, technical symposia, and theatre productions.",
  },
  {
    year: "2023–27",
    role: "Certifications & Academics",
    org: "TCS iON, HackerRank & NIT Jamshedpur",
    desc: "Effective Communication (TCS iON) · CSS Certificate (HackerRank) · Frontend Development (Oneroadmap) · Final-Year B.Tech in Electronics & Communication Engineering at NIT Jamshedpur.",
  },
];

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Achievements <span>&</span>
          <br /> Involvement
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {achievements.map((item, index) => (
            <div className="career-info-box" key={index}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{item.role}</h4>
                  <h5>{item.org}</h5>
                </div>
                <h3>{item.year}</h3>
              </div>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;

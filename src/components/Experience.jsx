import "../styles/Experience.css";

const experiences = [
  "5-month Internship at INSA",
  "Upwork freelance projects",
  "Hackathon Winner",
  "Learning at Jimma University (Software Engineering)",
  "Empowerher Training UI/UX",
  "LEAP Africa Leadership Training (6 months)",
  "Nigeria Tech4Dev Training (12 months)",
];

export default function Experience() {
  return (
    <section className="experience-section">
      <h2 className="section-titleE">Experience</h2>
      <ul className="experience-list">
        {experiences.map((role, idx) => (
          <li key={idx} className="experience-item">
            <span className="experience-role">{role}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

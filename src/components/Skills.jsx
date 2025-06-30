import "../styles/Skills.css";

export default function Skills() {
  const skills = [
    {
      name: "React.js",
      image: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
      description: "Building dynamic, fast, and responsive user interfaces using component-based architecture.",
    },
    {
      name: "Docker & Nginx",
      image: "https://cdn.worldvectorlogo.com/logos/docker.svg",
      image2: "https://cdn.worldvectorlogo.com/logos/nginx-1.svg",
      description: "Containerizing applications and setting up powerful reverse proxies and load balancers.",
    },
    {
      name: "Kubernetes",
      image: "https://cdn.worldvectorlogo.com/logos/kubernetes.svg",
      description: "Managing containerized applications at scale with automated deployment and scaling.",
    },
    {
      name: "Node.js",
      image: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
      description: "Building scalable backend applications using non-blocking, event-driven architecture.",
    },
    {
      name: "Express.js",
      image: "https://cdn.worldvectorlogo.com/logos/express-109.svg",
      description: "Creating RESTful APIs and backend services using a lightweight Node.js web framework.",
    },
    {
      name: "Postman",
      image: "https://cdn.worldvectorlogo.com/logos/postman.svg",
      description: "Testing, documenting, and collaborating on RESTful APIs efficiently.",
    },
    {
      name: "MongoDB",
      image: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
      description: "Working with NoSQL databases to store and query JSON-like documents.",
    },
    {
      name: "PostgreSQL",
      image: "https://cdn.worldvectorlogo.com/logos/postgresql.svg",
      description: "Using a powerful, open-source SQL database system for relational data.",
    },
    {
      name: "UI/UX Design",
      image: "https://cdn-icons-png.flaticon.com/512/1149/1149168.png",
      description: "Designing intuitive and visually appealing interfaces with a focus on user experience.",
    },
    {
      name: "DevOps (CI/CD)",
      image: "https://cdn-icons-png.flaticon.com/512/8756/8756255.png",
      description: "Automating development workflows using CI/CD pipelines for fast and reliable delivery.",
    },
    {
      name: "Blockchain Development",
      image: "https://cdn-icons-png.flaticon.com/512/11344/11344989.png",
      description: "Creating secure and decentralized apps using Ethereum, Solidity, and smart contracts.",
    },
  ];

  return (
    <section className="skills-section">
      <h2>My Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            <div className="skill-images">
              <img src={skill.image} alt={skill.name} />
              {skill.image2 && <img src={skill.image2} alt={`${skill.name} extra`} />}
            </div>
            <span className="skill-name">{skill.name}</span>
            <p className="skill-description">{skill.description}</p>
          </li>
        ))}
      </ul> 
    </section>
  );
}

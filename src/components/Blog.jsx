export default function Blog() {
  return (
    <section className="ssblog-section">
      <h2 className="section-title2">Blog</h2>
      <p>
        Coming soon! Stay tuned for my thoughts on tech, design, Blockchain, and development.
      </p>

      {/* New section: Upcoming posts list */}
      <div
        style={{
          marginTop: "2rem",
          padding: "1rem",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      >
        <h3 style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>Upcoming Posts</h3>
        <ul style={{ listStyle: "disc", paddingLeft: "1.5rem", color: "#555" }}>
          <li>Why Blockchain Matters in Africa</li>
          <li>Design Thinking for Developers</li>
          <li>How to Build Scalable React Apps</li>
          <li>Tech + Faith: My Journey as a Christian Engineer</li>
          <li>I Will Learn About DevOps: My Practical Guide</li>
          <li>How to Build the Best Networking Strategies as a Developer</li>
        </ul>
      </div>
    </section>
  );
}

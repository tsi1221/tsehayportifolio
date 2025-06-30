import "../styles/Contact.css";

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">Contact Me</h2>
        <p className="section-subtitle">I'd love to hear from you! 📬</p>

        <div className="contact-info">
          <p><strong>Telegram:</strong> @ts_e_ha_y_nesh</p>
          <p><strong>Phone:</strong> 0928505904</p>
          <p><strong>Email:</strong> <a href="mailto:tsehayneshbiru2@gmail.com">tsehayneshbiru2@gmail.com</a></p>
          <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/tsehaynesh-biruh-8681852a4/" target="_blank" rel="noreferrer">tsehaynesh-biruh</a></p>
          <p><strong>Location:</strong> Addis Ababa, Ethiopia</p>

          {/* 📄 Download CV Button */}
          <a
            href="/PledgeForm.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn download-cv"
          >
            📄 Download My CV
          </a>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required />
          <button type="submit" className="btn">Send Message</button>
        </form>
      </div>
    </section>
  );
}

import { useState } from "react";
import "../styles/Contact.css";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  // Optional: handle form submit event to show thank-you message
  const handleSubmit = (e) => {
    // We let the form do the default POST to Formspree,
    // but also show thank-you message instantly
    setSubmitted(true);
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">Contact Me</h2>
        <p className="section-subtitle">I'd love to hear from you! 📬</p>

        <div className="contact-info">
          <p><strong>Telegram:</strong> @ts_e_ha_y_nesh</p>
          <p><strong>Phone:</strong> 0928505904</p>
          <p><strong>Email:</strong> <a href="mailto:tsehayneshbiruh2@gmail.com">tsehayneshbiru2@gmail.com</a></p>
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

        {!submitted ? (
        <form
  className="contact-form"
  action="https://formspree.io/f/mkgznnjg"
  method="POST"
  onSubmit={() => setSubmitted(true)}
>
  <input type="text" name="name" placeholder="Your Name" required />
  <input type="email" name="email" placeholder="Your Email" required />
  <textarea name="message" placeholder="Your Message" rows="5" required />
  <button type="submit" className="btn">Send Message</button>
</form>

        ) : (
          <p className="thank-you-msg">✅ Thank you! Your message has been sent.</p>
        )}
      </div>
    </section>
  );
}

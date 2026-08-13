export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact-card">
          <span className="eyebrow">Get in touch</span>
          <h2>Let&lsquo;s build something together.</h2>
          <p>
            Have a project in mind? Reach out to SSBA Enterprise and we&apos;ll
            help you take it from idea to launch.
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-label">Location</span>
              <span className="contact-value">Biratnagar, Nepal</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Company</span>
              <span className="contact-value">SSBA Enterprise Pvt. Ltd.</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Services</span>
              <span className="contact-value">Web · Mobile · IoT</span>
            </div>
          </div>

          <a
            href="mailto:hello@ssbaenterprise.com"
            className="btn btn-primary contact-btn"
          >
            Start a conversation
          </a>
        </div>
      </div>
    </section>
  );
}

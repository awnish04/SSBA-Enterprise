export default function Contact() {
  const email = "suman.ssba@gmail.com";
  const subject = encodeURIComponent("Project enquiry – SSBA Enterprise");

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
              <span className="contact-value">SSBA Enterprise</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Email</span>
              <a
                href={`mailto:${email}?subject=${subject}`}
                className="contact-value contact-email-link"
              >
                {email}
              </a>
            </div>
          </div>

          <a
            href={`mailto:${email}?subject=${subject}`}
            className="btn btn-primary contact-btn"
          >
            Start a conversation
          </a>
        </div>
      </div>
    </section>
  );
}

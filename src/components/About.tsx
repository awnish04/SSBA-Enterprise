export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <span className="eyebrow">About SSBA Enterprise</span>
            <h2>A focused team building practical software.</h2>

            {/* Mission pull-quote */}
            <blockquote className="about-mission">
              &ldquo;To build practical software and prototypes by coordinating
              project management, design, development and quality assurance
              within one focused team.&rdquo;
            </blockquote>

            <p>
              Based in Biratnagar, Nepal, SSBA Enterprise is an IT company
              building web-based platforms, mobile applications and IoT
              solutions. Our portfolio spans community event management, LPG
              distribution monitoring, esports leagues and more — a range of
              projects and prototypes developed by a small, dedicated team.
            </p>
            <p>
              Our team covers project management, frontend and UI/UX, backend
              and database engineering, and quality assurance so every project
              is handled end-to-end under one roof.
            </p>
            <div className="about-tags">
              <span className="tag">Web Platforms</span>
              <span className="tag">Mobile Apps</span>
              <span className="tag">IoT Solutions</span>
              <span className="tag">UI/UX Design</span>
              <span className="tag">Backend &amp; APIs</span>
              <span className="tag">QA &amp; Testing</span>
            </div>
          </div>
          <div className="about-image">
            <img
              src="https://images.pexels.com/photos/6804068/pexels-photo-6804068.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Development team collaborating on software projects in a modern office"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

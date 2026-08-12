export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <span className="eyebrow">About SSBA Enterprise</span>
            <h2>A focused team delivering real-world software.</h2>
            <p>
              Based in Biratnagar, Nepal, SSBA Enterprise Pvt. Ltd. is an IT
              company building web-based platforms, mobile applications, and IoT
              solutions. From community event management to LPG distribution
              monitoring and large-scale esports leagues, we turn ideas into
              shipped products.
            </p>
            <p>
              Our small, dedicated team covers project management, frontend and
              UI/UX, backend and database engineering, and quality assurance —
              so every project is handled end-to-end under one roof.
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
              alt="Development team working together in a modern office"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

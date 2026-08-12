export default function Hero() {
  return (
    <header className="site-header" id="top">
      <div className="hero container">
        <div className="hero-badge">IT Company · Biratnagar, Nepal</div>
        <h1 className="hero-title">
          Building software that moves businesses forward.
        </h1>
        <p className="hero-subtitle">
          SSBA Enterprise is an IT company based in Biratnagar, Nepal,
          delivering web platforms, mobile apps, and IoT solutions for clients
          across gaming, logistics, events, and beyond.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View our work
          </a>
          <a href="#contact" className="btn btn-ghost">
            Get in touch
          </a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">6+</span>
            <span className="stat-label">Projects delivered</span>
          </div>
          <div className="stat">
            <span className="stat-num">4</span>
            <span className="stat-label">Team members</span>
          </div>
          <div className="stat">
            <span className="stat-num">3</span>
            <span className="stat-label">Service areas</span>
          </div>
          <div className="stat">
            <span className="stat-num">£300K+</span>
            <span className="stat-label">Prize pools powered</span>
          </div>
        </div>
      </div>
    </header>
  );
}
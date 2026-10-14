import { NumberTicker } from "@/components/ui/number-ticker";

export default function Hero() {
  return (
    <header className="site-header" id="top">
      <div className="hero container">
        <div className="hero-badge">Code · Design · Deploy</div>
        <h1 className="hero-title">
          Building software that moves businesses forward.
        </h1>
        <p className="hero-subtitle">
          SSBA Enterprise is an IT company based in Biratnagar, Nepal,
          building web platforms, mobile apps, IoT solutions and prototypes
          through a focused team covering design, development and QA.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View our work
          </a>
          <a href="#contact" className="btn btn-ghost">
            Get in touch
          </a>
        </div>

        <div className="hero-stats border-1 p-2 rounded-2xl border-[rgb(36,51,82)]">
          <div className="stat">
            <span className="stat-num">
              <NumberTicker className="stat-num" value={7} />
            </span>
            <span className="stat-label">Portfolio Projects</span>
          </div>
          <div className="stat">
            <span className="stat-num">
              <NumberTicker className="stat-num" value={4} />
            </span>
            <span className="stat-label">Team Members</span>
          </div>
          <div className="stat">
            <span className="stat-num">
              <NumberTicker className="stat-num" value={6} />
            </span>
            <span className="stat-label">Capability Areas</span>
          </div>
          <div className="stat">
            <span className="stat-num">
              <NumberTicker className="stat-num" value={1} />
            </span>
            <span className="stat-label">Active Client Project</span>
          </div>
        </div>
      </div>
    </header>
  );
}

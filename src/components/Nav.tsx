"use client";

import { useEffect, useRef, useState } from "react";
import { navItems } from "@/data/nav";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#about");
  const navRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });

  useEffect(() => {
    const setNavHeight = () => {
      if (navRef.current) {
        document.documentElement.style.setProperty(
          "--nav-h",
          `${navRef.current.offsetHeight}px`,
        );
      }
    };
    setNavHeight();
    window.addEventListener("resize", setNavHeight);
    return () => window.removeEventListener("resize", setNavHeight);
  }, []);

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.slice(1));
    const handleScroll = () => {
      const offset = window.scrollY + 120;
      let current = "#about";

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) continue;
        if (offset >= section.offsetTop) {
          current = `#${id}`;
        }
      }

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateIndicator = () => {
      if (!linksRef.current) return;
      const activeLink = linksRef.current.querySelector<HTMLAnchorElement>(
        `a[href="${activeSection}"]`,
      );
      if (activeLink) {
        setIndicator({
          left: activeLink.offsetLeft,
          width: activeLink.offsetWidth,
          opacity: 1,
        });
      }
    };
    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeSection, isOpen]);

  return (
    <div ref={navRef} className="nav-wrapper">
      <nav className="nav container">
        <a href="#top" className="brand">
          <span className="brand-mark">SSBA</span>
          <span className="brand-name">Enterprise</span>
        </a>
        <button
          className={`nav-toggle ${isOpen ? "active" : ""}`}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>
        <ul ref={linksRef} className={`nav-links ${isOpen ? "open" : ""}`}>
          <span
            className="nav-indicator"
            style={{
              transform: `translateX(${indicator.left}px)`,
              width: indicator.width,
              opacity: indicator.opacity,
            }}
          />
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={activeSection === item.href ? "active" : ""}
                onClick={() => {
                  setIsOpen(false);
                  setActiveSection(item.href);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

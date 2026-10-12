"use client";

import { services } from "@/data/services";
import { ServiceCarousel } from "@/components/ui/services-card";

export default function Services() {
  const servicesForCarousel = services.map((service) => ({
    ...service,
    gradient:
      (service as { gradient?: string }).gradient ??
      "from-(-var(--primary)) to-(var(--secondary))",
  })) as Parameters<typeof ServiceCarousel>[0]["services"];

  return (
    <section id="services" className="section section-alt">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">What we do</span>
          <h2>Services</h2>
          <p className="section-lead">
            End-to-end capabilities covering web, mobile, IoT, design, and
            quality assurance.
          </p>
        </div>
      </div>
      <ServiceCarousel services={servicesForCarousel} />
    </section>
  );
}

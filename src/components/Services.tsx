"use client";

import {
  Code,
  Smartphone,
  Cpu,
  Palette,
  Server,
  CheckCircle,
} from "lucide-react";
import { ServiceCarousel, type Service } from "@/components/ui/services-card";

const services: Service[] = [
  {
    number: "001",
    title: "Web Development",
    description:
      "Fast, scalable web platforms built with modern frameworks and clean architecture.",
    icon: Code,
    gradient: "from-[#1a2840] to-[#243352]",
  },
  {
    number: "002",
    title: "Mobile Apps",
    description:
      "Cross-platform mobile apps with native-feel UI and smooth performance.",
    icon: Smartphone,
    gradient: "from-[#0e2a3a] to-[#0f3a4d]",
  },
  {
    number: "003",
    title: "IoT Solutions",
    description:
      "Connected devices and sensors feeding real-time dashboards and automation.",
    icon: Cpu,
    gradient: "from-[#12203a] to-[#1d3a66]",
  },
  {
    number: "004",
    title: "UI/UX Design",
    description:
      "Clean, intentional interfaces designed around how people actually use your product.",
    icon: Palette,
    gradient: "from-[#0e2233] to-[#0b4a5c]",
  },
  {
    number: "005",
    title: "Backend & APIs",
    description:
      "Reliable APIs, databases, and infrastructure that scale with your product.",
    icon: Server,
    gradient: "from-[#182844] to-[#1e3f73]",
  },
  {
    number: "006",
    title: "QA & Testing",
    description:
      "Thorough testing and bug tracking so what ships actually works.",
    icon: CheckCircle,
    gradient: "from-[#0d2a2e] to-[#0a4550]",
  },
];

export default function Services() {
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
      <ServiceCarousel services={services} />
    </section>
  );
}

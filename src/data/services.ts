import { Code, Smartphone, Cpu, Palette, Monitor } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Service = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
};

export const services: Service[] = [
  {
    number: "001",
    title: "Web Development",
    description:
      "Fast, scalable web platforms built with modern frameworks and clean architecture.",
    icon: Code,
    image: "/assets/images/services/web-development.jpg",
  },
  {
    number: "002",
    title: "Web Applications",
    description:
      "Robust, full-featured web applications tailored to your business workflows and scale.",
    icon: Monitor,
    image: "/assets/images/services/web-applications.jpg",
  },
  {
    number: "003",
    title: "Mobile Applications",
    description:
      "Cross-platform mobile apps with native-feel UI and smooth performance.",
    icon: Smartphone,
    image: "/assets/images/services/mobile-apps.jpg",
  },
  {
    number: "004",
    title: "UI/UX Design",
    description:
      "Clean, intentional interfaces designed around how people actually use your product.",
    icon: Palette,
    image: "/assets/images/services/ui-ux-design.jpg",
  },
  {
    number: "005",
    title: "IoT Solutions",
    description:
      "Connected devices and sensors feeding real-time dashboards and automation.",
    icon: Cpu,
    image: "/assets/images/services/iot-solutions.jpg",
  },
];

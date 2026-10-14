import { Code, Smartphone, Cpu, Palette, Monitor, Database, TestTube } from "lucide-react";
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
    title: "Web Platforms & Applications",
    description:
      "Responsive web platforms for presenting information, managing workflows and offering online services. Our portfolio includes event management systems and distribution tracking platforms.",
    icon: Code,
    image: "/assets/images/services/web-development.jpg",
  },
  {
    number: "002",
    title: "Mobile Applications",
    description:
      "Cross-platform mobile apps with native-feel UI and smooth performance. We have built booking and fleet-management apps as part of our project portfolio.",
    icon: Smartphone,
    image: "/assets/images/services/mobile-apps.jpg",
  },
  {
    number: "003",
    title: "UI/UX Design",
    description:
      "Clean, intentional interfaces designed around how people actually use your product. Design is applied across all of our web and mobile projects from wireframe to final build.",
    icon: Palette,
    image: "/assets/images/services/ui-ux-design.jpg",
  },
  {
    number: "004",
    title: "Backend & APIs",
    description:
      "Scalable server-side logic, RESTful APIs and database design underpinning all of our platforms. We cover architecture, implementation and integration as a core capability.",
    icon: Database,
    image: "/assets/images/services/web-applications.jpg",
  },
  {
    number: "005",
    title: "IoT Solutions",
    description:
      "Connected devices and sensors feeding real-time dashboards and automation workflows. Our IoT capability has been applied in monitoring and fleet-tracking prototypes.",
    icon: Cpu,
    image: "/assets/images/services/iot-solutions.jpg",
  },
  {
    number: "006",
    title: "QA & Testing",
    description:
      "Structured quality assurance covering functional testing, regression checks and issue tracking. QA is embedded within our team to support reliable delivery across all projects.",
    icon: TestTube,
    image: "/assets/images/services/web-development.jpg",
  },
];

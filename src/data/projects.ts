export type Project = {
  title: string;
  tag: string;
  desc: string;
  image: string;
  upcoming?: boolean;
};

export const projects: Project[] = [
  {
    title: "Community Event Management System",
    tag: "Web Platform",
    desc: "A centralized platform for organizing, scheduling, and managing community events with registration, attendance tracking, and reporting.",
    image:
      "https://images.pexels.com/photos/9275222/pexels-photo-9275222.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
  {
    title: "LPG Distribution & Monitoring System (LDMS)",
    tag: "Web Platform",
    desc: "An end-to-end system for tracking LPG cylinder distribution, inventory, deliveries, and customer monitoring in real time.",
    image:
      "https://images.pexels.com/photos/27741082/pexels-photo-27741082.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
  {
    title: "UK E-Sports League",
    tag: "Gaming Platform",
    desc: "Competitive gaming league platform with team management, match scheduling, live brackets, and leaderboard tracking.",
    image:
      "https://images.pexels.com/photos/9072293/pexels-photo-9072293.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
  {
    title: "WareWise XR",
    tag: "Warehouse XR Platform",
    desc: "An extended-reality (AR/VR) system for warehouse operations guided picking, inventory visualization, and staff training through immersive interfaces.",
    image:
      "https://www.crown.com/content/dam/crown/images/blog/en-us/Blog--VR-blog-with-11-steps.jpg",
    upcoming: true,
  },
  {
    title: "Car Rental App",
    tag: "Mobile + IoT",
    desc: "A car rental platform with booking, fleet management, GPS tracking, and keyless access integration for a seamless rental experience.",
    image:
      "https://images.pexels.com/photos/97079/pexels-photo-97079.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
  {
    title: "IoT Smart Device Solutions",
    tag: "Internet of Things",
    desc: "Custom IoT projects connecting sensors and smart devices to cloud dashboards for monitoring, automation, and data-driven insights.",
    image:
      "https://images.pexels.com/photos/16888144/pexels-photo-16888144.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
];

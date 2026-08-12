export type TeamMember = {
  name: string;
  role: string;
  detail: string;
  initials: string;
  c1: string;
  c2: string;
};

export const team: TeamMember[] = [
  {
    name: "Suman Kumar Sardar",
    role: "Project Manager",
    detail: "Scope, timeline, and meeting notes coordination",
    initials: "SK",
    c1: "#0ea5e9",
    c2: "#0369a1",
  },
  {
    name: "Awnish Mehta",
    role: "Frontend & UI/UX",
    detail: "Screens and NativeWind styling",
    initials: "AM",
    c1: "#10b981",
    c2: "#047857",
  },
  {
    name: "Bishnu Prasad Pokhrel",
    role: "QA Engineer · Marketing · Sales",
    detail: "Testing and bug tracking",
    initials: "BP",
    c1: "#f59e0b",
    c2: "#b45309",
  },
  {
    name: "Shivanjay Prasai",
    role: "Backend Developer",
    detail: "GraphQL, Prisma, and database",
    initials: "SP",
    c1: "#8b5cf6",
    c2: "#6d28d9",
  },
];

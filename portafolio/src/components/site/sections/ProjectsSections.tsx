import Section from "@/components/site/Section";
import ProjectCard, { Project } from "@/components/site/ProjectCard";

import AppCongresoMedicina from "@/assets/projects/AppCongresoMedicina.png";
import stockwatchImg from "@/assets/projects/stockwatch.png";
import studyplannerImg from "@/assets/projects/study-planner.png";

const projects: Project[] = [
  {
    title: "WebApp 33° Congreso Nacional de Investigación e Innovación en Medicina",
    description:
      "Digital platform designed to facilitate event organization and participation. It allows attendees to quickly and easily view schedules, locations, and details of congress events.",
    tech: ["React", "JavaScript", "Tailwind", "MongoDB"],
    github: "https://github.com/rhindet/CongresoApp",
    demo: "https://app.congresomedicinauanl.mx/",
    image: AppCongresoMedicina,
  },
  {
    title: "StockWatch",
    description:
      "Dashboard to visualize stock trends and alerts with Recharts.",
    tech: ["React", "Recharts", "REST APIs"],
    github: "https://github.com/",
    demo: "#",
    image: stockwatchImg,
  },
  {
    title: "Study Planner",
    description: "Plan, track, and analyze study sessions with friendly UX.",
    tech: ["React", "Zod", "React Hook Form"],
    github: "https://github.com/",
    demo: "#",
    image: studyplannerImg,
  },
];

export default function ProjectsSection() {
  return (
    <Section
      id="projects"
      title="<Projects/>"
      description="Selected work that highlights my interests and skills."
    >
      <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </Section>
  );
}

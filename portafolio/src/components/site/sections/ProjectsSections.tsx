import Section from "@/components/site/Section";
import ProjectCard, { Project } from "@/components/site/ProjectCard";

import taskflowImg from "@/assets/projects/taskflow.png";
import stockwatchImg from "@/assets/projects/stockwatch.png";
import studyplannerImg from "@/assets/projects/study-planner.png";

const projects: Project[] = [
  {
    title: "TaskFlow",
    description:
      "A minimal task manager with drag-and-drop and offline support.",
    tech: ["React", "TypeScript", "IndexedDB"],
    github: "https://github.com/",
    demo: "#",
    image: taskflowImg,
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

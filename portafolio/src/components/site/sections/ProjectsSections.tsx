import Section from "@/components/site/Section";
import ProjectCard, { Project } from "@/components/site/ProjectCard";

import AppCongresoMedicina from "@/assets/projects/AppCongresoMedicina.png";
import MultimediaController from "@/assets/projects/MultimediaController.jpg";
import FaceMaskDetection from "@/assets/projects/FaceMaskDetection.jpg";

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
    title: "Multimedia Controller v1.0.1",
    description:
      "Multimedia control using hand gesture tracking.",
    tech: ["Python", "OpenCV", "Matplotlib"],
    github: "https://github.com/PatoDaCelt/Controlador-Multimedia-Progra-Visual",
    demo: "",
    image: MultimediaController,
  },
  {
    title: "Face Mask Detector v2.0.0",
    description: "A system that uses machine learning to predict whether the person captured by the camera is wearing a mask correctly or not. The new version integrates an Arduino control.",
    tech: ["Python", "OpenCV", "Matplotlib", "Machine Learning", "Kaggle Dataset"],
    github: "https://github.com/PatoDaCelt/Faces-Mask-Detection",
    demo: "",
    image: FaceMaskDetection,
  },
  {
    title: "Face Mask Detector v2.0.0",
    description: "A system that uses machine learning to predict whether the person captured by the camera is wearing a mask correctly or not. The new version integrates an Arduino control.",
    tech: ["Python", "OpenCV", "Matplotlib", "Machine Learning", "Kaggle Dataset"],
    github: "https://github.com/PatoDaCelt/Faces-Mask-Detection",
    demo: "",
    image: FaceMaskDetection,
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

import Section from "@/components/site/Section";
import ProjectCard, { Project } from "@/components/site/ProjectCard";

import AppCongresoMedicina from "@/assets/projects/AppCongresoMedicina.png";
import MultimediaController from "@/assets/projects/MultimediaController.jpg";
import FaceMaskDetection from "@/assets/projects/FaceMaskDetection.jpg";
import SistemaParkingGecko from "@/assets/projects/SistemaParkingGecko.png";
import AligatorStock from "@/assets/projects/AligatorStock.png";

const projects: Project[] = [
  {
    title: "WebApp 33° Congreso Nacional de Investigación e Innovación en Medicina v1.0.0",
    description:
      "Digital platform designed to facilitate event organization and participation. It allows attendees to quickly and easily view schedules, locations, and details of congress events.",
    tech: ["React", "JavaScript", "Vite", "Tailwind", "MongoDB"],
    github: "https://github.com/PatoDaCelt/sistema-stock-aligator",
    demo: "https://app.congresomedicinauanl.mx/",
    image: AppCongresoMedicina,
  },
  {
    title: "Aligator Stock System",
    description:
      "Complete system for managing products, customers,and sales, with real-time stock control, which solves the problem of a micro-enterprise by updating its inventory management system.",
    tech: ["React", "Vite", "TypeScript", "Djago", "Python", "PostgreSQL"],
    github: "https://github.com/rhindet/CongresoApp",
    demo: "https://youtu.be/xlOBw2E7760",
    image: AligatorStock,
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
    demo: "https://youtu.be/8oRnbbAYXYA",
    image: FaceMaskDetection,
  },
  {
    title: "Gecko Parking System v3.1.0",
    description: "Parking Gecko System is an application designed to control and manage vehicle access to a parking lot. It allows you to keep track of entries and exits, generate payment amounts for users, and optimize parking space management.",
    tech: ["Java", "NetBeans", "MySQL"],
    github: "https://github.com/PatoDaCelt/SistemaParkingGecko",
    demo: "",
    image: SistemaParkingGecko,
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

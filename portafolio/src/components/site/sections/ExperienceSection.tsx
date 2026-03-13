import Section from "@/components/site/Section";
import { ExperienceCard } from "@/components/site/ExperienceCard.tsx";

export default function ExperienceSection() {
  const logoFacMed =
    "https://upload.wikimedia.org/wikipedia/commons/7/7f/Logo_Facultad_Medicina_UANL.png";


  const experiences = [
    {
      id: 1,
      title: "Intern in Innovation and Technological Development",
      company: "Subdirección de Investigación Fac. Medicina UANL",
      duration: "May 2025 – Oct 2025",
      ach: [
        "Contributed to the development and research of technological innovation projects.",
        "Applied teamwork, time management, and problem-solving abilities.",
      ],
      logo: logoFacMed
    },
    {
      id: 2,
      title: "Technical Support and Technological Services (Social Service)",
      company: "Coordinación de Servicios Tecnológicos Fac. Arquitectura UANL",
      duration: "May 2025 – Oct 2025",
      ach: [
        "Preventive and corrective maintenance of hardware and software.",
        "Attention and resolution of technical incidents involving teaching and administrative staff.",
      ],
      logo: ""
    },
  ];

  return (
    <Section
      id="experience"
      title="<Experience/>"
      description="Professional experience, internships and social service."
    >
      <div className="flex flex-col w-full gap-6 mt-8">
        {experiences.map((experience) => (
          <ExperienceCard
            key={experience.id}
            title={experience.title}
            company={experience.company}
            duration={experience.duration}
            ach={experience.ach}
            logo={experience.logo}
          />
        ))}
      </div>
    </Section>
  );
}

import Section from "@/components/site/Section.tsx";
import StudyCard from "@/components/site/StudyCard.tsx";

export default function StudiesSection() {
  const logoUANL =
    "https://upload.wikimedia.org/wikipedia/commons/9/90/Logo_de_la_UANL.svg";
  const logoUDEMY =
    "https://upload.wikimedia.org/wikipedia/commons/e/e3/Udemy_logo.svg";
  const logoCISCO =
    "https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg";
  const logoSantander =
    "https://upload.wikimedia.org/wikipedia/commons/c/c0/Santander_Bank_Polska_S.A.svg";

  const studies = [
    {
      id: 1,
      logo: logoUANL,
      altText: "Logo UANL",
      title: "B.S. in Software Engineering",
      subtitle: "Universidad Autónoma de Nuevo León • 2021 – Present",
      imgClass: "w-10 mb-2",
      topics: [
        "Data Structures & Algorithms",
        "Operating Systems",
        "OOP",
        "Software modeling",
        "Development methodologies",
        "Computer security",
        "Fundamentals of IA",
      ],
    },
    {
      id: 2,
      logo: logoSantander,
      altText: "Logo Santander",
      title: "Fundamentos y masterclass de Power BI",
      subtitle: "33 hours",
      topics: [
        "Power BI Basics",
        "Data Import",
        "Data Analisys",
        "Report Creation",
        "Filter Panel",
        "Conditional Formatting",
      ],
    },
    {
      id: 3,
      logo: logoUDEMY,
      altText: "Logo UDEMY",
      title: "The Python Mega Course: Build 10 Real World Applications",
      subtitle: "6 hours",
      topics: [
        "Fundamentals",
        "Web Scratch",
        "Data Analisys",
        "OOP",
        "GUIs",
        "Web Apps",
        "APIs",
        "Flask and Django",
      ],
    },
    {
      id: 4,
      logo: logoCISCO,
      altText: "Logo CISCO",
      title: "Introduction to Cybersecurity",
      subtitle: "6 hours",
      topics: [
        "Cyber Best Practices",
        "Cybersecurity",
        "Network Vulnerabilities",
        "Privacy and Data Confidentiality",
        "Threat Detection",
      ],
    },
  ];

  return (
    <Section
      id="studies"
      title="<Studies/>"
      description="Academic background and relevant courses/certifications."
    >
      <div className="grid gap-6 md:grid-cols-3 mt-8">
        {studies.map((study) => (
          <StudyCard
            key={study.id}
            logo={study.logo}
            altText={study.altText}
            title={study.title}
            subtitle={study.subtitle}
            topics={study.topics}
            imgClass={study.imgClass}
          />
        ))}
      </div>
    </Section>
  );
}
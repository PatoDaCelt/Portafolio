import Section from "@/components/site/Section";

export default function StudiesSection() {
  const logoUANL =
    "https://upload.wikimedia.org/wikipedia/commons/9/90/Logo_de_la_UANL.svg";
  const logoUDEMY =
    "https://upload.wikimedia.org/wikipedia/commons/e/e3/Udemy_logo.svg";
  const logoCISCO =
    "https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg";

  return (
    <Section
      id="studies"
      title="<Studies/>"
      description="Academic background and relevant courses/certifications."
    >
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border bg-card p-6">
          <img
            src={logoUANL}
            alt="Logo UANL"
            className="w-8 mb-2"
            loading="lazy"
          />
          <h3 className="text-lg font-semibold">Software Engineering</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Universidad Autónoma de Nuevo León • 2021 – Present
          </p>
          <ul className="mt-4 list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li>Data Structures & Algorithms</li>
            <li>Operating Systems</li>
            <li>OOP</li>
            <li>Software modeling</li>
            <li>Development methodologies</li>
            <li>Computer security</li>
            <li>Fundamentals of IA</li>
          </ul>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <img
            src={logoUDEMY}
            alt="Logo UDEMY"
            className="w-20 mb-2 bg-white"
            loading="lazy"
          />
          <h3 className="text-lg font-semibold">
            The Python Mega Course: Build 10 Real World Applications
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">33 hours</p>
          <ul className="mt-4 list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li>Fundamentals</li>
            <li>Web Scratch</li>
            <li>Data Analisys</li>
            <li>OOP</li>
            <li>GUIs</li>
            <li>Web Apps</li>
            <li>APIs</li>
            <li>Flask and Django</li>
          </ul>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <img
            src={logoCISCO}
            alt="Logo UDEMY"
            className="w-20 mb-2 bg-white"
            loading="lazy"
          />
          <h3 className="text-lg font-semibold">
            Introduction to Cybersecurity
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">6 hours</p>
          <ul className="mt-4 list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li>Cyber Best Practices</li>
            <li>Cybersecurity</li>
            <li>Network Vulnerabilities</li>
            <li>Privacy and Data Confidentiality</li>
            <li>Threat Detection</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}

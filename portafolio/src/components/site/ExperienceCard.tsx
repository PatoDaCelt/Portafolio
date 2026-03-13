export interface Experience {
  title: string;
  company: string;
  duration: string;
  ach: string[];
  logo?: string;
}

export function ExperienceCard({
  title,
  company,
  duration,
  ach,
  logo,
}: Experience) {
  const imgDefault =
    "https://upload.wikimedia.org/wikipedia/commons/0/0e/DefaultImage.png";

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 w-full rounded-2xl shadow-sm border transition-all hover:shadow-md">
      {/* Logo */}
      <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 md:w-24 md:h-24 dark:bg-white rounded-xl p-3">
        {logo ? (
          <img
            src={logo}
            alt={`${company}`}
            className="max-w-full max-h-full object-contain"
            loading="lazy"
          />
        ) : (
          // Image Default
          <img
            src={imgDefault}
            alt={`${company}`}
            className="max-w-full max-h-full object-contain"
          />
        )}
      </div>

      {/* Contenedor de la Información */}
      <div className="flex flex-col flex-grow">
        {/* Puesto, Empresa y Duración */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
          <div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-lg font-medium text-muted-foreground mb-2">
              {company}
            </p>
            <span className="mt-2 md:mt-0 text-sm font-normal text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-zinc-800 px-4 py-1.5 rounded-full w-fit whitespace-nowrap">
              {duration}
            </span>
          </div>

          {/* Lista de Logros */}
          <ul className="list-disc ml-5 mt-4 space-y-2 text-muted-foreground">
            {ach.map((ach, index) => (
              <li key={index} className="pl-1">
                {ach}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

interface Study {
  logo?: string;
  altText: string;
  imgClass?: string; //Agrega un estilo especifico al logo
  title: string;
  subtitle: string;
  topics: string[];
}

export default function StudyCard({
  logo,
  altText,
  imgClass = "w-20 mb-2 bg-white rounded",
  title,
  subtitle,
  topics,
}: Study) {
  return (
    <div className="rounded-lg border bg-card p-6 transition-all hover:shadow-md">
      <img src={logo} alt={altText} className={imgClass} loading="lazy" />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
      <ul className="mt-4 list-disc pl-5 text-sm text-muted-foreground space-y-1">
        {topics.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>
    </div>
  );
}

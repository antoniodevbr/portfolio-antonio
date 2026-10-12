import { useTranslations } from "next-intl";

type Education = { degree: string; school: string; start: string; end: string };

export function EducationList() {
  const t = useTranslations("Education");
  const items = t.raw("items") as Education[];

  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li key={item.degree} className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
          <div>
            <p className="font-medium">{item.degree}</p>
            <p className="text-sm text-muted">{item.school}</p>
          </div>
          <span className="shrink-0 font-mono text-xs text-muted">
            {item.start} — {item.end}
          </span>
        </li>
      ))}
    </ul>
  );
}

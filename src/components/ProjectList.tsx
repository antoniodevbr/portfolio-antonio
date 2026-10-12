import { useTranslations } from "next-intl";
import { Tags } from "./Tags";

type Project = {
  name: string;
  description: string;
  highlights: string[];
  tags: string[];
};

export function ProjectList() {
  const t = useTranslations("Projects");
  const items = t.raw("items") as Project[];

  return (
    <div className="flex flex-col gap-4">
      {items.map((item) => (
        <article key={item.name} className="rounded-xl border border-panel-border p-5">
          <h3 className="font-medium">{item.name}</h3>
          <p className="mt-2 leading-relaxed text-foreground/85">{item.description}</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-foreground/80">
            {item.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
          <Tags items={item.tags} />
        </article>
      ))}
    </div>
  );
}

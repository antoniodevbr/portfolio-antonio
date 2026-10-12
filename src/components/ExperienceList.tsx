import { useTranslations } from "next-intl";
import { Tags } from "./Tags";

type Experience = {
  company: string;
  role: string;
  start: string;
  end: string;
  location: string;
  description: string;
  highlights: string[];
  tags: string[];
};

export function ExperienceList() {
  const t = useTranslations("Experience");
  const items = t.raw("items") as Experience[];

  return (
    <ol className="relative flex flex-col gap-8 border-l border-panel-border pl-6">
      {items.map((item) => (
        <li key={`${item.company}-${item.start}`} className="relative">
          <span className="absolute -left-[29px] top-1.5 size-2.5 rounded-full border border-panel-border bg-foreground/70" />
          <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
            <h3 className="font-medium">
              {item.role} <span className="text-muted">· {item.company}</span>
            </h3>
            <span className="shrink-0 font-mono text-xs text-muted">
              {item.start} — {item.end || t("present")}
            </span>
          </div>
          {item.location && <p className="text-sm text-muted">{item.location}</p>}
          <p className="mt-2 leading-relaxed text-foreground/85">{item.description}</p>
          {item.highlights.length > 0 && (
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-foreground/80">
              {item.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          )}
          <Tags items={item.tags} />
        </li>
      ))}
    </ol>
  );
}

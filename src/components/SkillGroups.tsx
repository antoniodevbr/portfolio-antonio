import { useTranslations } from "next-intl";
import { Tags } from "./Tags";

type SkillGroup = { label: string; items: string[] };

export function SkillGroups() {
  const t = useTranslations("Skills");
  const groups = t.raw("groups") as SkillGroup[];

  return (
    <dl className="flex flex-col gap-4">
      {groups.map((group) => (
        <div key={group.label}>
          <dt className="text-sm font-medium">{group.label}</dt>
          <dd className="-mt-1">
            <Tags items={group.items} />
          </dd>
        </div>
      ))}
    </dl>
  );
}

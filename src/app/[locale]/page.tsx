import { use } from "react";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Header } from "@/components/Header";
import { ProfileImage } from "@/components/ProfileImage";
import { ExperienceList } from "@/components/ExperienceList";
import { Panel } from "@/components/Panel";
import { ProjectList } from "@/components/ProjectList";
import { SkillGroups } from "@/components/SkillGroups";
import { EducationList } from "@/components/EducationList";
import { profile } from "@/content/profile";

export default function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  setRequestLocale(locale);

  const t = useTranslations();

  return (
    <>
      <Header />
      <main className="mx-auto flex max-w-3xl flex-col gap-6 px-4 pb-16 pt-24 sm:px-6">
        <Panel className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
          <ProfileImage />
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-semibold tracking-tight">{profile.name}</h1>
            <p className="text-muted">
              {t("Hero.role")} · {t("Hero.location")}
            </p>
            <p className="leading-relaxed text-foreground/85">{t("Hero.bio")}</p>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 self-center rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-black transition hover:bg-foreground/85 sm:self-start"
            >
              {t("Hero.downloadCv")}
            </a>
          </div>
        </Panel>

        <Panel id="about" title={t("About.title")}>
          <p className="leading-relaxed text-foreground/85">{t("About.text")}</p>
        </Panel>

        <Panel id="experience" title={t("Experience.title")}>
          <ExperienceList />
        </Panel>

        <Panel id="projects" title={t("Projects.title")}>
          <ProjectList />
        </Panel>

        <Panel id="skills" title={t("Skills.title")}>
          <SkillGroups />
        </Panel>

        <Panel id="education" title={t("Education.title")}>
          <EducationList />
        </Panel>

        <Panel id="contact" title={t("Contact.title")}>
          <p className="mb-4 leading-relaxed text-foreground/85">{t("Contact.text")}</p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-lg border border-panel-border px-4 py-2 text-sm transition hover:bg-white/5"
            >
              {profile.email}
            </a>
            {profile.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-panel-border px-4 py-2 text-sm transition hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>
        </Panel>
      </main>
      <footer className="pb-8 text-center text-xs text-muted">
        © {new Date().getFullYear()} {profile.name}. {t("Footer.rights")}
      </footer>
    </>
  );
}

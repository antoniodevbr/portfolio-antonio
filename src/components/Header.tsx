import { useTranslations } from "next-intl";
import { LocaleSwitcher } from "./LocaleSwitcher";

export function Header() {
  const t = useTranslations("Nav");

  return (
    <header className="fixed inset-x-0 top-0 z-10 border-b border-panel-border bg-black/80 backdrop-blur">
      <nav className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <div className="flex gap-3 text-sm text-muted sm:gap-4">
          <a href="#about" className="transition hover:text-foreground">{t("about")}</a>
          <a href="#experience" className="transition hover:text-foreground">{t("experience")}</a>
          <a href="#projects" className="transition hover:text-foreground">{t("projects")}</a>
          <a href="#contact" className="transition hover:text-foreground">{t("contact")}</a>
        </div>
        <LocaleSwitcher label={t("language")} />
      </nav>
    </header>
  );
}

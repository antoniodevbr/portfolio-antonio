type Props = {
  id?: string;
  title?: string;
  className?: string;
  children: React.ReactNode;
};

export function Panel({ id, title, className = "", children }: Props) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 rounded-2xl border border-panel-border bg-panel p-6 sm:p-8 ${className}`}
    >
      {title && <h2 className="mb-4 text-lg font-semibold tracking-tight">{title}</h2>}
      {children}
    </section>
  );
}

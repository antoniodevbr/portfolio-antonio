export function Tags({ items }: { items: string[] }) {
  if (items.length === 0) return null;
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {items.map((tag) => (
        <span key={tag} className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-muted">
          {tag}
        </span>
      ))}
    </div>
  );
}

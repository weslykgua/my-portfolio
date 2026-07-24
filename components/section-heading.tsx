export function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-xs text-brand">{index}</span>
      <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
        {title}
      </h2>
    </div>
  )
}

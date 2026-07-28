export function SectionHeading({ title }: { index?: string; title: string }) {
  return (
    <div className="border-b border-border/80 pb-4">
      <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        {title}
      </h2>
    </div>
  )
}


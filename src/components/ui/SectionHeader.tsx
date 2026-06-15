interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-12 md:mb-16 ${align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-2xl"}`}
    >
      {eyebrow && (
        <span
          className={`inline-block text-sm font-semibold uppercase tracking-wider mb-3 ${
            light ? "text-accent" : "text-primary"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 heading-display ${
          light ? "text-white" : "text-secondary"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-base md:text-lg leading-relaxed ${
            light ? "text-white/85" : "text-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

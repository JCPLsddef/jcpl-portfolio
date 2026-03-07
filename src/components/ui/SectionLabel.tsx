interface Props {
  label: string;
  className?: string;
}

export default function SectionLabel({ label, className = "" }: Props) {
  return (
    <p
      className={`section-label text-[12px] font-semibold uppercase tracking-[0.14em] text-sv-text-muted ${className}`}
    >
      {label}
    </p>
  );
}

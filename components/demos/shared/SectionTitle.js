export default function SectionTitle({ eyebrow, title, description, align = "left", className = "" }) {
  const alignment = align === "center" ? "mx-auto items-center text-center" : "items-start text-left";

  return (
    <div className={`flex max-w-2xl flex-col ${alignment} ${className}`}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#d55b32]">{eyebrow}</p>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
        {title}
      </h2>
      {description ? <p className="mt-4 text-base leading-7 text-[#5f6963]">{description}</p> : null}
    </div>
  );
}

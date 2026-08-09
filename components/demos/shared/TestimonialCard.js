export default function TestimonialCard({ quote, name, role, className = "" }) {
  return (
    <figure className={`rounded-3xl border border-black/10 bg-white p-6 shadow-sm ${className}`}>
      <blockquote className="text-lg leading-8">“{quote}”</blockquote>
      <figcaption className="mt-5 text-sm text-[#68716c]">
        <span className="font-semibold text-[#18221d]">{name}</span>
        {role ? ` — ${role}` : null}
      </figcaption>
    </figure>
  );
}

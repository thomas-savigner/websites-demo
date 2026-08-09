import Link from "next/link";

const baseClasses =
  "group inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4";

export default function CtaButton({
  href,
  children,
  variant = "dark",
  className = "",
  ...props
}) {
  const variants = {
    dark: "bg-[#18221d] text-white hover:bg-[#2a3931] focus-visible:outline-[#18221d]",
    light: "bg-white text-[#18221d] hover:bg-[#f3f0e9] focus-visible:outline-white",
    outline:
      "border border-current bg-transparent text-current hover:bg-black/5 focus-visible:outline-current",
  };
  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
        <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}

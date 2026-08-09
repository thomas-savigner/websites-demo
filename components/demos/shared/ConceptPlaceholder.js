import DemoFooter from "./DemoFooter";
import DemoNavbar from "./DemoNavbar";
import CtaButton from "./CtaButton";

export default function ConceptPlaceholder({ title, category, accent = "#e66b3d" }) {
  return (
    <div className="flex min-h-screen flex-col bg-[#f5f3ee]">
      <DemoNavbar backHref="/demo" />
      <main className="flex flex-1 items-center px-5 py-20 sm:px-8">
        <section className="mx-auto w-full max-w-4xl text-center">
          <span className="inline-flex rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.18em]" style={{ backgroundColor: `${accent}18`, color: accent }}>
            {category}
          </span>
          <h1 className="mt-7 text-balance text-5xl font-semibold tracking-[-0.055em] sm:text-7xl">{title}</h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-[#68716c]">
            Le décor de cette démonstration sera conçu lors de la prochaine étape.
          </p>
          <CtaButton href="/demo" className="mt-9">Revenir à la collection</CtaButton>
        </section>
      </main>
      <DemoFooter />
    </div>
  );
}

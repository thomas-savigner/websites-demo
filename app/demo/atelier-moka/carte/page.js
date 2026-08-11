import Image from "next/image";
import Link from "next/link";
import { foodSections, menuSections, quickLinks } from "./carte-data";

export const metadata = {
  title: "La carte — Atelier Moka",
  description: "Cafés de spécialité, thés, petit déjeuner et brunch à l’Atelier Moka, Paris 11e.",
};

const heroImage = "/images/demos/restaurant-cafe/carte-hero.png";

function MenuItem({ item }) {
  return (
    <li className="border-b border-[#2b211d]/12 py-5 last:border-b-0 sm:py-6">
      <div className="flex items-baseline gap-3">
        <h3 className="font-serif text-[1.35rem] leading-tight tracking-[-0.025em] sm:text-2xl">
          {item.name}
        </h3>
        <span className="min-w-4 flex-1 border-b border-dotted border-[#2b211d]/30" aria-hidden="true" />
        <p className="shrink-0 text-sm font-semibold tabular-nums text-[#a64f35] sm:text-base">{item.price}</p>
      </div>
      <div className="mt-2 flex flex-wrap items-start gap-x-3 gap-y-2 pr-10 text-sm leading-6 text-[#71635c]">
        <p>{item.description}</p>
        {item.signature ? (
          <span className="rounded-full bg-[#a64f35]/10 px-2 py-0.5 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#93452f]">
            Maison
          </span>
        ) : null}
      </div>
    </li>
  );
}

function MenuSection({ section }) {
  return (
    <section id={section.id} className="scroll-mt-28 border-t border-[#2b211d]/25 pt-7 sm:pt-9">
      <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#a64f35]">{section.eyebrow}</p>
      <h2 className="mt-3 font-serif text-3xl tracking-[-0.04em] sm:text-4xl">{section.title}</h2>
      <p className="mt-3 max-w-xl text-sm leading-6 text-[#71635c]">{section.note}</p>
      <ul className="mt-5 sm:mt-7">
        {section.items.map((item) => (
          <MenuItem key={item.name} item={item} />
        ))}
      </ul>
    </section>
  );
}

function CategoryLinks() {
  return (
    <nav aria-label="Accès rapide à la carte" className="sticky top-0 z-40 border-y border-[#2b211d]/10 bg-[#f6f0e6]/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1440px] gap-2 overflow-x-auto px-5 py-3 [scrollbar-width:none] sm:px-8 lg:justify-center lg:px-10">
        {quickLinks.map(([label, href]) => (
          <a key={href} href={href} className="shrink-0 rounded-full border border-[#2b211d]/20 px-4 py-2 text-xs font-semibold transition hover:border-[#a64f35] hover:bg-[#a64f35] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a64f35]">
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default function CartePage() {
  return (
    <div className="min-h-screen bg-[#f6f0e6] text-[#2b211d] selection:bg-[#a64f35] selection:text-white">
      <header className="relative flex min-h-[630px] flex-col overflow-hidden bg-[#28211d] text-white sm:min-h-[680px]">
        <Image
          src={heroImage}
          alt="Table de petit déjeuner dressée à l’Atelier Moka, vue du dessus"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#211915]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/35" />

        <nav aria-label="Navigation principale" className="relative z-10 mx-auto flex h-20 w-full max-w-[1440px] items-center justify-between gap-5 px-5 sm:px-8 lg:px-10">
          <Link href="/demo/atelier-moka" className="shrink-0 font-serif text-2xl font-semibold tracking-[-0.04em]">
            Atelier Moka
          </Link>
          <div className="hidden items-center gap-7 text-sm font-medium md:flex">
            <a href="#boissons" className="transition-opacity hover:opacity-60">Boissons</a>
            <a href="#cuisine" className="transition-opacity hover:opacity-60">À manger</a>
            <Link href="/demo/atelier-moka#lieu" className="transition-opacity hover:opacity-60">Le lieu</Link>
          </div>
          <Link href="/demo/atelier-moka#contact" className="rounded-full bg-white px-4 py-2.5 text-xs font-semibold text-[#2b211d] transition hover:bg-[#f0ded2] sm:px-5 sm:py-3 sm:text-sm">
            Réserver
          </Link>
        </nav>

        <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 items-end px-5 pb-12 pt-24 sm:px-8 sm:pb-16 lg:px-10 lg:pb-20">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#f0b49b]">À boire · À manger · Toute la journée</p>
            <h1 className="mt-5 text-balance font-serif text-6xl leading-[0.92] tracking-[-0.055em] sm:text-7xl lg:text-[6.25rem]">La carte</h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/82 sm:text-lg">
              Des cafés choisis avec soin, des assiettes de saison et des douceurs préparées sur place.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-2 border-t border-white/25 pt-5 text-sm text-white/75">
              <span>Du lundi au vendredi · 8h — 22h</span>
              <span>Le week-end · 9h — 23h</span>
            </div>
          </div>
        </div>
      </header>

      <CategoryLinks />

      <main>
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
          <section className="grid gap-8 border-b border-[#2b211d]/15 pb-16 sm:pb-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#a64f35]">La sélection du moment</p>
            <p className="max-w-3xl font-serif text-3xl leading-[1.18] tracking-[-0.035em] sm:text-4xl lg:text-5xl">
              Une carte courte, vivante, pensée pour les matins tranquilles comme pour les déjeuners qui s’éternisent.
            </p>
          </section>

          <div className="grid gap-20 py-16 sm:py-24 lg:grid-cols-2 lg:gap-x-24 lg:gap-y-28">
            <div id="boissons" className="scroll-mt-28 space-y-20 lg:space-y-28">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#a64f35]">01 — Boissons</p>
                <h2 className="mt-4 font-serif text-5xl tracking-[-0.05em] sm:text-6xl">Dans la tasse</h2>
              </div>
              {menuSections.map((section) => (
                <MenuSection key={section.id} section={section} />
              ))}
            </div>

            <div id="cuisine" className="scroll-mt-28 space-y-20 lg:space-y-28 lg:border-l lg:border-[#2b211d]/15 lg:pl-24">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#a64f35]">02 — Cuisine</p>
                <h2 className="mt-4 font-serif text-5xl tracking-[-0.05em] sm:text-6xl">Dans l’assiette</h2>
              </div>
              {foodSections.map((section) => (
                <MenuSection key={section.id} section={section} />
              ))}
            </div>
          </div>

          <aside className="grid gap-7 border-y border-[#2b211d]/20 py-8 text-sm leading-6 text-[#71635c] sm:grid-cols-2 lg:grid-cols-[1fr_1fr_auto] lg:items-center">
            <p><span className="font-semibold text-[#2b211d]">Allergènes</span><br />La liste complète est disponible auprès de notre équipe.</p>
            <p><span className="font-semibold text-[#2b211d]">Fait maison</span><br />Nos recettes peuvent évoluer selon les arrivages.</p>
            <p className="text-xs uppercase tracking-[0.16em]"><span className="mr-3 text-[#a64f35]">●</span>Prix nets · Service compris</p>
          </aside>
        </div>

        <section className="bg-[#a64f35] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-10">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#f2c0ad]">Atelier Moka · Paris 11e</p>
              <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight tracking-[-0.045em] sm:text-5xl">Une table vous attend.</h2>
            </div>
            <Link href="/demo/atelier-moka#contact" className="inline-flex min-h-12 w-fit items-center justify-center rounded-full bg-[#f6f0e6] px-6 text-sm font-semibold text-[#2b211d] transition hover:-translate-y-0.5 hover:bg-white">
              Réserver une table
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-[#26211e] px-5 py-10 text-white sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
          <div><p className="font-serif text-3xl">Atelier Moka</p><p className="mt-2 text-sm text-white/50">24 rue des Ateliers · Paris 11e</p></div>
          <div className="flex flex-wrap gap-6 text-sm">
            <Link href="/demo/atelier-moka" className="hover:text-[#d99275]">Retour au site</Link>
            <a href="mailto:bonjour@atelier-moka.example" className="hover:text-[#d99275]">Contact</a>
            <Link href="/demo" className="hover:text-[#d99275]">Toutes les démos</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

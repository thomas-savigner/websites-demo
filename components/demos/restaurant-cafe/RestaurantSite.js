"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Reveal from "@/components/demos/shared/Reveal";

const images = {
  hero: "/images/demos/restaurant-cafe/hero.jpg",
  interior: "/images/demos/restaurant-cafe/interior.jpg",
  dishes: [
    "/images/demos/restaurant-cafe/dish-1.jpg",
    "/images/demos/restaurant-cafe/dish-2.jpg",
    "/images/demos/restaurant-cafe/dish-3.jpg",
    "/images/demos/restaurant-cafe/coffee.jpg",
  ],
  gallery: [1, 2, 3, 4].map((number) => `/images/demos/restaurant-cafe/gallery-${number}.jpg`),
};

const dishes = [
  ["Avocado toast", "Pain au levain, avocat, œuf parfait, graines torréfiées", "14 €"],
  ["Croque Moka", "Pain de campagne, jambon blanc, comté affiné, crème maison", "16 €"],
  ["Granola maison", "Yaourt fermier, fruits frais, granola croustillant", "9 €"],
  ["Flat White", "Double espresso, lait micro-moussé", "4,50 €"],
];

const navItems = [
  ["La carte", "#carte"],
  ["Le lieu", "#lieu"],
  ["Notre cuisine", "#cuisine"],
  ["Avis", "#avis"],
  ["Contact", "#contact"],
];

function ButtonLink({ href, children, light = false, outline = false }) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${
        outline
          ? "border border-white/50 text-white hover:border-white hover:bg-white hover:text-[#26211e]"
          : light
            ? "bg-[#f6f0e6] text-[#2b211d] hover:bg-white"
            : "bg-[#a64f35] text-white hover:bg-[#8f402b]" 
      }`}
    >
      {children}
    </a>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${scrolled || open ? "border-black/10 bg-[#f6f0e6]/95 text-[#2b211d] shadow-sm backdrop-blur-xl" : "border-transparent text-white"}`}>
      <nav aria-label="Navigation principale" className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 lg:px-10">
        <a href="#accueil" className="font-serif text-2xl font-semibold tracking-[-0.04em]" onClick={() => setOpen(false)}>Atelier Moka</a>
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map(([label, href]) => <a key={href} href={href} className="text-sm font-medium transition-opacity hover:opacity-60">{label}</a>)}
        </div>
        <a href="#contact" className={`hidden rounded-full px-5 py-3 text-sm font-semibold transition lg:inline-flex ${scrolled ? "bg-[#2b211d] text-white hover:bg-[#a64f35]" : "bg-white text-[#2b211d] hover:bg-[#f0ded2]"}`}>Réserver une table</a>
        <button type="button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Fermer le menu" : "Ouvrir le menu"} onClick={() => setOpen(!open)} className="grid size-11 place-items-center rounded-full border border-current/30 lg:hidden">
          <span aria-hidden="true" className="text-xl">{open ? "×" : "≡"}</span>
        </button>
      </nav>
      {open ? (
        <div id="mobile-menu" className="border-t border-black/10 bg-[#f6f0e6] px-5 pb-6 text-[#2b211d] lg:hidden">
          {navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="block border-b border-black/10 py-4 text-lg">{label}</a>)}
        </div>
      ) : null}
    </header>
  );
}

function SectionHeading({ kicker, children, light = false }) {
  return (
    <div>
      <p className={`mb-4 text-xs font-bold uppercase tracking-[0.22em] ${light ? "text-[#d99275]" : "text-[#a64f35]"}`}>{kicker}</p>
      <h2 className="max-w-3xl font-serif text-4xl leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-6xl">{children}</h2>
    </div>
  );
}

export default function RestaurantSite() {
  return (
    <div className="bg-[#f6f0e6] text-[#2b211d] selection:bg-[#a64f35] selection:text-white">
      <Header />
      <main>
        <section id="accueil" className="relative flex min-h-[92svh] items-end overflow-hidden bg-[#29231f] text-white">
          <Image src={images.hero} alt="Salle lumineuse et chaleureuse de l’Atelier Moka" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/72 via-black/35 to-black/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20" />
          <Reveal className="relative mx-auto w-full max-w-[1440px] px-5 pb-12 pt-36 sm:px-8 sm:pb-16 lg:px-10 lg:pb-20">
            <div className="max-w-3xl">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-[#f0b49b]">Café · Cuisine · Paris 11e</p>
              <h1 className="text-balance font-serif text-5xl leading-[0.98] tracking-[-0.055em] sm:text-7xl lg:text-[5.8rem]">Le café de quartier où l’on prend vraiment le temps.</h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">Du café de spécialité, une cuisine de saison et des brunchs généreux dans une atmosphère chaleureuse au cœur de Paris.</p>
              <div className="mt-8 flex flex-wrap gap-3"><ButtonLink href="/demo/atelier-moka/carte" light>Découvrir la carte</ButtonLink><ButtonLink href="#contact" outline>Réserver</ButtonLink></div>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-2 border-t border-white/25 pt-5 text-sm text-white/80"><span><i className="mr-2 inline-block size-2 rounded-full bg-[#d99275]" />Ouvert aujourd’hui · 8h — 22h</span><span>Paris 11e</span></div>
          </Reveal>
        </section>

        <section id="carte" className="scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
          <div className="mx-auto max-w-[1440px]">
            <Reveal><SectionHeading kicker="Nos incontournables">À la carte aujourd’hui</SectionHeading></Reveal>
            <Reveal className="mt-12 mb-8 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4" stagger={0.09}>
              {dishes.map(([name, description, price], index) => (
                <article key={name} data-reveal-item className="group">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-t-[9rem] rounded-b-2xl bg-[#ddcdbd]">
                    <Image src={images.dishes[index]} alt={name} fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw" className="object-cover transition duration-700 ease-out group-hover:scale-[1.035]" />
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-4"><div><h3 className="font-serif text-2xl">{name}</h3><p className="mt-2 text-sm leading-6 text-[#6e625c]">{description}</p></div><span className="shrink-0 pt-1 font-semibold text-[#a64f35]">{price}</span></div>
                </article>
              ))}
              
            </Reveal>
            <div className="mt-10 text-center"><ButtonLink href="/demo/atelier-moka/carte" >Découvrir la carte</ButtonLink></div>
          </div>
        </section>

        <section id="boissons" className="scroll-mt-20 bg-[#e8ddcf] px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
          <div className="mx-auto max-w-[1440px]">
            <Reveal><SectionHeading kicker="Nos boissons">Cafés, thés et jus maison</SectionHeading></Reveal>
            <Reveal className="mt-12 mb-8 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4" stagger={0.09}>
              {dishes.map(([name, description, price], index) => (
                <article key={name} data-reveal-item className="group">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-t-[9rem] rounded-b-2xl bg-[#ddcdbd]">
                    <Image src={images.dishes[index]} alt={name} fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw" className="object-cover transition duration-700 ease-out group-hover:scale-[1.035]" />
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-4"><div><h3 className="font-serif text-2xl">{name}</h3><p className="mt-2 text-sm leading-6 text-[#6e625c]">{description}</p></div><span className="shrink-0 pt-1 font-semibold text-[#a64f35]">{price}</span></div>
                </article>
              ))}
            </Reveal>
            <div className="mt-10 text-center">
              <ButtonLink href="/demo/atelier-moka/carte" >Découvrir la carte</ButtonLink>
            </div>
          </div>
        </section>


        <section id="cuisine" className="scroll-mt-20 bg-[#302925] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-10">
          <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <Reveal className="relative min-h-[520px] overflow-hidden rounded-[2px_120px_2px_2px]"><Image src={images.interior} alt="L’intérieur vivant de l’Atelier Moka" fill sizes="(max-width: 1023px) 100vw, 50vw" className="object-cover" /></Reveal>
            <Reveal>
              <SectionHeading kicker="Notre cuisine" light>Simple, frais, bien fait.</SectionHeading>
              <p className="mt-7 max-w-xl text-lg leading-8 text-white/68">Nous travaillons une carte volontairement courte, renouvelée au fil des saisons, avec des produits sélectionnés auprès de producteurs que nous connaissons.</p>
              <div className="mt-10 divide-y divide-white/15 border-y border-white/15">
                {[["01", "Produits de saison", "Une carte courte qui évolue régulièrement."], ["02", "Café de spécialité", "Des grains sélectionnés et torréfiés avec soin."], ["03", "Fait maison", "Des assiettes préparées chaque jour sur place."]].map(([number, title, text]) => (
                  <div key={title} className="grid grid-cols-[3rem_1fr] gap-3 py-5"><span className="text-xs text-[#d99275]">{number}</span><div><h3 className="font-serif text-xl">{title}</h3><p className="mt-1 text-sm text-white/55">{text}</p></div></div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section id="lieu" aria-label="Galerie de l’Atelier Moka" className="scroll-mt-20 bg-[#e8ddcf] px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
          <Reveal className="mx-auto grid max-w-[1440px] grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-12 lg:grid-rows-2">
            {images.gallery.map((src, index) => (
              <div key={src} data-reveal-item className={`relative min-h-56 overflow-hidden ${index === 0 ? "col-span-2 lg:col-span-5 lg:row-span-2 lg:min-h-[680px]" : index === 1 ? "lg:col-span-7 lg:min-h-[330px]" : "lg:col-span-3 lg:min-h-[330px]"}`}>
                <Image src={src} alt={["Petit déjeuner à l’Atelier Moka", "Le comptoir de café de spécialité", "La terrasse parisienne", "Une assiette de saison"][index]} fill sizes="(max-width: 1023px) 50vw, 45vw" className="object-cover transition duration-700 hover:scale-[1.025]" />
              </div>
            ))}
            <div className="col-span-2 flex min-h-56 items-end bg-[#a64f35] p-7 text-white lg:col-span-4 lg:min-h-[330px]"><p className="font-serif text-3xl leading-tight">Du matin au soir,<br />toujours à votre rythme.</p></div>
          </Reveal>
        </section>

        <section id="avis" className="scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
          <div className="mx-auto max-w-[1440px]">
            <Reveal><SectionHeading kicker="Vos mots">Ils reviennent pour le café. Et souvent pour le brunch.</SectionHeading></Reveal>
            <Reveal className="mt-12 grid gap-5 lg:grid-cols-3" stagger={0.1}>
              {[["Camille", "Une vraie adresse de quartier. Très bon café, cuisine simple et accueil chaleureux."], ["Julien", "Le brunch est généreux sans tomber dans le cliché. Très belle découverte."], ["Sarah", "Super ambiance pour travailler le matin et déjeuner ensuite."]].map(([name, quote]) => (
                <figure key={name} data-reveal-item className="flex min-h-64 flex-col justify-between border border-[#cbbdaf] bg-[#fffaf3] p-7 sm:p-9"><div><p aria-label="5 étoiles sur 5" className="text-lg tracking-[0.2em] text-[#a64f35]">★★★★★</p><blockquote className="mt-7 font-serif text-2xl leading-9">“{quote}”</blockquote></div><figcaption className="mt-8 text-sm font-bold uppercase tracking-[0.16em]">{name}</figcaption></figure>
              ))}
            </Reveal>
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 bg-[#a64f35] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-10">
          <div className="mx-auto grid max-w-[1440px] overflow-hidden bg-[#f1e7d9] text-[#2b211d] lg:grid-cols-[1fr_0.85fr]">
            <Reveal className="p-7 sm:p-12 lg:p-16">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#a64f35]">Informations</p>
              <h2 className="mt-4 font-serif text-5xl tracking-[-0.045em] sm:text-6xl">Atelier Moka</h2>
              <address className="mt-8 not-italic text-lg leading-8"><p>24 rue des Ateliers<br />Paris 11e</p><p className="mt-6">Lundi — vendredi : 8h — 22h<br />Samedi — dimanche : 9h — 23h</p><a href="tel:+33184000021" className="mt-6 inline-block underline decoration-[#a64f35] underline-offset-4">01 84 00 00 21</a></address>
              <div className="mt-9"><ButtonLink href="#contact">Réserver une table</ButtonLink></div>
            </Reveal>
            <div className="relative min-h-[440px] overflow-hidden bg-[#332a26]" aria-label="Plan graphique du quartier">
              <div className="absolute -left-12 top-24 h-3 w-[120%] -rotate-12 bg-[#7f6a5f]" /><div className="absolute -left-10 top-64 h-2 w-[120%] rotate-6 bg-[#6a5950]" /><div className="absolute left-1/3 top-0 h-full w-3 rotate-[22deg] bg-[#7f6a5f]" /><div className="absolute right-1/4 top-0 h-full w-2 -rotate-[15deg] bg-[#6a5950]" />
              <div className="absolute left-[52%] top-[48%] grid size-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-[10px] border-[#f1e7d9] bg-[#a64f35] shadow-2xl"><span className="font-serif text-3xl text-white">M</span></div>
              <p className="absolute bottom-7 left-7 text-xs font-bold uppercase tracking-[0.2em] text-white/60">Paris · 11e</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#26211e] px-5 py-10 text-white sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-7 sm:flex-row sm:items-end sm:justify-between"><div><p className="font-serif text-3xl">Atelier Moka</p><p className="mt-2 text-sm text-white/50">Paris</p></div><div className="flex gap-6 text-sm"><a href="#" className="hover:text-[#d99275]">Instagram</a><a href="mailto:bonjour@atelier-moka.example" className="hover:text-[#d99275]">Contact</a><Link href="/demo" className="hover:text-[#d99275]">Toutes les démos</Link></div></div>
        <div className="mx-auto mt-9 max-w-[1440px] border-t border-white/10 pt-5 text-xs text-white/35">Concept de démonstration</div>
      </footer>
    </div>
  );
}

import Image from "next/image";
import { getAssetPath } from "@/lib/getAssetPath";
import Link from "next/link";
import Reveal from "@/components/demos/shared/Reveal";

const base = getAssetPath("/images/demos/consultant/");

const services = [
  ["Diagnostic organisationnel", "Identifier les blocages et les priorités."],
  ["Structuration des processus", "Clarifier qui fait quoi et comment."],
  ["Pilotage de l’activité", "Mettre en place les bons indicateurs."],
  ["Accompagnement au changement", "Faire évoluer les pratiques sans désorganiser l’équipe."],
];

const steps = [
  ["Comprendre", "Entretiens et analyse de l’existant."],
  ["Prioriser", "Identification des sujets réellement structurants."],
  ["Construire", "Solutions, processus et outils adaptés."],
  ["Accompagner", "Mise en œuvre et ajustements."],
];

const metrics = [
  ["+40", "missions accompagnées"],
  ["12 ans", "d’expérience"],
  ["4,9 / 5", "satisfaction"],
  ["5 à 80", "collaborateurs"],
];

const testimonials = [
  ["Marc", "Dirigeant", "Nous avons enfin un fonctionnement compréhensible par toute l’équipe."],
  ["Élodie", "Associée", "L’accompagnement a permis de faire émerger les vrais sujets sans ajouter de complexité."],
  ["François", "Directeur", "Une approche très concrète, avec des solutions directement applicables."],
];

const faqs = [
  ["Combien de temps dure une mission ?", "De quelques semaines à plusieurs mois selon le besoin."],
  ["Travaillez-vous uniquement à Paris ?", "Les missions peuvent être réalisées sur site ou à distance."],
  ["À qui s’adresse l’accompagnement ?", "Principalement aux dirigeants de TPE et PME et à leurs équipes."],
  ["Comment commence une mission ?", "Par un échange permettant de comprendre la situation et le besoin."],
];

function Arrow({ diagonal = false }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 fill-none stroke-current" strokeWidth="1.7">
      {diagonal ? <path d="M5 15 15 5m-7 0h7v7" /> : <path d="M3 10h14m-5-5 5 5-5 5" />}
    </svg>
  );
}

function PrimaryButton({ href, children, light = false }) {
  return (
    <a
      href={href}
      className={`group inline-flex min-h-12 items-center justify-center gap-3 px-6 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 ${
        light ? "bg-[#f5f1e8] text-[#102d35] hover:bg-white" : "bg-[#153943] text-white hover:bg-[#245463]"
      }`}
    >
      {children}
      <span className="transition-transform duration-300 group-hover:translate-x-1"><Arrow /></span>
    </a>
  );
}

function Eyebrow({ children, inverse = false }) {
  return (
    <p className={`flex items-center gap-3 text-[11px] font-bold uppercase tracking-[.22em] ${inverse ? "text-[#bccbc0]" : "text-[#667d71]"}`}>
      <span className={`h-px w-8 ${inverse ? "bg-[#a8b8ac]" : "bg-[#809589]"}`} />
      {children}
    </p>
  );
}

export default function ConsultantSite() {
  return (
    <div className="bg-[#f5f1e8] text-[#15343c] selection:bg-[#aebdab] selection:text-[#102d35]">
      <header className="sticky top-0 z-50 border-b border-[#15343c]/10 bg-[#f5f1e8]/95 backdrop-blur-xl">
        <nav aria-label="Navigation principale" className="mx-auto flex h-[76px] max-w-[1480px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="#accueil" className="group flex items-center gap-3" aria-label="Horizon Conseil — Accueil">
            <span className="grid h-9 w-9 place-items-center rounded-full border border-[#15343c]/30 text-xs font-semibold transition group-hover:bg-[#153943] group-hover:text-white">HC</span>
            <span className="text-[17px] font-semibold tracking-[-.02em]">Horizon Conseil</span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium lg:flex">
            <a className="transition hover:text-[#71867a]" href="#approche">À propos</a>
            <a className="transition hover:text-[#71867a]" href="#accompagnements">Accompagnements</a>
            <a className="transition hover:text-[#71867a]" href="#methode">Méthode</a>
            <a className="transition hover:text-[#71867a]" href="#faq">FAQ</a>
          </div>
          <a href="#contact" className="hidden min-h-11 items-center gap-2 border border-[#15343c] px-5 text-sm font-semibold transition hover:bg-[#153943] hover:text-white sm:inline-flex">
            Prendre rendez-vous <Arrow diagonal />
          </a>
          <details className="group relative sm:hidden">
            <summary className="grid h-11 w-11 cursor-pointer list-none place-items-center border border-[#15343c]/30" aria-label="Ouvrir le menu">
              <span className="flex flex-col gap-1.5"><i className="block h-px w-5 bg-current" /><i className="block h-px w-5 bg-current" /></span>
            </summary>
            <div className="absolute right-0 top-[54px] w-64 border border-[#15343c]/15 bg-[#f5f1e8] p-5 shadow-2xl shadow-[#15343c]/10">
              <div className="flex flex-col gap-4 text-sm font-medium">
                <a href="#approche">À propos</a><a href="#accompagnements">Accompagnements</a><a href="#methode">Méthode</a><a href="#faq">FAQ</a><a className="mt-2 bg-[#153943] px-4 py-3 text-center text-white" href="#contact">Prendre rendez-vous</a>
              </div>
            </div>
          </details>
        </nav>
      </header>

      <main>
        <section id="accueil" className="scroll-mt-20 overflow-hidden">
          <div className="mx-auto grid max-w-[1480px] lg:min-h-[calc(100svh-76px)] lg:grid-cols-[1.03fr_.97fr]">
            <Reveal className="flex items-center px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-20 xl:px-20">
              <div className="max-w-[720px]">
                <Eyebrow>Conseil en organisation & pilotage</Eyebrow>
                <h1 className="mt-7 font-serif text-[clamp(3.15rem,6.3vw,6.65rem)] leading-[.94] tracking-[-.055em] text-[#102d35]">
                  Retrouver de la clarté pour mieux piloter votre entreprise.
                </h1>
                <p className="mt-7 max-w-xl text-[17px] leading-8 text-[#5e6d6b] sm:text-lg">
                  J’accompagne dirigeants et petites équipes à structurer leur organisation, leurs priorités et leurs outils de pilotage.
                </p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <PrimaryButton href="#contact">Prendre rendez-vous</PrimaryButton>
                  <a href="#approche" className="group inline-flex min-h-12 items-center justify-center gap-3 border border-[#15343c]/35 px-6 text-sm font-semibold transition hover:border-[#15343c]">
                    Découvrir mon approche <span className="transition-transform group-hover:translate-y-1">↓</span>
                  </a>
                </div>
                <p className="mt-6 flex items-center gap-2 text-sm text-[#687674]"><span className="h-2 w-2 rounded-full bg-[#8fa693]" />Premier échange de 30 minutes · Sans engagement</p>
              </div>
            </Reveal>
            <Reveal className="relative min-h-[520px] lg:min-h-full" y={0}>
              <Image src={`${base}hero.jpg`} alt="Consultante indépendante dans son bureau" fill priority sizes="(max-width: 1023px) 100vw, 49vw" className="object-cover object-[60%_center]" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between bg-[#f5f1e8]/92 p-4 backdrop-blur-md sm:bottom-8 sm:left-8 sm:right-auto sm:w-72 sm:p-5">
                <p className="max-w-[185px] text-sm leading-5">Des solutions utiles aujourd’hui, adoptées demain.</p>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#a9b9aa] text-[#102d35]"><Arrow diagonal /></span>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="approche" className="scroll-mt-20 border-y border-[#15343c]/10 bg-[#ebe7de] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[.92fr_1.08fr] lg:items-center lg:gap-20">
            <Reveal className="relative min-h-[440px] sm:min-h-[600px]">
              <Image src={`${base}about.jpg`} alt="Échange de travail entre une consultante et un dirigeant" fill sizes="(max-width: 1023px) 100vw, 46vw" className="object-cover" />
              <div className="absolute -bottom-6 right-0 w-[72%] bg-[#aebdac] p-5 text-sm leading-6 text-[#102d35] sm:right-[-24px] sm:w-64 sm:p-6">Observer avant d’agir.<br />Simplifier avant d’ajouter.</div>
            </Reveal>
            <Reveal>
              <Eyebrow>À propos</Eyebrow>
              <h2 className="mt-6 max-w-2xl font-serif text-4xl leading-[1.05] tracking-[-.04em] text-[#102d35] sm:text-6xl lg:text-7xl">Une méthode pragmatique, adaptée à votre réalité.</h2>
              <p className="mt-8 max-w-xl text-lg leading-8 text-[#5e6d6b]">Pas de modèle tout fait ni de transformation inutile. Nous partons de votre fonctionnement actuel pour identifier ce qui freine réellement votre activité et construire des solutions applicables par votre équipe.</p>
              <div className="mt-10 grid grid-cols-2 gap-px bg-[#15343c]/15">
                <div className="bg-[#ebe7de] p-5 sm:p-7"><strong className="font-serif text-3xl font-normal">Sur mesure</strong><p className="mt-2 text-sm text-[#667471]">Un cadre adapté à votre entreprise.</p></div>
                <div className="bg-[#ebe7de] p-5 sm:p-7"><strong className="font-serif text-3xl font-normal">Concret</strong><p className="mt-2 text-sm text-[#667471]">Des outils directement mobilisables.</p></div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="accompagnements" className="scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto max-w-[1320px]">
            <Reveal className="grid gap-6 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
              <Eyebrow>Accompagnements</Eyebrow>
              <h2 className="font-serif text-4xl leading-[1.06] tracking-[-.04em] sm:text-6xl">Des interventions ciblées sur ce qui fait vraiment la différence.</h2>
            </Reveal>
            <Reveal className="mt-14 grid border-l border-t border-[#15343c]/15 md:grid-cols-2" stagger={0.08}>
              {services.map(([title, description], index) => (
                <article key={title} data-reveal-item className="group relative min-h-64 overflow-hidden border-b border-r border-[#15343c]/15 p-6 transition duration-300 hover:bg-[#e7e7dc] sm:p-8">
                  <div className="flex items-start justify-between"><span className="text-xs font-bold tracking-[.16em] text-[#74887b]">0{index + 1}</span><span className="grid h-10 w-10 place-items-center rounded-full border border-[#15343c]/20 transition duration-300 group-hover:rotate-45 group-hover:bg-[#153943] group-hover:text-white"><Arrow diagonal /></span></div>
                  <h3 className="mt-14 max-w-md font-serif text-3xl leading-tight tracking-[-.025em] sm:text-4xl">{title}</h3>
                  <p className="mt-4 max-w-sm leading-7 text-[#64716f]">{description}</p>
                </article>
              ))}
            </Reveal>
          </div>
        </section>

        <section id="methode" className="scroll-mt-20 bg-[#15343d] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto grid max-w-[1320px] gap-14 lg:grid-cols-[.92fr_1.08fr] lg:gap-20">
            <Reveal>
              <Eyebrow inverse>La méthode</Eyebrow>
              <h2 className="mt-6 max-w-2xl font-serif text-4xl leading-[1.04] tracking-[-.04em] sm:text-6xl">De la situation actuelle à un fonctionnement plus simple.</h2>
              <div className="relative mt-10 aspect-[4/3] overflow-hidden">
                <Image src={`${base}method.jpg`} alt="Carnet et documents de travail sur un bureau" fill sizes="(max-width: 1023px) 100vw, 43vw" className="object-cover" />
                <div className="absolute inset-0 bg-[#15343d]/10" />
              </div>
            </Reveal>
            <Reveal className="self-end" stagger={0.09}>
              {steps.map(([title, description], index) => (
                <article key={title} data-reveal-item className="grid grid-cols-[3.5rem_1fr] border-t border-white/20 py-6 sm:grid-cols-[5rem_1fr] sm:py-8">
                  <span className="pt-1 text-xs font-bold tracking-[.18em] text-[#b3c3b7]">0{index + 1}</span>
                  <div><h3 className="font-serif text-3xl sm:text-4xl">{title}</h3><p className="mt-2 leading-7 text-white/58">{description}</p></div>
                </article>
              ))}
            </Reveal>
          </div>
        </section>

        <section className="border-b border-[#15343c]/10 bg-[#aebdac] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <Reveal className="mx-auto max-w-[1320px]">
            <div className="flex flex-col gap-3 border-b border-[#15343c]/20 pb-6 sm:flex-row sm:items-center sm:justify-between"><Eyebrow>Quelques repères</Eyebrow><p className="text-xs text-[#53665d]">Indicateurs fictifs — présentés pour illustrer ce concept</p></div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4">
              {metrics.map(([value, label], index) => <div key={label} className={`py-7 sm:px-7 lg:py-9 ${index ? "border-t border-[#15343c]/20 sm:border-t-0 sm:border-l" : ""}`}><strong className="font-serif text-4xl font-normal tracking-[-.04em] sm:text-5xl">{value}</strong><p className="mt-2 text-sm text-[#50625a]">{label}</p></div>)}
            </div>
          </Reveal>
        </section>

        <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto max-w-[1320px]">
            <Reveal><Eyebrow>Témoignages</Eyebrow><h2 className="mt-6 max-w-3xl font-serif text-4xl leading-[1.05] tracking-[-.04em] sm:text-6xl">Ils parlent surtout de ce qui a changé.</h2></Reveal>
            <Reveal className="mt-14 grid gap-5 lg:grid-cols-3" stagger={0.1}>
              {testimonials.map(([name, role, quote], index) => (
                <figure key={name} data-reveal-item className={`flex min-h-[330px] flex-col justify-between p-7 sm:p-9 ${index === 1 ? "bg-[#dfe3d9]" : "border border-[#15343c]/15 bg-[#faf7f0]"}`}>
                  <span className="font-serif text-6xl leading-none text-[#82968a]">“</span>
                  <blockquote className="mt-7 font-serif text-2xl leading-9 tracking-[-.02em]">{quote}</blockquote>
                  <figcaption className="mt-9 border-t border-[#15343c]/15 pt-5 text-sm"><strong>{name}</strong><span className="ml-2 text-[#6b7774]">— {role}</span></figcaption>
                </figure>
              ))}
            </Reveal>
          </div>
        </section>

        <section id="faq" className="scroll-mt-20 border-y border-[#15343c]/10 bg-[#ebe7de] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
            <Reveal><Eyebrow>Questions fréquentes</Eyebrow><h2 className="mt-6 font-serif text-4xl tracking-[-.04em] sm:text-6xl">Avant de commencer.</h2><p className="mt-6 max-w-sm leading-7 text-[#65726f]">Quelques réponses pour mieux comprendre le cadre d’une mission.</p></Reveal>
            <Reveal>
              {faqs.map(([question, answer], index) => (
                <details key={question} className="group border-t border-[#15343c]/20" open={index === 0}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-serif text-xl sm:text-2xl"><span>{question}</span><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[#15343c]/25 transition group-open:rotate-45">+</span></summary>
                  <p className="max-w-2xl pb-6 pr-12 leading-7 text-[#65726f]">{answer}</p>
                </details>
              ))}
            </Reveal>
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 bg-[#102d35] text-white">
          <div className="mx-auto grid max-w-[1480px] lg:grid-cols-2">
            <div className="relative min-h-[420px] lg:min-h-[760px]"><Image src={`${base}office.jpg`} alt="Bureau calme aménagé pour un premier échange" fill sizes="(max-width: 1023px) 100vw, 50vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#102d35]/30 to-transparent" /></div>
            <Reveal className="flex items-center px-5 py-16 sm:px-10 sm:py-20 lg:px-16">
              <div className="w-full max-w-xl">
                <Eyebrow inverse>Premier échange</Eyebrow>
                <h2 className="mt-6 font-serif text-5xl leading-[1] tracking-[-.045em] sm:text-7xl">Commençons par faire le point.</h2>
                <p className="mt-6 max-w-lg leading-7 text-white/60">Un rendez-vous de 30 minutes pour poser votre contexte, vos enjeux et voir si l’accompagnement est pertinent.</p>
                <div id="disponibilites" className="mt-10 border border-white/18 bg-white/[.055] p-5 sm:p-7">
                  <div className="flex items-start justify-between gap-5 border-b border-white/15 pb-5"><div><p className="text-xs uppercase tracking-[.18em] text-[#b5c5ba]">Disponibilités</p><p className="mt-2 font-serif text-2xl">Septembre 2026</p></div><div className="flex gap-2"><span className="grid h-9 w-9 place-items-center border border-white/20 text-white/50">←</span><span className="grid h-9 w-9 place-items-center border border-white/20">→</span></div></div>
                  <div className="mt-5 grid grid-cols-7 gap-1.5 text-center text-xs">
                    {["L", "M", "M", "J", "V", "S", "D"].map((day, index) => <span key={`${day}-${index}`} className="py-2 text-white/35">{day}</span>)}
                    {[31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((day, index) => <span key={`${day}-${index}`} className={`grid aspect-square place-items-center ${index === 0 ? "text-white/20" : index === 3 || index === 8 || index === 10 ? "bg-[#aebdac] font-bold text-[#102d35]" : "bg-white/[.06] text-white/70"}`}>{day}</span>)}
                  </div>
                  <div className="mt-5 flex items-center gap-2 text-xs text-white/50"><span className="h-2 w-2 bg-[#aebdac]" />Créneaux proposés à titre d’exemple</div>
                </div>
                <div className="mt-5"><PrimaryButton href="#disponibilites" light>Réserver un premier échange</PrimaryButton></div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#102d35] px-5 py-9 text-sm text-white/45 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div><p className="font-serif text-xl text-white">Horizon Conseil</p><p className="mt-1 text-xs">Organisation · Pilotage · Transformation</p></div>
          <p>Concept fictif de démonstration · <Link className="text-white underline decoration-white/30 underline-offset-4 transition hover:decoration-white" href="/demo">Toutes les démos</Link></p>
        </div>
      </footer>
    </div>
  );
}

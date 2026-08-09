import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/demos/shared/Reveal";

const base = "/images/demos/pme-b2b/";

const services = [
  ["Optimisation des processus", "Cartographier, simplifier et fiabiliser les opérations."],
  ["Pilotage & data", "Construire des indicateurs réellement utiles à la décision."],
  ["Automatisation", "Réduire les tâches répétitives et les ressaisies."],
  ["Conduite du changement", "Accompagner les équipes dans l’adoption des nouvelles pratiques."],
];

const cases = [
  ["Société de services — 45 salariés", "Centralisation du suivi opérationnel.", "−30 %", "de temps consacré au reporting"],
  ["PME industrielle — 80 salariés", "Refonte du processus de traitement des commandes.", "−22 %", "de délai moyen"],
  ["Cabinet B2B — 25 salariés", "Automatisation du suivi commercial.", "+18 %", "de dossiers suivis"],
];

function Arrow() {
  return <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 fill-none stroke-current" strokeWidth="1.7"><path d="M3 10h14m-5-5 5 5-5 5" /></svg>;
}

function Button({ href, children, outline = false, light = false }) {
  const colors = light ? "bg-white text-[#071d35] hover:bg-[#dff6ff]" : outline ? "border border-[#0a294a]/30 text-[#0a294a] hover:border-[#0a294a] hover:bg-[#eef9fc]" : "bg-[#0a294a] text-white hover:bg-[#10507a]";
  return <a href={href} className={`group inline-flex min-h-12 items-center justify-center gap-3 rounded-sm px-6 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 ${colors}`}>{children}<span className="transition-transform group-hover:translate-x-1"><Arrow /></span></a>;
}

function Label({ children, inverse = false }) {
  return <p className={`text-xs font-bold uppercase tracking-[.2em] ${inverse ? "text-[#6cd4ed]" : "text-[#087da4]"}`}>{children}</p>;
}

export default function PmeB2BSite() {
  return <div className="bg-white text-[#071d35] selection:bg-[#62d0ec] selection:text-[#071d35]">
    <header className="sticky top-0 z-50 border-b border-[#0a294a]/10 bg-white/95 backdrop-blur-xl">
      <nav aria-label="Navigation principale" className="mx-auto flex h-[76px] max-w-[1480px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#accueil" className="flex items-center gap-2 text-xl font-bold tracking-[-.045em]"><span className="grid h-8 w-8 place-items-center rounded-sm bg-[#0a294a] text-sm text-white">N</span>Nexa<span className="text-[#0988ae]">Pilot</span></a>
        <div className="hidden items-center gap-7 text-sm font-medium lg:flex"><a href="#solutions">Solutions</a><a href="#methode">Méthode</a><a href="#cas-clients">Cas clients</a><a href="#apropos">À propos</a><a href="#contact">Contact</a></div>
        <Button href="#contact">Parler à un expert</Button>
      </nav>
    </header>

    <main>
      <section id="accueil" className="relative min-h-[calc(100svh-76px)] overflow-hidden">
        <Image src={`${base}hero.jpg`} alt="Équipe NexaPilot en réunion de travail" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/10 lg:via-white/80" />
        <div className="absolute inset-y-0 left-[46%] hidden w-px bg-[#0a294a]/10 lg:block" />
        <Reveal className="relative mx-auto flex min-h-[calc(100svh-76px)] max-w-[1480px] items-center px-5 py-20 sm:px-8 lg:px-12">
          <div className="max-w-[730px]">
            <Label>Performance opérationnelle pour PME</Label>
            <h1 className="mt-6 text-[clamp(3.3rem,6.7vw,7rem)] font-semibold leading-[.92] tracking-[-.065em]">Des opérations plus simples. Une entreprise plus efficace.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#516477]">Nous aidons les PME à structurer leurs processus, leurs outils et leur pilotage pour gagner en efficacité sans alourdir leur organisation.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Button href="#solutions">Découvrir nos solutions</Button><Button href="#contact" outline>Parler à un expert</Button></div>
          </div>
        </Reveal>
        <div className="relative border-y border-[#0a294a]/10 bg-white/95 px-5 backdrop-blur-md sm:px-8 lg:px-12">
          <div className="mx-auto flex max-w-[1480px] flex-wrap items-center justify-center gap-x-6 gap-y-3 py-5 text-[11px] font-bold uppercase tracking-[.18em] text-[#426178] sm:justify-start">
            {['Process','Data','Automatisation','Accompagnement'].map((item,index)=><span key={item} className="flex items-center gap-6">{index > 0 && <i className="h-1 w-1 rounded-full bg-[#15a7c8]" />}{item}</span>)}
          </div>
        </div>
      </section>

      <section id="solutions" className="scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-[1320px]">
          <Reveal className="grid gap-6 lg:grid-cols-[.75fr_1.25fr] lg:items-end"><Label>Nos solutions</Label><h2 className="max-w-4xl text-4xl font-semibold leading-[1.03] tracking-[-.05em] sm:text-6xl">Agir sur toute la chaîne de performance.</h2></Reveal>
          <Reveal className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={.08}>{services.map(([title,text],index)=><article key={title} data-reveal-item className="group flex min-h-[310px] flex-col justify-between border border-[#0a294a]/12 bg-[#f4f9fb] p-6 transition hover:-translate-y-1 hover:border-[#0b98be]/50 hover:bg-white hover:shadow-xl hover:shadow-[#0a294a]/7"><div className="flex justify-between"><span className="grid h-11 w-11 place-items-center rounded-full bg-[#dff6fb] text-sm font-bold text-[#087da4]">0{index+1}</span><span className="opacity-35 transition group-hover:translate-x-1 group-hover:opacity-100"><Arrow /></span></div><div><h3 className="text-2xl font-semibold leading-tight tracking-[-.035em]">{title}</h3><p className="mt-4 text-sm leading-6 text-[#607284]">{text}</p></div></article>)}</Reveal>
        </div>
      </section>

      <section id="apropos" className="scroll-mt-20 bg-[#071d35] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto grid max-w-[1320px] gap-14 lg:grid-cols-[1.08fr_.92fr] lg:items-center lg:gap-20">
          <Reveal className="relative min-h-[470px]"><Image src={`${base}service.jpg`} alt="Analyse collaborative de données opérationnelles" fill sizes="(max-width: 1023px) 100vw, 55vw" className="object-cover" /><div className="absolute bottom-0 right-0 bg-[#14a7c8] px-6 py-5 text-sm font-semibold">Les bons outils, au bon endroit.</div></Reveal>
          <Reveal><Label inverse>Une équipe pluridisciplinaire</Label><h2 className="mt-6 text-4xl font-semibold leading-[1.04] tracking-[-.05em] sm:text-6xl">Structurés pour accompagner votre croissance.</h2><p className="mt-7 text-lg leading-8 text-white/62">Consultants en opérations, data et conduite du changement travaillent ensemble pour transformer les constats en améliorations durables.</p><div className="mt-9 grid grid-cols-2 gap-4 text-sm"><div className="border-t border-white/20 pt-4"><b className="block text-[#6cd4ed]">Vision terrain</b><span className="mt-2 block text-white/50">Au plus près de vos équipes.</span></div><div className="border-t border-white/20 pt-4"><b className="block text-[#6cd4ed]">Résultats mesurés</b><span className="mt-2 block text-white/50">Des progrès objectivés.</span></div></div></Reveal>
        </div>
      </section>

      <section className="bg-[#eaf6fa] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <Reveal className="mx-auto max-w-[1320px]"><div className="mb-7 flex justify-between gap-4"><Label>Impact</Label><p className="text-xs text-[#688092]">Données fictives de démonstration.</p></div><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{[["35 %","de temps administratif économisé"],["120+","processus optimisés"],["4,8 / 5","satisfaction moyenne"],["3 secteurs","de spécialisation"]].map(([v,l])=><div key={l} className="border border-[#0a294a]/10 bg-white p-6"><strong className="text-4xl font-semibold tracking-[-.05em] sm:text-5xl">{v}</strong><p className="mt-3 text-sm text-[#607284]">{l}</p></div>)}</div></Reveal>
      </section>

      <section id="methode" className="scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto grid max-w-[1320px] gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
          <Reveal><Label>Notre méthode</Label><h2 className="mt-6 text-4xl font-semibold leading-[1.04] tracking-[-.05em] sm:text-6xl">Une transformation pragmatique en quatre phases.</h2><p className="mt-6 max-w-lg leading-7 text-[#607284]">Un cadre lisible, des décisions partagées et des résultats suivis dans le temps.</p></Reveal>
          <Reveal className="relative grid gap-y-2 sm:grid-cols-2" stagger={.08}>{[["Audit","Comprendre l’existant"],["Priorisation","Choisir les bons leviers"],["Déploiement","Mettre en œuvre"],["Mesure","Suivre et ajuster"]].map(([title,text],index)=><div key={title} data-reveal-item className={`relative min-h-52 border border-[#0a294a]/12 p-6 ${index===0?"bg-[#0a294a] text-white":index===3?"bg-[#dff6fb]":"bg-white"}`}><span className={`text-xs font-bold ${index===0?"text-[#6cd4ed]":"text-[#0988ae]"}`}>0{index+1}</span><div className="absolute left-6 right-6 top-1/2 h-px bg-current opacity-10"/><h3 className="mt-16 text-2xl font-semibold">{title}</h3><p className={`mt-2 text-sm ${index===0?"text-white/55":"text-[#607284]"}`}>{text}</p>{index<3&&<span className="absolute -bottom-[17px] right-5 z-10 grid h-8 w-8 place-items-center rounded-full bg-[#15a7c8] text-white">↓</span>}</div>)}</Reveal>
        </div>
      </section>

      <section id="cas-clients" className="scroll-mt-20 bg-[#f4f7f8] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-[1320px]"><Reveal><Label>Cas clients</Label><h2 className="mt-6 text-4xl font-semibold tracking-[-.05em] sm:text-6xl">Des résultats qui se voient dans le quotidien.</h2></Reveal><Reveal className="mt-14 grid gap-5 lg:grid-cols-3" stagger={.1}>{cases.map(([title,desc,result,label],index)=><article key={title} data-reveal-item className="group overflow-hidden border border-[#0a294a]/12 bg-white"><div className="relative aspect-[4/3] overflow-hidden"><Image src={`${base}case-${index+1}.jpg`} alt={title} fill sizes="(max-width:1023px) 100vw, 33vw" className="object-cover transition duration-700 group-hover:scale-[1.035]" /></div><div className="p-6"><p className="text-[11px] font-bold uppercase tracking-[.16em] text-[#0884aa]">Cas fictif 0{index+1}</p><h3 className="mt-4 text-xl font-semibold">{title}</h3><p className="mt-3 min-h-12 text-sm leading-6 text-[#607284]">{desc}</p><div className="mt-6 border-t border-[#0a294a]/10 pt-5"><strong className="text-3xl tracking-[-.04em]">{result}</strong><span className="ml-2 text-sm text-[#607284]">{label}</span></div></div></article>)}</Reveal></div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12"><Reveal className="mx-auto max-w-5xl text-center"><span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#dff6fb] text-3xl text-[#0988ae]">“</span><blockquote className="mt-8 text-3xl font-medium leading-tight tracking-[-.035em] sm:text-5xl">Nous cherchions à simplifier notre fonctionnement, pas à ajouter un nouvel outil. C’est exactement ce que NexaPilot nous a permis de faire.</blockquote><p className="mt-7 text-sm text-[#607284]">— Direction des opérations, entreprise fictive</p></Reveal></section>

      <section id="contact" className="scroll-mt-20 bg-[#0a294a] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12"><Reveal className="mx-auto flex max-w-[1320px] flex-col gap-9 lg:flex-row lg:items-end lg:justify-between"><div><Label inverse>Parlons de vos opérations</Label><h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.03] tracking-[-.05em] sm:text-6xl">Identifions ce qui ralentit réellement votre organisation.</h2></div><div className="shrink-0"><Button href="#contact" light>Planifier un échange</Button></div></Reveal></section>
    </main>
    <footer className="bg-[#071d35] px-5 py-9 text-sm text-white/45 sm:px-8 lg:px-12"><div className="mx-auto flex max-w-[1320px] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><span className="text-lg font-bold text-white">Nexa<span className="text-[#32bddc]">Pilot</span></span><span>Concept fictif de démonstration · <Link href="/demo" className="text-white underline underline-offset-4">Toutes les démos</Link></span></div></footer>
  </div>;
}

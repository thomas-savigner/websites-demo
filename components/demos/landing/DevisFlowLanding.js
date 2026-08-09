import Link from "next/link";
import Reveal from "@/components/demos/shared/Reveal";

const benefits = [
  {
    number: "01",
    title: "Crée",
    description: "Produis un devis clair en quelques minutes.",
    visual: (
      <div className="mt-8 rounded-2xl border border-[#dfe3f0] bg-white p-4 shadow-[0_18px_45px_rgba(33,39,75,.08)]">
        <div className="flex items-center justify-between"><span className="text-xs font-semibold text-[#171927]">Nouveau devis</span><span className="rounded-full bg-[#eef0ff] px-2 py-1 text-[9px] font-bold text-[#3156f5]">BROUILLON</span></div>
        <div className="mt-5 space-y-2"><span className="block h-2 w-2/3 rounded-full bg-[#e8eaf2]"/><span className="block h-2 w-full rounded-full bg-[#f0f1f6]"/><span className="block h-2 w-4/5 rounded-full bg-[#f0f1f6]"/></div>
        <div className="mt-5 flex justify-between border-t border-[#e9ebf2] pt-4 text-xs"><span className="text-[#7d8295]">Total</span><strong>4 850 €</strong></div>
      </div>
    ),
  },
  {
    number: "02",
    title: "Envoie",
    description: "Envoie-le directement depuis ton espace.",
    visual: (
      <div className="relative mt-8 grid min-h-40 place-items-center overflow-hidden rounded-2xl bg-[#3156f5] p-5 text-white">
        <div className="absolute h-28 w-44 -rotate-6 rounded-xl bg-white/15"/><div className="absolute h-28 w-44 rotate-6 rounded-xl bg-white/15"/>
        <div className="relative grid h-14 w-14 place-items-center rounded-full bg-white text-[#3156f5] shadow-xl"><Icon name="send" className="h-6 w-6"/></div>
        <span className="absolute bottom-4 text-[10px] font-semibold uppercase tracking-[.15em] text-white/65">Prêt à partir</span>
      </div>
    ),
  },
  {
    number: "03",
    title: "Suis",
    description: "Sache quand ton prospect consulte ton document.",
    visual: (
      <div className="mt-8 space-y-2 rounded-2xl border border-[#dfe3f0] bg-white p-4 shadow-[0_18px_45px_rgba(33,39,75,.08)]">
        {[['Atelier Nova','Consulté','#edeaff','#7256db'],['Studio Calyx','Envoyé','#e8efff','#3156f5'],['Maison Kanso','Accepté','#e8f8f0','#17805d']].map(([client,status,bg,color])=><div key={client} className="flex items-center gap-3 rounded-xl border border-[#eceef5] p-3"><span className="grid h-8 w-8 place-items-center rounded-lg bg-[#f2f3f8] text-[10px] font-bold">{client[0]}</span><span className="min-w-0 flex-1 truncate text-xs font-semibold">{client}</span><span className="rounded-full px-2 py-1 text-[9px] font-bold" style={{background:bg,color}}>{status}</span></div>)}
      </div>
    ),
  },
];

const steps = [
  ["Renseigne ton client", "Ajoute ses coordonnées une seule fois. DevisFlow les retrouve pour tes prochains documents."],
  ["Construis ton devis", "Ajoute tes prestations, ajuste les quantités et laisse les calculs se faire automatiquement."],
  ["Envoie et suis sa progression", "Ton client reçoit un lien professionnel et tu vois son statut évoluer en temps réel."],
];

const pipeline = [
  { title: "À envoyer", count: 4, color: "#9da4b8", cards: [["DF-2052", "Studio Calyx", "1 280 €"], ["DF-2054", "Maison Kanso", "3 100 €"]] },
  { title: "Envoyé", count: 8, color: "#7891ff", cards: [["DF-2046", "Orbe Conseil", "2 450 €"], ["DF-2049", "Buro 17", "960 €"]] },
  { title: "Consulté", count: 5, color: "#a88bf2", cards: [["DF-2048", "Atelier Nova", "4 850 €"], ["DF-2050", "Ligne Claire", "1 750 €"]] },
  { title: "Accepté", count: 12, color: "#62c69b", cards: [["DF-2041", "Horizon Studio", "6 200 €"], ["DF-2043", "Le Comptoir", "2 840 €"]] },
];

const stats = [["2 min", "pour créer un devis"], ["1 clic", "pour l’envoyer"], ["100 %", "accessible en ligne"], ["24/7", "suivi disponible"]];

const testimonials = [
  ["Thomas", "Artisan", "Je vois immédiatement les devis sur lesquels je dois relancer mes clients."],
  ["Julie", "Consultante", "L’interface va droit au but. Je ne perds plus de temps dans mes fichiers."],
  ["Mehdi", "Indépendant", "Créer puis envoyer un devis me prend maintenant quelques minutes."],
];

const plans = [
  { name: "Starter", price: "0 €", note: "3 devis / mois", features: ["Création de devis", "Envoi par lien", "Suivi des statuts"] },
  { name: "Pro", price: "12 €", suffix: "/ mois", note: "Devis illimités", featured: true, features: ["Tout Starter", "Devis illimités", "Personnalisation avancée", "Relances simplifiées"] },
  { name: "Business", price: "29 €", suffix: "/ mois", note: "Équipe et fonctions avancées", features: ["Tout Pro", "Accès équipe", "Rôles et permissions", "Support prioritaire"] },
];

const faqs = [
  ["Puis-je essayer gratuitement ?", "Oui, le plan Starter permet de découvrir le service sans carte bancaire."],
  ["Puis-je personnaliser mes devis ?", "Oui, couleurs, coordonnées et informations peuvent être adaptées."],
  ["Comment savoir si mon devis a été consulté ?", "Le statut du devis évolue dans ton tableau de bord."],
  ["Puis-je arrêter quand je veux ?", "Oui, aucun engagement."],
];

function Icon({ name, className = "h-5 w-5" }) {
  const paths = {
    arrow: <path d="M5 12h14m-5-5 5 5-5 5"/>,
    check: <path d="m5 12 4 4L19 6"/>,
    send: <><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></>,
    eye: <><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"/><circle cx="12" cy="12" r="2.5"/></>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></>,
  };
  return <svg aria-hidden="true" viewBox="0 0 24 24" className={`${className} fill-none stroke-current`} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}

function Logo({ inverse = false }) {
  return <span className={`inline-flex items-center gap-2.5 text-lg font-bold tracking-[-.04em] ${inverse ? "text-white" : "text-[#171927]"}`}><span className="grid h-8 w-8 place-items-center rounded-lg bg-[#3156f5] text-sm text-white shadow-[0_8px_20px_rgba(49,86,245,.25)]">D</span>DevisFlow</span>;
}

function PrimaryLink({ href = "#tarifs", children, light = false, className = "" }) {
  return <a href={href} className={`group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-xl px-5 text-sm font-bold transition duration-300 hover:-translate-y-0.5 ${light ? "bg-white text-[#171927] hover:bg-[#f0f2ff]" : "bg-[#3156f5] text-white shadow-[0_14px_35px_rgba(49,86,245,.28)] hover:bg-[#2447dc]"} ${className}`}>{children}<span className="transition-transform group-hover:translate-x-1"><Icon name="arrow" className="h-4 w-4"/></span></a>;
}

function SectionHeading({ eyebrow, title, description, center = false, inverse = false }) {
  return <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}><p className={`text-[11px] font-bold uppercase tracking-[.2em] ${inverse ? "text-[#91a6ff]" : "text-[#3156f5]"}`}>{eyebrow}</p><h2 className={`mt-5 text-balance text-4xl font-semibold leading-[1.04] tracking-[-.05em] sm:text-5xl lg:text-6xl ${inverse ? "text-white" : "text-[#171927]"}`}>{title}</h2>{description&&<p className={`mt-5 text-lg leading-8 ${inverse ? "text-white/55" : "text-[#686e80]"}`}>{description}</p>}</div>;
}

function AppMockup() {
  return <div className="relative mx-auto w-full max-w-[690px] lg:ml-auto">
    <div className="absolute -inset-10 -z-10 rounded-full bg-[#dfe3ff] blur-3xl"/>
    <div className="overflow-hidden rounded-[1.35rem] border border-white/80 bg-white shadow-[0_35px_90px_rgba(43,50,100,.18)]">
      <div className="flex h-11 items-center gap-1.5 border-b border-[#e7e9f2] bg-[#fafaff] px-4"><i className="h-2.5 w-2.5 rounded-full bg-[#ff8a87]"/><i className="h-2.5 w-2.5 rounded-full bg-[#ffd36a]"/><i className="h-2.5 w-2.5 rounded-full bg-[#68d09c]"/><span className="mx-auto rounded-md bg-[#eff1f7] px-14 py-1 text-[8px] text-[#9499aa] sm:px-24">app.devisflow.example</span></div>
      <div className="grid min-h-[410px] grid-cols-[64px_1fr] sm:grid-cols-[145px_1fr]">
        <aside className="border-r border-[#e8eaf2] bg-[#f8f9fd] p-3 sm:p-4"><div className="flex items-center gap-2 text-xs font-bold tracking-[-.03em]"><span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-[#3156f5] text-[10px] text-white">D</span><span className="hidden sm:inline">DevisFlow</span></div><div className="mt-9 space-y-2">{["Aperçu","Devis","Clients","Réglages"].map((label,index)=><div key={label} className={`flex h-9 items-center gap-2 rounded-lg px-2 text-[10px] font-semibold ${index===1?"bg-[#e8edff] text-[#3156f5]":"text-[#8b90a1]"}`}><span className={`h-2 w-2 rounded-sm ${index===1?"bg-[#3156f5]":"bg-[#c9cdd8]"}`}/><span className="hidden sm:inline">{label}</span></div>)}</div></aside>
        <div className="min-w-0 p-4 sm:p-6"><div className="flex items-start justify-between gap-3"><div><p className="text-[9px] font-semibold uppercase tracking-[.15em] text-[#9297a8]">Devis</p><h3 className="mt-1 text-lg font-bold tracking-[-.03em] text-[#171927] sm:text-xl">Devis #DF-2048</h3></div><span className="rounded-full bg-[#edeaff] px-2.5 py-1 text-[9px] font-bold text-[#7256db]">● Consulté</span></div>
          <div className="mt-5 rounded-xl border border-[#e7e9f1] p-4 sm:p-5"><div className="flex items-center justify-between border-b border-[#eceef4] pb-4"><div><p className="text-[9px] uppercase tracking-[.12em] text-[#9a9faf]">Client</p><p className="mt-1 text-xs font-semibold sm:text-sm">Atelier Nova</p></div><div className="text-right"><p className="text-[9px] uppercase tracking-[.12em] text-[#9a9faf]">Date</p><p className="mt-1 text-xs font-semibold">12 août 2026</p></div></div><div className="mt-4 space-y-3">{[["Identité visuelle","1 800 €"],["Site vitrine","2 650 €"],["Formation","400 €"]].map(([label,price])=><div key={label} className="flex justify-between text-[10px] sm:text-xs"><span className="text-[#656b7d]">{label}</span><span className="font-semibold">{price}</span></div>)}</div><div className="mt-5 flex items-end justify-between border-t border-[#eceef4] pt-4"><span className="text-[10px] text-[#8a8fa0]">Montant total</span><strong className="text-xl tracking-[-.04em] sm:text-2xl">4 850 €</strong></div></div>
          <div className="mt-4 flex justify-end gap-2"><button className="rounded-lg border border-[#dfe2eb] px-3 py-2 text-[10px] font-bold text-[#555b6d]">Modifier</button><button className="rounded-lg bg-[#3156f5] px-3 py-2 text-[10px] font-bold text-white">Envoyer</button></div>
        </div>
      </div>
    </div>
    <div className="absolute -bottom-6 -left-3 flex items-center gap-3 rounded-xl border border-white bg-white p-3.5 shadow-[0_18px_45px_rgba(37,44,87,.18)] sm:-left-8"><span className="grid h-9 w-9 place-items-center rounded-full bg-[#eeeaff] text-[#7256db]"><Icon name="eye" className="h-4 w-4"/></span><div><p className="text-[10px] text-[#898e9f]">Atelier Nova</p><p className="text-xs font-bold text-[#171927]">Devis consulté il y a 2 min</p></div></div>
  </div>;
}

export default function DevisFlowLanding() {
  return <div className="overflow-hidden bg-[#f8f9ff] text-[#171927] selection:bg-[#cfd8ff]">
    <header className="sticky top-0 z-50 border-b border-[#20243b]/8 bg-[#f8f9ff]/90 backdrop-blur-xl">
      <nav aria-label="Navigation principale" className="mx-auto flex h-[74px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#accueil" aria-label="DevisFlow — Accueil"><Logo/></a>
        <div className="hidden items-center gap-8 text-sm font-semibold text-[#5e6475] lg:flex"><a className="transition hover:text-[#3156f5]" href="#fonctionnalites">Fonctionnalités</a><a className="transition hover:text-[#3156f5]" href="#fonctionnement">Comment ça marche</a><a className="transition hover:text-[#3156f5]" href="#tarifs">Tarifs</a><a className="transition hover:text-[#3156f5]" href="#faq">FAQ</a></div>
        <PrimaryLink className="hidden min-h-11 sm:inline-flex">Essayer gratuitement</PrimaryLink>
        <details className="group relative sm:hidden"><summary className="grid h-11 w-11 cursor-pointer list-none place-items-center rounded-xl border border-[#dfe2ed]" aria-label="Ouvrir le menu"><span className="space-y-1.5"><i className="block h-px w-5 bg-current"/><i className="block h-px w-5 bg-current"/><i className="block h-px w-5 bg-current"/></span></summary><div className="absolute right-0 top-14 w-64 rounded-2xl border border-[#e0e3ed] bg-white p-4 shadow-2xl"><div className="flex flex-col gap-1 text-sm font-semibold"><a className="rounded-lg px-3 py-2.5 hover:bg-[#f1f3ff]" href="#fonctionnalites">Fonctionnalités</a><a className="rounded-lg px-3 py-2.5 hover:bg-[#f1f3ff]" href="#fonctionnement">Comment ça marche</a><a className="rounded-lg px-3 py-2.5 hover:bg-[#f1f3ff]" href="#tarifs">Tarifs</a><a className="rounded-lg px-3 py-2.5 hover:bg-[#f1f3ff]" href="#faq">FAQ</a><a href="#tarifs" className="mt-2 rounded-lg bg-[#3156f5] px-3 py-3 text-center text-white">Essayer gratuitement</a></div></div></details>
      </nav>
    </header>

    <main>
      <section id="accueil" className="relative scroll-mt-24 px-5 pb-24 pt-16 sm:px-8 sm:pb-28 sm:pt-24 lg:px-12 lg:pt-28">
        <div aria-hidden="true" className="absolute left-1/2 top-0 -z-10 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,#e8eaff_0%,transparent_68%)]"/>
        <div className="mx-auto grid max-w-[1440px] gap-16 lg:grid-cols-[.88fr_1.12fr] lg:items-center">
          <Reveal><div className="max-w-2xl"><span className="inline-flex items-center gap-2 rounded-full border border-[#dfe3f4] bg-white px-3.5 py-2 text-[11px] font-bold text-[#555d72] shadow-sm"><i className="h-2 w-2 rounded-full bg-[#7256db]"/>Conçu pour les petites entreprises</span><h1 className="mt-7 text-balance text-[clamp(3.2rem,6vw,6.7rem)] font-semibold leading-[.91] tracking-[-.072em]">Tes devis.<br/><span className="text-[#3156f5]">Envoyés plus vite.</span><br/>Signés plus tôt.</h1><p className="mt-7 max-w-xl text-lg leading-8 text-[#646a7b] sm:text-xl">Crée des devis professionnels, suis leur ouverture et transforme plus facilement tes prospects en clients.</p><div className="mt-9 flex flex-col gap-3 sm:flex-row"><PrimaryLink>Créer mon premier devis</PrimaryLink><a href="#fonctionnement" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-[#d8dce8] bg-white px-5 text-sm font-bold transition hover:border-[#3156f5] hover:text-[#3156f5]">Voir comment ça marche</a></div><p className="mt-5 flex items-center gap-2 text-xs font-medium text-[#7c8293]"><Icon name="check" className="h-4 w-4 text-[#3156f5]"/>Sans carte bancaire · Configuration en 2 minutes</p></div></Reveal>
          <Reveal y={18}><AppMockup/></Reveal>
        </div>
      </section>

      <section aria-label="Nos engagements" className="border-y border-[#dde1ed] bg-white px-5 sm:px-8 lg:px-12"><div className="mx-auto grid max-w-[1280px] grid-cols-2 lg:grid-cols-4">{[["check","Simple à utiliser"],["check","Documents professionnels"],["eye","Suivi en temps réel"],["shield","Données sécurisées"]].map(([icon,label],index)=><div key={label} className={`flex items-center gap-3 py-5 text-xs font-bold text-[#555c6e] sm:text-sm lg:justify-center ${index%2?"border-l border-[#e4e6ee]":""} ${index>1?"border-t border-[#e4e6ee] lg:border-t-0":""} ${index===2?"lg:border-l":""}`}><span className="grid h-8 w-8 place-items-center rounded-full bg-[#eef1ff] text-[#3156f5]"><Icon name={icon} className="h-4 w-4"/></span>{label}</div>)}</div></section>

      <section id="fonctionnalites" className="scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28 lg:px-12"><div className="mx-auto max-w-[1320px]"><Reveal><SectionHeading eyebrow="Tout ce qu’il faut" title="Moins d’administratif. Plus de temps pour tes clients." description="Un parcours simple, de la première ligne du devis jusqu’à la signature de ton client."/></Reveal><Reveal className="mt-14 grid gap-5 lg:grid-cols-3" stagger={0.1}>{benefits.map(({number,title,description,visual})=><article key={title} data-reveal-item className="flex min-h-[440px] flex-col overflow-hidden rounded-[1.5rem] border border-[#dfe2ed] bg-[#f1f3fb] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#cbd2ed] sm:p-8"><div className="flex items-start justify-between"><span className="text-xs font-bold text-[#9ba0b0]">{number}</span><span className="grid h-10 w-10 place-items-center rounded-full border border-[#d5d9e6] text-[#3156f5]"><Icon name="arrow" className="h-4 w-4"/></span></div><h3 className="mt-10 text-4xl font-semibold tracking-[-.05em]">{title}</h3><p className="mt-3 text-[#6c7284]">{description}</p><div className="mt-auto">{visual}</div></article>)}</Reveal></div></section>

      <section id="fonctionnement" className="scroll-mt-20 border-y border-[#dfe2ec] bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-12"><div className="mx-auto max-w-[1240px]"><Reveal><SectionHeading center eyebrow="Comment ça marche" title="Du prospect au devis envoyé, sans détour." description="Trois étapes guidées pour avancer naturellement et ne rien oublier."/></Reveal><div className="relative mt-16"><div aria-hidden="true" className="absolute bottom-20 left-[27px] top-20 hidden w-px bg-gradient-to-b from-[#3156f5] via-[#8a75ea] to-[#4fb78c] md:block lg:left-1/2"/>{steps.map(([title,description],index)=><Reveal key={title} className={`relative mb-8 grid gap-6 md:grid-cols-[56px_1fr] lg:grid-cols-[1fr_72px_1fr] lg:items-center ${index%2?"lg:[&>*:last-child]:col-start-1 lg:[&>*:last-child]:row-start-1":""}`}><div className={`relative z-10 grid h-14 w-14 place-items-center rounded-full border-4 border-white text-sm font-bold text-white shadow-lg lg:col-start-2 ${index===0?"bg-[#3156f5]":index===1?"bg-[#8068dc]":"bg-[#299a72]"}`}>0{index+1}</div><article className={`rounded-[1.5rem] border border-[#e0e3ed] bg-[#f8f9fd] p-7 sm:p-9 ${index%2?"lg:mr-8":"lg:ml-8"}`}><p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#8e94a5]">Étape {index+1}</p><h3 className="mt-4 text-2xl font-semibold tracking-[-.035em] sm:text-3xl">{title}</h3><p className="mt-4 max-w-lg leading-7 text-[#6a7081]">{description}</p><div className="mt-7 flex gap-2">{Array.from({length:3}).map((_,i)=><span key={i} className={`h-1.5 rounded-full ${i<=index?"w-10 bg-[#3156f5]":"w-5 bg-[#d9dce7]"}`}/>)}</div></article></Reveal>)}</div></div></section>

      <section className="bg-[#171927] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12"><div className="mx-auto max-w-[1380px]"><Reveal><SectionHeading inverse eyebrow="Pilotage en temps réel" title="Tu sais enfin où en est chaque opportunité." description="Repère en un coup d’œil les devis à envoyer, à relancer ou déjà acceptés."/></Reveal><Reveal className="mt-14 grid gap-3 md:grid-cols-2 xl:grid-cols-4" stagger={0.08} selector="[data-pipeline-column]">{pipeline.map(({title,count,color,cards})=><div key={title} data-pipeline-column className="rounded-2xl border border-white/10 bg-white/[.055] p-3.5"><div className="flex items-center justify-between px-1 py-2"><span className="flex items-center gap-2 text-xs font-semibold text-white/75"><i className="h-2 w-2 rounded-full" style={{background:color}}/>{title}</span><span className="rounded-md bg-white/8 px-2 py-1 text-[10px] font-bold text-white/50">{count}</span></div><div className="mt-2 space-y-3">{cards.map(([id,client,amount])=><article key={id} className="rounded-xl bg-white p-4 text-[#171927] shadow-[0_14px_30px_rgba(0,0,0,.15)]"><div className="flex items-center justify-between"><span className="text-[9px] font-bold uppercase tracking-[.12em] text-[#999eae]">{id}</span><span className="text-[9px] text-[#9da2b1]">•••</span></div><p className="mt-4 text-sm font-bold">{client}</p><div className="mt-5 flex items-end justify-between"><span className="text-[9px] text-[#969bab]">Montant</span><strong className="text-sm">{amount}</strong></div></article>)}</div></div>)}</Reveal></div></section>

      <section className="border-b border-[#dfe2ec] bg-[#eeefff] px-5 py-16 sm:px-8 sm:py-20 lg:px-12"><Reveal className="mx-auto max-w-[1280px]"><div className="grid grid-cols-2 lg:grid-cols-4">{stats.map(([value,label],index)=><div key={label} className={`px-3 py-5 sm:px-8 ${index%2?"border-l border-[#cfd3e6]":""} ${index>1?"border-t border-[#cfd3e6] lg:border-t-0":""} ${index===2?"lg:border-l":""}`}><strong className="text-4xl tracking-[-.055em] sm:text-5xl">{value}</strong><p className="mt-2 text-sm text-[#686e80]">{label}</p></div>)}</div><p className="mt-6 text-center text-[10px] text-[#969bad]">Données illustratives présentées uniquement pour cette démonstration.</p></Reveal></section>

      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12"><div className="mx-auto max-w-[1320px]"><Reveal><SectionHeading eyebrow="Ils gagnent du temps" title="Des journées plus simples, devis après devis."/></Reveal><Reveal className="mt-14 grid gap-5 lg:grid-cols-3" stagger={0.1}>{testimonials.map(([name,role,quote],index)=><figure key={name} data-reveal-item className={`flex min-h-72 flex-col rounded-[1.5rem] p-7 sm:p-9 ${index===1?"bg-[#3156f5] text-white":"border border-[#dfe2ed] bg-white"}`}><span className={`text-5xl leading-none ${index===1?"text-white/35":"text-[#c8ceeb]"}`}>“</span><blockquote className="mt-6 text-xl font-medium leading-8 tracking-[-.02em]">{quote}</blockquote><figcaption className={`mt-auto pt-8 text-sm ${index===1?"text-white/65":"text-[#747a8c]"}`}><strong className={index===1?"text-white":"text-[#171927]"}>{name}</strong> · {role}</figcaption></figure>)}</Reveal><p className="mt-5 text-center text-[10px] text-[#9ba0af]">Tous les noms et témoignages présentés sont fictifs.</p></div></section>

      <section id="tarifs" className="scroll-mt-20 border-y border-[#dfe2ec] bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-12"><div className="mx-auto max-w-[1200px]"><Reveal><SectionHeading center eyebrow="Des tarifs simples" title="Commence gratuitement. Évolue quand tu veux." description="Choisis le niveau qui correspond à ton activité, sans engagement."/></Reveal><Reveal className="mt-14 grid items-stretch gap-5 lg:grid-cols-3" stagger={0.1}>{plans.map(({name,price,suffix,note,featured,features})=><article key={name} data-reveal-item className={`relative flex flex-col rounded-[1.5rem] p-7 sm:p-8 ${featured?"bg-[#171927] text-white shadow-[0_28px_70px_rgba(23,25,39,.22)] lg:-my-4 lg:py-12":"border border-[#dfe2ed] bg-[#f9faff]"}`}>{featured&&<span className="absolute right-6 top-6 rounded-full bg-[#3156f5] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[.14em]">Le plus choisi</span>}<p className={`text-sm font-bold ${featured?"text-[#9eb0ff]":"text-[#3156f5]"}`}>{name}</p><div className="mt-8 flex items-end gap-2"><strong className="text-5xl tracking-[-.06em]">{price}</strong>{suffix&&<span className={`pb-1 text-sm ${featured?"text-white/50":"text-[#797f90]"}`}>{suffix}</span>}</div><p className={`mt-3 text-sm ${featured?"text-white/58":"text-[#6f7586]"}`}>{note}</p><div className={`my-7 h-px ${featured?"bg-white/12":"bg-[#dfe2ed]"}`}/><ul className="space-y-4 text-sm">{features.map(feature=><li key={feature} className="flex items-center gap-3"><span className={`grid h-5 w-5 place-items-center rounded-full ${featured?"bg-[#3156f5] text-white":"bg-[#e8edff] text-[#3156f5]"}`}><Icon name="check" className="h-3 w-3"/></span>{feature}</li>)}</ul><PrimaryLink light={featured} className={`mt-9 w-full ${featured?"":"shadow-none"}`}>{name==="Starter"?"Commencer gratuitement":"Choisir "+name}</PrimaryLink></article>)}</Reveal><p className="mt-8 text-center text-xs text-[#858a9b]">Tarifs fictifs · Aucun paiement réel n’est proposé sur cette démonstration.</p></div></section>

      <section id="faq" className="scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28 lg:px-12"><div className="mx-auto grid max-w-[1160px] gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20"><Reveal><SectionHeading eyebrow="Questions fréquentes" title="Tout ce qu’il faut savoir avant de commencer."/><p className="mt-7 text-sm leading-6 text-[#757b8d]">Une autre question ? Notre équipe fictive te répondrait avec plaisir.</p></Reveal><Reveal><div className="border-t border-[#d8dce8]">{faqs.map(([question,answer],index)=><details key={question} className="group border-b border-[#d8dce8]" open={index===0}><summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg font-bold tracking-[-.02em]"><span>{question}</span><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#e9edff] text-[#3156f5] transition group-open:rotate-45">+</span></summary><p className="max-w-2xl pb-6 pr-10 leading-7 text-[#6c7284]">{answer}</p></details>)}</div></Reveal></div></section>

      <section className="px-5 pb-20 sm:px-8 sm:pb-28 lg:px-12"><Reveal className="relative mx-auto max-w-[1320px] overflow-hidden rounded-[2rem] bg-[#3156f5] px-6 py-16 text-center text-white sm:px-12 sm:py-20"><div aria-hidden="true" className="absolute -left-24 -top-32 h-80 w-80 rounded-full border-[60px] border-white/8"/><div aria-hidden="true" className="absolute -bottom-40 -right-24 h-96 w-96 rounded-full bg-[#886de2]/50 blur-2xl"/><div className="relative mx-auto max-w-4xl"><p className="text-[10px] font-bold uppercase tracking-[.2em] text-white/60">Prêt à gagner du temps ?</p><h2 className="mt-5 text-balance text-4xl font-semibold leading-[1.02] tracking-[-.055em] sm:text-6xl lg:text-7xl">Ton prochain devis peut partir dans deux minutes.</h2><div className="mt-9"><PrimaryLink light>Commencer gratuitement</PrimaryLink></div><p className="mt-5 text-xs text-white/65">Aucune carte bancaire requise.</p></div></Reveal></section>
    </main>

    <footer className="bg-[#171927] px-5 py-12 text-white sm:px-8 lg:px-12"><div className="mx-auto max-w-[1320px]"><div className="grid gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_.5fr_.5fr]"><div><Logo inverse/><p className="mt-5 max-w-sm text-sm leading-6 text-white/45">Les devis professionnels, sans les complications.</p></div><div><p className="text-xs font-bold uppercase tracking-[.14em] text-white/45">Produit</p><div className="mt-5 flex flex-col gap-3 text-sm text-white/72"><a href="#fonctionnalites">Fonctionnalités</a><a href="#tarifs">Tarifs</a><a href="#faq">FAQ</a></div></div><div><p className="text-xs font-bold uppercase tracking-[.14em] text-white/45">Légal</p><div className="mt-5 flex flex-col gap-3 text-sm text-white/72"><a href="#footer">Mentions légales</a><a href="#footer">Confidentialité</a></div></div></div><div id="footer" className="flex flex-col gap-3 pt-7 text-xs text-white/38 sm:flex-row sm:items-center sm:justify-between"><p>Concept fictif créé à des fins de démonstration.</p><Link className="text-white/65 underline decoration-white/20 underline-offset-4 transition hover:text-white" href="/demo">Toutes les démos</Link></div></div></footer>
  </div>;
}

"use client";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/demos/shared/Reveal";

const base = "/images/demos/patisserie/";
const products = [
  ["Éclat Chocolat", "Mousse chocolat noir, praliné noisette, biscuit croustillant", "8,50 €"],
  ["Nuage Framboise", "Framboise, vanille de Madagascar, biscuit amande", "8 €"],
  ["Tarte Citron", "Citron jaune, crème légère, meringue délicate", "7,50 €"],
  ["Paris Noisette", "Pâte à choux, crème pralinée, noisettes torréfiées", "8 €"],
];
const reviews = [["Émilie", "Des desserts aussi beaux que bons, sans être inutilement sucrés."], ["Paul", "Les viennoiseries valent à elles seules le détour."], ["Nora", "Une boutique magnifique et des créations toujours très justes."]];

const Button = ({ href, children, outline = false }) => <a href={href} className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition hover:-translate-y-0.5 ${outline ? "border border-[#442b28] hover:bg-[#442b28] hover:text-white" : "bg-[#442b28] text-white hover:bg-[#72504a]"}`}>{children}</a>;

export default function PatisserieSite() {
  return <div className="bg-[#fbf7f0] text-[#442b28] selection:bg-[#d8a9a3]">
    <header className="sticky top-0 z-40 border-b border-[#442b28]/10 bg-[#fbf7f0]/92 backdrop-blur-xl">
      <nav aria-label="Navigation principale" className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-10">
        <a href="#accueil" className="font-serif text-2xl tracking-[-0.04em]">Maison Éclat</a>
        <div className="hidden gap-8 text-sm md:flex"><a href="#creations">Créations</a><a href="#savoir-faire">Savoir-faire</a><a href="#boutique">La boutique</a></div>
        <a href="#contact" className="rounded-full border border-[#442b28] px-5 py-2.5 text-sm font-semibold transition hover:bg-[#442b28] hover:text-white">Commander</a>
      </nav>
    </header>
    <main>
      <section id="accueil" className="relative min-h-[82svh] overflow-hidden">
        <Image src={`${base}hero.jpg`} alt="Créations raffinées de Maison Éclat" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#fbf7f0]/98 via-[#fbf7f0]/80 to-transparent" />
        <Reveal className="relative mx-auto flex min-h-[82svh] max-w-[1440px] items-center px-5 py-20 sm:px-8 lg:px-10"><div className="max-w-2xl"><p className="mb-5 text-xs font-bold uppercase tracking-[.24em] text-[#a76f68]">Pâtisserie contemporaine · Paris</p><h1 className="font-serif text-5xl leading-[1.02] tracking-[-.055em] sm:text-7xl lg:text-[5.5rem]">La gourmandise dans ses moindres détails.</h1><p className="mt-6 max-w-xl text-lg leading-8 text-[#6f5d58]">Pâtisseries, entremets et viennoiseries façonnés chaque jour dans notre atelier parisien.</p><div className="mt-8 flex flex-wrap gap-3"><Button href="#creations">Découvrir les créations</Button><Button href="#contact" outline>Commander</Button></div></div></Reveal>
      </section>

      <section id="creations" className="scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28 lg:px-10"><div className="mx-auto max-w-[1440px]"><Reveal><p className="text-xs font-bold uppercase tracking-[.22em] text-[#a76f68]">La collection</p><h2 className="mt-4 font-serif text-4xl tracking-[-.045em] sm:text-6xl">Les créations du moment</h2></Reveal><Reveal className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={.09}>{products.map(([name,desc,price],i)=><article key={name} data-reveal-item className="group"><div className="relative aspect-[4/5] overflow-hidden bg-[#eee3da]"><Image src={`${base}creation-${i+1}.jpg`} alt={name} fill sizes="(max-width: 640px) 100vw, 25vw" className="object-cover transition duration-700 group-hover:scale-[1.035]" /></div><div className="border-x border-b border-[#442b28]/12 p-5"><div className="flex justify-between gap-4"><h3 className="font-serif text-2xl">{name}</h3><span className="shrink-0 text-sm font-semibold">{price}</span></div><p className="mt-3 text-sm leading-6 text-[#796762]">{desc}</p></div></article>)}</Reveal></div></section>

      <section id="savoir-faire" className="scroll-mt-20 bg-[#eadbd5] px-5 py-20 sm:px-8 sm:py-28 lg:px-10"><div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-20"><Reveal><p className="text-xs font-bold uppercase tracking-[.22em] text-[#95655e]">Notre savoir-faire</p><h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-.045em] sm:text-6xl">Chaque création commence par le produit.</h2><p className="mt-7 text-lg leading-8 text-[#705e59]">Farines françaises, beurre de qualité, chocolats sélectionnés et fruits de saison : notre carte privilégie les ingrédients que nous avons réellement envie de travailler.</p><div className="mt-9 grid gap-3 sm:grid-cols-3">{["Fabrication quotidienne","Saisons respectées","Petites séries"].map((x,i)=><div key={x} className="border-t border-[#442b28]/25 pt-4"><span className="text-xs text-[#95655e]">0{i+1}</span><p className="mt-2 font-semibold">{x}</p></div>)}</div></Reveal><Reveal className="relative min-h-[500px]"><Image src={`${base}chef.jpg`} alt="Chef pâtissier finalisant une création" fill sizes="(max-width:1023px) 100vw,55vw" className="object-cover" /></Reveal></div></section>

      <section className="bg-[#442b28] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-10"><div className="mx-auto max-w-[1440px]"><Reveal className="grid gap-8 lg:grid-cols-2 lg:items-end"><div><p className="text-xs font-bold uppercase tracking-[.22em] text-[#deb4ab]">Édition limitée</p><h2 className="mt-4 font-serif text-6xl tracking-[-.05em] sm:text-8xl">Collection été</h2></div><div><p className="max-w-lg text-lg leading-8 text-white/65">Des créations plus fraîches, plus fruitées et toujours réalisées en petites séries.</p><a href="#creations" className="mt-6 inline-block border-b border-white pb-1 text-sm font-semibold">Découvrir la collection →</a></div></Reveal><Reveal className="mt-12 grid gap-5 md:grid-cols-[1.35fr_.65fr]"><div className="relative min-h-[460px]"><Image src={`${base}season-1.jpg`} alt="Collection de desserts aux fruits d'été" fill sizes="70vw" className="object-cover" /></div><div className="relative min-h-[360px]"><Image src={`${base}season-2.jpg`} alt="Création estivale pêche et abricot" fill sizes="35vw" className="object-cover" /></div></Reveal></div></section>

      <section id="boutique" className="scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28 lg:px-10"><Reveal className="mx-auto grid max-w-[1440px] grid-cols-2 gap-4"><div className="relative col-span-2 min-h-[520px]"><Image src={`${base}boutique.jpg`} alt="Boutique Maison Éclat" fill sizes="100vw" className="object-cover" /></div><div className="relative min-h-72"><Image src={`${base}gallery-1.jpg`} alt="Viennoiseries artisanales" fill sizes="50vw" className="object-cover" /></div><div className="relative min-h-72"><Image src={`${base}gallery-2.jpg`} alt="Boîte de pâtisseries Maison Éclat" fill sizes="50vw" className="object-cover" /></div></Reveal></section>

      <section className="bg-[#f1e6df] px-5 py-20 sm:px-8 sm:py-28 lg:px-10"><div className="mx-auto max-w-[1440px]"><Reveal><h2 className="max-w-3xl font-serif text-4xl tracking-[-.04em] sm:text-6xl">Des créations qui laissent un souvenir.</h2></Reveal><Reveal className="mt-10 grid gap-5 lg:grid-cols-3" stagger={.1}>{reviews.map(([name,quote])=><figure key={name} data-reveal-item className="border border-[#442b28]/15 bg-[#fbf7f0] p-8"><p className="text-[#b88b61]">★★★★★</p><blockquote className="mt-6 font-serif text-2xl leading-9">“{quote}”</blockquote><figcaption className="mt-8 text-xs font-bold uppercase tracking-[.18em]">{name}</figcaption></figure>)}</Reveal></div></section>

      <section id="contact" className="px-5 py-20 sm:px-8 sm:py-28 lg:px-10"><Reveal className="mx-auto grid max-w-[1200px] gap-10 border border-[#442b28]/15 p-7 sm:p-12 lg:grid-cols-2"><div><p className="text-xs font-bold uppercase tracking-[.22em] text-[#a76f68]">La boutique</p><h2 className="mt-4 font-serif text-5xl">Maison Éclat</h2><p className="mt-6 leading-8 text-[#705e59]">18 rue du Faubourg, Paris 9e<br/><br/>Mardi — dimanche<br/>8h30 — 19h30</p></div><div className="flex items-end lg:justify-end"><Button href="#contact">Commander en boutique</Button></div></Reveal></section>
    </main>
    <footer className="bg-[#442b28] px-5 py-9 text-white/60 sm:px-8"><div className="mx-auto flex max-w-[1440px] flex-col gap-3 text-sm sm:flex-row sm:justify-between"><span className="font-serif text-lg text-white">Maison Éclat</span><span>Concept fictif de démonstration · <Link href="/demo">Toutes les démos</Link></span></div></footer>
  </div>;
}

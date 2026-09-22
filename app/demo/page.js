import Image from "next/image";
import { getAssetPath } from "@/lib/getAssetPath";
import Link from "next/link";
import CtaButton from "@/components/demos/shared/CtaButton";
import DemoFooter from "@/components/demos/shared/DemoFooter";
import DemoNavbar from "@/components/demos/shared/DemoNavbar";
import Reveal from "@/components/demos/shared/Reveal";
import SectionTitle from "@/components/demos/shared/SectionTitle";
import { demoConcepts } from "./demo-data";

export const metadata = {
  title: "Collection de démos — Atelier Démo",
};

export default function DemoIndexPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#f5f3ee]">
      <DemoNavbar />
      <main>
        <section className="relative px-5 pb-20 pt-20 sm:px-8 sm:pb-28 sm:pt-28">
          <div aria-hidden="true" className="absolute -right-32 top-8 h-96 w-96 rounded-full bg-[#e66b3d]/10 blur-3xl" />
          <Reveal className="relative mx-auto max-w-7xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-[#d55b32]">Collection 01 — Décors web</p>
            <h1 className="max-w-5xl text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-7xl lg:text-[6.5rem]">
              Huit univers pour raconter le web autrement.
            </h1>
            <div className="mt-9 flex max-w-3xl flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-xl text-lg leading-8 text-[#68716c] sm:text-xl">
                Une collection de mini-sites fictifs conçus comme des décors crédibles, vivants et prêts à filmer.
              </p>
              <CtaButton href="#concepts">Explorer</CtaButton>
            </div>
          </Reveal>
        </section>

        <section id="concepts" className="scroll-mt-24 border-t border-black/10 bg-[#ebe8e1] px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionTitle
                eyebrow="Les concepts"
                title="Une identité distincte pour chaque métier"
                description="Chaque piste possède son propre rythme, sa propre palette et sa propre manière de mettre le contenu en scène."
              />
            </Reveal>

            <Reveal className="mt-12 grid gap-5 md:grid-cols-2 lg:gap-7" stagger={0.08}>
              {demoConcepts.map((concept, index) => (
                <Link
                  key={concept.slug}
                  href={`/demo/${concept.slug}`}
                  data-reveal-item
                  className="group overflow-hidden rounded-[2rem] bg-white shadow-[0_1px_0_rgba(0,0,0,0.08)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(24,34,29,0.12)]"
                >
                  <article>
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#dedbd3]">
                      <Image
                        src={getAssetPath(concept.image)}
                        alt={`Aperçu graphique du concept ${concept.title}`}
                        fill
                        sizes="(max-width: 767px) 100vw, 50vw"
                        priority={index < 2}
                        className="object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
                      />
                      <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-2 text-[0.65rem] font-bold uppercase tracking-[0.16em] backdrop-blur-md">
                        {concept.tone}
                      </span>
                    </div>
                    <div className="flex items-start justify-between gap-6 p-6 sm:p-8">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: concept.color }}>
                          {concept.category}
                        </p>
                        <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em]">{concept.title}</h2>
                        <p className="mt-3 max-w-lg text-sm leading-6 text-[#68716c]">{concept.description}</p>
                      </div>
                      <span aria-hidden="true" className="mt-1 grid size-11 shrink-0 place-items-center rounded-full border border-black/10 transition group-hover:border-transparent group-hover:bg-[#18221d] group-hover:text-white">
                        ↗
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </Reveal>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-8 sm:py-28">
          <Reveal className="mx-auto max-w-7xl rounded-[2rem] bg-[#18221d] px-6 py-12 text-white sm:px-12 sm:py-16">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#ee916d]">Un terrain de jeu visuel</p>
            <div className="mt-5 grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
              <h2 className="text-balance text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl">
                Des interfaces pensées pour être vues en mouvement.
              </h2>
              <p className="text-base leading-7 text-white/65">
                Navigation, rythme du scroll, micro-interactions et détails responsive seront adaptés à chaque univers.
              </p>
            </div>
          </Reveal>
        </section>
      </main>
      <DemoFooter />
    </div>
  );
}

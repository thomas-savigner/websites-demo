import Image from "next/image";
import Link from "next/link";
import { demoConcepts } from "@/app/demo/demo-data";

export const metadata = {
  title: "conseil managment - Recherche Google",
  description: "Résultats fictifs pour une recherche de conseil en management, avec Horizon Conseil.",
};

const horizonConseil = demoConcepts.find((concept) => concept.slug === "horizon-conseil");

const organicResults = [
  {
    name: "Cadremploi",
    favicon: "P",
    url: "cadremploi.fr › conseils › management-entreprise",
    title: "Trouver un cabinet de conseil en management adapté à votre PME",
    description:
      "Organisation, stratégie, conduite du changement : découvrez une sélection de cabinets qui accompagnent dirigeants et équipes dans leurs transformations.",
  },
  {
    name: "Bpifrance Création",
    favicon: "C",
    url: "bpifrance-creation.fr › encyclopedie › management",
    title: "Conseil en management : définition, missions et méthodes",
    description:
      "Le conseil en management aide les entreprises à améliorer leur organisation, leur pilotage et leurs méthodes de travail de façon durable.",
  },
];

const localBusinesses = [
  {
    marker: "A",
    name: horizonConseil.title,
    category: horizonConseil.category,
    rating: "4,8",
    reviews: "186",
    details: "12 rue du Sentier · 900 m",
    hours: "Ouvert · Ferme à 18:30",
    featured: true,
  },
  {
    marker: "B",
    name: "Cap Structure",
    category: "Cabinet de conseil",
    rating: "4,6",
    reviews: "247",
    details: "28 rue Réaumur · 1,2 km",
    hours: "Ouvert · Ferme à 18:30",
  },
  {
    marker: "C",
    name: "L’Atelier du Pilotage",
    category: "Consultant en management",
    rating: "4,7",
    reviews: "129",
    details: "6 rue du Sentier · 1,5 km",
    hours: "Ouvert · Ferme à 18:00",
  },
];

const bottomResults = [
  {
    name: "Harvard Business Review France",
    favicon: "B",
    url: "hbrfrance.fr › management › organisation",
    title: "Comment choisir son consultant en management ?",
    description:
      "Méthode, expérience, posture et connaissance des PME : les critères utiles pour sélectionner le bon accompagnement.",
  },
  {
    name: "France Num",
    favicon: "S",
    url: "entreprises.gouv.fr › conseil › organisation",
    title: "Conseil en organisation pour TPE et PME",
    description:
      "Des consultants indépendants accompagnent les petites entreprises sur leur organisation, leurs priorités et leurs outils de pilotage.",
  },
];

function GoogleLogo() {
  return (
    <div aria-label="Google" className="select-none whitespace-nowrap text-[30px] font-medium tracking-[-0.055em] sm:text-[32px]">
      <span className="text-[#4285f4]">G</span>
      <span className="text-[#ea4335]">o</span>
      <span className="text-[#fbbc05]">o</span>
      <span className="text-[#4285f4]">g</span>
      <span className="text-[#34a853]">l</span>
      <span className="text-[#ea4335]">e</span>
    </div>
  );
}

function SearchIcon({ className = "h-5 w-5" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={`${className} fill-none stroke-current`} strokeWidth="2" strokeLinecap="round">
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.5 15.5 4 4" />
    </svg>
  );
}

function MoreIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <circle cx="5" cy="12" r="1.7" />
      <circle cx="12" cy="12" r="1.7" />
      <circle cx="19" cy="12" r="1.7" />
    </svg>
  );
}

function OrganicResult({ result, accent = "#1a73e8" }) {
  return (
    <article className="mb-8 max-w-[652px]">
      <div className="flex items-center gap-3">
        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#f1f3f4] text-xs font-semibold text-[#3c4043]">
          {result.favicon}
        </span>
        <div className="min-w-0">
          <p className="text-sm leading-4 text-[#202124]">{result.name}</p>
          <p className="mt-0.5 truncate text-xs text-[#4d5156]">{result.url}</p>
        </div>
        <button type="button" aria-label={`Plus d’options pour ${result.name}`} className="ml-1 grid h-8 w-8 place-items-center rounded-full text-[#5f6368] hover:bg-[#f1f3f4]">
          <MoreIcon />
        </button>
      </div>
      <h2 className="mt-2 text-xl leading-7 hover:underline" style={{ color: accent }}>
        <a href="#">{result.title}</a>
      </h2>
      <p className="mt-1 text-sm leading-[1.58] text-[#4d5156]">{result.description}</p>
    </article>
  );
}

function LocalMap() {
  return (
    <div className="relative min-h-[310px] overflow-hidden bg-[#e8eee4] lg:min-h-full" aria-label="Carte fictive des cabinets de conseil à Paris" role="img">
      <svg aria-hidden="true" viewBox="0 0 620 410" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
        <rect width="620" height="410" fill="#e9eee5" />
        <path d="M-40 80 665 345M-60 330 660 75M75-20l240 460M510-35 310 210M-10 200l650 15" stroke="#fff" strokeWidth="19" />
        <path d="M-40 80 665 345M-60 330 660 75M75-20l240 460M510-35 310 210M-10 200l650 15" stroke="#cbd0ca" strokeWidth="1.5" />
        <path d="M125 0c35 80 52 150 44 218s-45 131-103 192M447 0c-10 76-2 147 23 214s64 125 117 196" fill="none" stroke="#f2ca68" strokeWidth="9" />
        <path d="M125 0c35 80 52 150 44 218s-45 131-103 192M447 0c-10 76-2 147 23 214s64 125 117 196" fill="none" stroke="#fff" strokeWidth="5" />
        <path d="M340 315c40-20 81-13 104 15 16 19 19 46 8 80H290c4-39 21-75 50-95Z" fill="#cfe3c3" />
        <text x="25" y="42" fill="#718078" fontSize="13">République</text>
        <text x="470" y="62" fill="#718078" fontSize="13">Arts et Métiers</text>
        <text x="38" y="374" fill="#718078" fontSize="13">Bourse</text>
        <text x="455" y="365" fill="#718078" fontSize="13">Le Marais</text>
        <text x="254" y="201" fill="#8a928c" fontSize="11" transform="rotate(-22 254 201)">boulevard de Sébastopol</text>
        <text x="320" y="348" fill="#6d8a68" fontSize="12">Square du Temple</text>
      </svg>
      <MapMarker label="A" className="left-[42%] top-[42%]" featured />
      <MapMarker label="B" className="left-[68%] top-[25%]" />
      <MapMarker label="C" className="left-[25%] top-[68%]" />
      <div className="absolute bottom-3 left-3 rounded-sm bg-white/95 px-2 py-1 text-[10px] text-[#5f6368] shadow-sm">Données cartographiques fictives</div>
      <div className="absolute right-3 top-3 grid gap-2">
        <button type="button" aria-label="Agrandir la carte" className="grid h-9 w-9 place-items-center rounded-sm bg-white text-lg text-[#5f6368] shadow-md">⤢</button>
        <div className="overflow-hidden rounded-sm bg-white shadow-md">
          <button type="button" aria-label="Zoom avant" className="grid h-9 w-9 place-items-center border-b border-[#dadce0] text-xl text-[#5f6368]">+</button>
          <button type="button" aria-label="Zoom arrière" className="grid h-9 w-9 place-items-center text-xl text-[#5f6368]">−</button>
        </div>
      </div>
    </div>
  );
}

function MapMarker({ label, className, featured = false }) {
  return (
    <span className={`absolute -translate-x-1/2 -translate-y-full ${className}`}>
      <span className={`grid h-9 w-9 place-items-center rounded-full border-[3px] border-white text-sm font-bold text-white shadow-md ${featured ? "bg-[#153943]" : "bg-[#ea4335]"}`}>
        {label}
      </span>
      <span className={`mx-auto block h-2 w-2 -translate-y-1 rotate-45 ${featured ? "bg-[#153943]" : "bg-[#ea4335]"}`} />
    </span>
  );
}

function LocalPack() {
  return (
    <section className="mb-9 max-w-[760px]" aria-labelledby="local-title">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h2 id="local-title" className="text-[22px] leading-7 text-[#202124]">Cabinets de conseil</h2>
            <MoreIcon />
          </div>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-[#4d5156]">
            <span aria-hidden="true" className="text-[#ea4335]">●</span> Paris
          </p>
        </div>
        <button type="button" className="rounded-full border border-[#dadce0] px-4 py-2 text-sm font-medium text-[#1a73e8] hover:bg-[#f8fbff]">Filtres</button>
      </div>

      <div className="overflow-hidden rounded-xl border border-[#dadce0] bg-white shadow-[0_1px_2px_rgba(60,64,67,.08)] lg:grid lg:grid-cols-[1.08fr_.92fr]">
        <div className="divide-y divide-[#e8eaed]">
          {localBusinesses.map((business) => (
            <article key={business.name} className={`relative p-4 pr-12 ${business.featured ? "bg-[#f4f7f4]" : "bg-white"}`}>
              <span className={`absolute right-4 top-4 grid h-7 w-7 place-items-center rounded-full text-xs font-bold text-white ${business.featured ? "bg-[#153943]" : "bg-[#ea4335]"}`}>
                {business.marker}
              </span>
              <h3 className="text-base font-medium text-[#202124]">{business.name}</h3>
              <div className="mt-1 flex flex-wrap items-center gap-1 text-sm">
                <span className="text-[#b06000]">{business.rating}</span>
                <span aria-label="5 étoiles" className="tracking-[-.08em] text-[#f9ab00]">★★★★★</span>
                <span className="text-[#70757a]">({business.reviews}) · {business.category}</span>
              </div>
              <p className="mt-1 text-sm text-[#4d5156]">{business.details}</p>
              <p className="mt-1 text-sm"><span className="font-medium text-[#188038]">{business.hours.split("·")[0]}</span><span className="text-[#4d5156]"> ·{business.hours.split("·")[1]}</span></p>
              {business.featured && <p className="mt-2 text-xs font-medium" style={{ color: horizonConseil.color }}>Organisation · Pilotage · Transformation</p>}
            </article>
          ))}
          <button type="button" className="flex w-full items-center justify-center gap-2 bg-white px-4 py-3.5 text-sm font-medium text-[#1a73e8] hover:bg-[#f8f9fa]">
            Plus de cabinets <span aria-hidden="true">→</span>
          </button>
        </div>
        <LocalMap />
      </div>
    </section>
  );
}

function HorizonConseilResult() {
  return (
    <article className="mb-8 max-w-[680px]">
      <div className="flex items-center gap-3">
        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-sm font-bold text-white" style={{ backgroundColor: horizonConseil.color }}>A</span>
        <div>
          <p className="text-sm leading-4 text-[#202124]">{horizonConseil.title}</p>
          <p className="mt-0.5 text-xs text-[#4d5156]">horizon-conseil.fr › accompagnements</p>
        </div>
        <button type="button" aria-label="Plus d’options pour Horizon Conseil" className="grid h-8 w-8 place-items-center rounded-full text-[#5f6368] hover:bg-[#f1f3f4]"><MoreIcon /></button>
      </div>
      <div className="mt-2 grid gap-4 sm:grid-cols-[1fr_116px]">
        <div>
          <h2 className="text-xl leading-7 text-[#1a0dab] hover:underline">
            <Link href="/demo/horizon-conseil">{horizonConseil.title} — Conseil en organisation et pilotage</Link>
          </h2>
          <p className="mt-1 text-sm leading-[1.58] text-[#4d5156]">{horizonConseil.description} Accompagnement des dirigeants et petites équipes, diagnostic organisationnel et outils de pilotage sur mesure.</p>
          <p className="mt-2 text-sm text-[#4d5156]"><strong className="font-medium text-[#202124]">Interventions à Paris et à distance</strong> · Disponible aujourd’hui jusqu’à 18:30</p>
        </div>
        <Link href="/demo/horizon-conseil" className="relative hidden h-[92px] overflow-hidden rounded-lg sm:block" aria-label="Voir le site Horizon Conseil">
          <Image src={`/images/demos/consultant/about.jpg`} alt={`Aperçu de ${horizonConseil.title}`} fill sizes="116px" className="object-cover" />
        </Link>
      </div>
      <div className="mt-3 flex gap-5 text-sm text-[#1a0dab]">
        <Link href="/demo/horizon-conseil">Accompagnements</Link>
        <Link href="/demo/horizon-conseil#approche">Notre approche</Link>
        <Link href="/demo/horizon-conseil#contact">Prendre rendez-vous</Link>
      </div>
    </article>
  );
}

export default function HorizonConseilSearchPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#202124]">
      <header className="border-b border-[#ebedef] bg-white">
        <div className="flex items-center gap-4 px-4 pb-3 pt-4 sm:gap-7 sm:px-7 lg:px-8">
          <GoogleLogo />
          <form className="flex h-12 min-w-0 max-w-[690px] flex-1 items-center rounded-full border border-transparent bg-white px-4 shadow-[0_1px_6px_rgba(32,33,36,.28)] hover:shadow-[0_1px_6px_rgba(32,33,36,.38)]" action="#">
            <input aria-label="Rechercher" name="q" defaultValue="conseil managment" className="min-w-0 flex-1 bg-transparent text-base text-[#202124] outline-none" />
            <button type="reset" aria-label="Effacer" className="hidden border-r border-[#dadce0] px-3 text-2xl font-light text-[#70757a] sm:block">×</button>
            <button type="button" aria-label="Recherche vocale" className="hidden px-3 text-[#4285f4] sm:block">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="2"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3m-3 0h6"/></svg>
            </button>
            <button type="submit" aria-label="Lancer la recherche" className="pl-2 text-[#4285f4]"><SearchIcon /></button>
          </form>
          <div className="ml-auto hidden items-center gap-4 sm:flex">
            <button type="button" aria-label="Applications Google" className="grid h-10 w-10 grid-cols-3 place-content-center gap-[3px] rounded-full hover:bg-[#f1f3f4]">
              {Array.from({ length: 9 }).map((_, index) => <span key={index} className="h-[3px] w-[3px] rounded-full bg-[#5f6368]" />)}
            </button>
            <button type="button" aria-label="Compte Google" className="grid h-8 w-8 place-items-center rounded-full bg-[#7e57c2] text-sm font-medium text-white">T</button>
          </div>
        </div>
        <nav aria-label="Types de résultats" className="overflow-x-auto px-4 sm:pl-[142px] lg:pl-[180px]">
          <div className="flex h-12 min-w-max items-end gap-1 text-sm text-[#5f6368]">
            <a href="#" className="flex h-full items-center gap-1.5 border-b-[3px] border-[#1a73e8] px-3 font-medium text-[#1a73e8]"><SearchIcon className="h-4 w-4" /> Tous</a>
            <a href="#" className="flex h-full items-center px-3 hover:text-[#202124]">Images</a>
            <a href="#" className="flex h-full items-center px-3 hover:text-[#202124]">Maps</a>
            <a href="#" className="flex h-full items-center px-3 hover:text-[#202124]">Actualités</a>
            <a href="#" className="flex h-full items-center px-3 hover:text-[#202124]">Vidéos</a>
            <a href="#" className="flex h-full items-center px-3 hover:text-[#202124]">Plus</a>
            <a href="#" className="ml-3 mb-2.5 rounded-full border border-[#dadce0] px-3 py-1.5 hover:bg-[#f8f9fa]">Outils</a>
          </div>
        </nav>
      </header>

      <main className="px-5 pb-16 pt-3 sm:ml-[122px] sm:px-5 lg:ml-[160px]">
        <div className="max-w-[800px]">
          <p className="mb-1 text-sm text-[#4d5156]">Résultats pour <a href="#" className="font-medium italic text-[#1a0dab] hover:underline">conseil management</a></p>
          <p className="mb-4 text-sm text-[#4d5156]">Rechercher plutôt <strong className="font-normal text-[#1a0dab]">conseil managment</strong></p>
          <p className="mb-5 text-sm text-[#70757a]">Environ 8 460 000 résultats (0,42 secondes)</p>
          {organicResults.map((result) => <OrganicResult key={result.name} result={result} />)}

          <section className="mb-8 max-w-[652px] border-y border-[#dadce0] py-2" aria-labelledby="questions-title">
            <h2 id="questions-title" className="py-2 text-[22px]">Autres questions</h2>
            {["Quel est le rôle d’un consultant en management ?", "Pourquoi faire appel à un cabinet de conseil ?", "Combien coûte une mission de conseil en management ?"].map((question) => (
              <details key={question} className="group border-t border-[#dadce0]">
                <summary className="flex cursor-pointer list-none items-center justify-between py-3.5 text-base">{question}<span className="ml-4 text-xl text-[#70757a] group-open:rotate-180">⌄</span></summary>
                <p className="pb-4 pr-10 text-sm leading-6 text-[#4d5156]">Un consultant analyse le fonctionnement de l’entreprise, clarifie les priorités et construit avec les équipes des solutions adaptées à leur réalité.</p>
              </details>
            ))}
          </section>

          <LocalPack />
          <HorizonConseilResult />
          {bottomResults.map((result) => <OrganicResult key={result.name} result={result} />)}

          <section className="mt-10 max-w-[652px]" aria-labelledby="related-title">
            <h2 id="related-title" className="text-[22px]">Recherches associées</h2>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {["cabinet conseil management pme", "consultant organisation entreprise", "conseil pilotage entreprise", "consultant management indépendant"].map((query) => (
                <a key={query} href="#" className="flex min-h-12 items-center gap-3 rounded-full bg-[#f1f3f4] px-5 text-sm font-medium hover:bg-[#e8eaed]"><SearchIcon className="h-4 w-4" /> {query}</a>
              ))}
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-[#f2f2f2] text-sm text-[#70757a] sm:pl-[160px]">
        <div className="border-b border-[#dadce0] px-5 py-3"><span className="pr-4">France</span><strong className="border-l border-[#dadce0] pl-4 font-medium text-[#3c4043]">Paris</strong> — D’après votre recherche</div>
        <div className="flex flex-wrap gap-x-7 gap-y-2 px-5 py-4"><a href="#">Aide</a><a href="#">Envoyer des commentaires</a><a href="#">Confidentialité</a><a href="#">Conditions</a><span className="ml-auto pr-5 text-xs">Page de démonstration · Données fictives</span></div>
      </footer>
    </div>
  );
}

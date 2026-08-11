
import { quickLinks } from "@/app/demo/atelier-moka/carte/carte-data";

export default function CategoryLinks() {
    return (
        <nav aria-label="Accès rapide à la carte" className="sticky top-20 z-40 border-y border-[#2b211d]/10 bg-[#f6f0e6]/95 backdrop-blur-xl">
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
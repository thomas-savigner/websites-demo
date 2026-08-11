"use client";

import { useEffect, useState } from "react";

const navItems = [
  ["La carte", "/demo/atelier-moka/carte"],
  ["Le lieu", "#lieu"],
  ["Notre cuisine", "#cuisine"],
  ["Avis", "#avis"],
  ["Contact", "#contact"]
];

export default function Header() {
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
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function DemoNavbar({ brand = "Atelier Démo", backHref, className = "" }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled ? "border-black/10 bg-[#f5f3ee]/90 py-3 shadow-sm backdrop-blur-xl" : "border-transparent bg-transparent py-5"
      } ${className}`}
    >
      <nav aria-label="Navigation principale" className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/demo" className="text-base font-bold tracking-[-0.03em]">
          {brand}
        </Link>
        {backHref ? (
          <Link href={backHref} className="text-sm font-medium text-[#5f6963] transition-colors hover:text-[#18221d]">
            ← Retour aux concepts
          </Link>
        ) : (
          <a href="#concepts" className="text-sm font-medium text-[#5f6963] transition-colors hover:text-[#18221d]">
            Voir les concepts
          </a>
        )}
      </nav>
    </header>
  );
}

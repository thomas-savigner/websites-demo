"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Reveal({
  children,
  className = "",
  stagger = 0,
  selector = "[data-reveal-item]",
  y = 24,
}) {
  const container = useRef(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const targets = stagger ? container.current.querySelectorAll(selector) : container.current;

      gsap.fromTo(
        targets,
        { autoAlpha: 0, y },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.75,
          ease: "power2.out",
          stagger,
          scrollTrigger: {
            trigger: container.current,
            start: "top 88%",
            once: true,
          },
        },
      );
    },
    { scope: container, dependencies: [stagger, selector, y] },
  );

  return (
    <div ref={container} className={className}>
      {children}
    </div>
  );
}

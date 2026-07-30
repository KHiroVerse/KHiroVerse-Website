import { useEffect } from "react";

/**
 * Adds `.is-visible` class to all `.reveal` elements once they enter the viewport.
 * Returns a reset function useful when content changes.
 */
export function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.delay ? Number(el.dataset.delay) : 0;
            setTimeout(() => el.classList.add("is-visible"), delay);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );

    elements.forEach((el, i) => {
      if (!el.dataset.delay && el.parentElement?.matches(".reveal-group")) {
        el.dataset.delay = String(i * 70);
      }
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}

import { useEffect, useRef } from "react";
import styles from "./mellemrum-project-page.module.css";

export function AnimatedValue({ children, numeric = false, delay = 0 }) {
  const text = String(children);
  return <span className={styles.animationSlot}>
    <span className={styles.animationReserve} aria-hidden="true">{text}</span>
    <span className={styles.animationLayer} aria-hidden="true" data-performance-kind={numeric ? "number" : "text"} data-performance-value={text} data-performance-delay={delay}>{text}</span>
    <span className={styles.screenReaderText}>{text}</span>
  </span>;
}

export function usePerformanceAnimation() {
  const ref = useRef(null);
  useEffect(() => {
    const section = ref.current;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!section || preference.matches || !("IntersectionObserver" in window)) return undefined;
    let frame;
    let started = false;
    const values = [...section.querySelectorAll("[data-performance-kind]")];
    const modules = section.querySelectorAll(`.${styles.heading}, .${styles.metrics}, p`);
    const restore = () => values.forEach((value) => { value.textContent = value.dataset.performanceValue; });
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_/#";
    const observer = new IntersectionObserver((entries) => {
      if (started || !entries.some((entry) => entry.isIntersecting)) return;
      started = true;
      observer.disconnect();
      modules.forEach((module) => module.classList.add(styles.visible));
      const start = performance.now();
      const tick = (now) => {
        const elapsed = now - start;
        values.forEach((element) => {
          const original = element.dataset.performanceValue;
          const numeric = element.dataset.performanceKind === "number";
          const delay = 350 + Number(element.dataset.performanceDelay) * 1.6;
          const progress = Math.max(0, Math.min((elapsed - delay) / (numeric ? 1300 : 700), 1));
          if (elapsed < delay || progress === 1) { element.textContent = original; return; }
          if (numeric) {
            element.textContent = original.replace(/\d+(?:,\d+)?/g, (number) => {
              const decimals = number.includes(",") ? number.split(",")[1].length : 0;
              const result = (Number(number.replace(",", ".")) * progress).toFixed(decimals).replace(".", ",");
              return decimals ? result : result.padStart(number.length, "0");
            });
          } else {
            const locked = Math.floor(original.length * progress);
            element.textContent = [...original].map((char, index) => index < locked || !/[A-Za-zÆØÅæøå0-9]/.test(char) ? char : characters[Math.floor(Math.random() * characters.length)]).join("");
          }
        });
        if (elapsed < 3300) frame = requestAnimationFrame(tick);
        else restore();
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: .08 });
    modules.forEach((module) => module.classList.add(styles.module));
    observer.observe(section);
    const reduce = () => {
      if (!preference.matches) return;
      observer.disconnect();
      cancelAnimationFrame(frame);
      restore();
      modules.forEach((module) => module.classList.add(styles.visible));
    };
    preference.addEventListener("change", reduce);
    return () => {
      observer.disconnect(); cancelAnimationFrame(frame); restore();
      preference.removeEventListener("change", reduce);
      modules.forEach((module) => module.classList.remove(styles.module));
    };
  }, []);
  return ref;
}

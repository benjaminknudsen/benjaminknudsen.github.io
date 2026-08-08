import { useEffect, useRef } from "react";
import socialProof from "../assets/images/socialproof.svg";
import lumina2 from "../assets/images/lumina2.svg";
import lumina3 from "../assets/images/lumina3.svg";
import lumina4 from "../assets/images/lumina4.svg";
import lumina5 from "../assets/images/lumina5.svg";
import lumina6 from "../assets/images/lumina6.svg";
import lumina8 from "../assets/images/lumina8.svg";
import lumina9 from "../assets/images/lumina9.svg";
import luminaColors from "../assets/images/luminafarver2.svg";
import persona from "../assets/images/persona2.svg";

function LuminaProjectPage() {
  const pageRef = useRef(null);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return undefined;

    const elements = [...page.querySelectorAll(".lumina-layout-reveal")];
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const queuedElements = new Set();
    const revealQueue = [];
    let isRevealing = false;
    let revealTimer;

    const revealNext = () => {
      const element = revealQueue.shift();
      if (!element) {
        isRevealing = false;
        return;
      }

      isRevealing = true;
      element.classList.add("is-visible");
      observer.unobserve(element);
      revealTimer = window.setTimeout(revealNext, 900);
    };

    const observer = new IntersectionObserver((entries) => {
      const visibleElements = new Set(
        entries.filter((entry) => entry.isIntersecting).map((entry) => entry.target),
      );

      elements.forEach((element) => {
        if (!visibleElements.has(element) || queuedElements.has(element)) return;
        queuedElements.add(element);
        revealQueue.push(element);
      });

      if (!isRevealing) revealNext();
    }, { rootMargin: "0px 0px -7%", threshold: 0.1 });

    elements.forEach((element) => observer.observe(element));
    return () => {
      observer.disconnect();
      window.clearTimeout(revealTimer);
    };
  }, []);

  return (
    <article className="lumina-case lumina-layout" ref={pageRef}>
      <div className="lumina-layout-shell">
        <section className="lumina-layout-opening">
          <div className="lumina-opening-left">
            <figure className="lumina-logo-card lumina-layout-reveal" style={{ "--lumina-delay": "0ms" }}>
              <img src={lumina6} alt="Lumina logo" />
            </figure>
            <p className="lumina-project-intro lumina-layout-reveal" style={{ "--lumina-delay": "180ms" }}>
              Lumina er et fiktivt højttalerbrand udviklet med fokus på stilrent design, enkel brugeroplevelse og høj æstetik. I dette projekt videreudviklede jeg brandets landingpage med fokus på UX/UI-forbedringer, visuelt hierarki og et mere enkelt og sammenhængende design.
            </p>
          </div>
          <figure className="lumina-layout-hero lumina-captioned lumina-layout-reveal" style={{ "--lumina-delay": "130ms" }}>
            <figcaption className="lumina-image-title lumina-text-reveal"><span>Kampagne</span></figcaption>
            <img src={lumina2} alt="Lumina hero" />
          </figure>
        </section>

        <section className="lumina-layout-middle">
          <div className="lumina-moodboard-card lumina-layout-reveal" style={{ "--lumina-delay": "0ms" }}>
            <p className="lumina-image-title lumina-text-reveal"><span>Brandidentitet</span></p>
            <img className="lumina-moodboard-image" src={lumina9} alt="Lumina moodboard" />
            <img className="lumina-moodboard-colors" src={luminaColors} alt="Lumina farvepalette" />
          </div>
          <figure className="lumina-testimonials lumina-captioned lumina-layout-reveal" style={{ "--lumina-delay": "0ms" }}>
            <figcaption className="lumina-image-title lumina-text-reveal"><span>Landingpage</span></figcaption>
            <img src={lumina5} alt="Lumina kundecases og testimonials" />
          </figure>
        </section>

        <section className="lumina-layout-bottom">
          <figure className="lumina-landingpage lumina-captioned lumina-layout-reveal" style={{ "--lumina-delay": "0ms" }}>
            <figcaption className="lumina-image-title lumina-text-reveal"><span>Social proof</span></figcaption>
            <img src={socialProof} alt="Social proof for Lumina" />
          </figure>
          <figure className="lumina-product-gallery lumina-captioned lumina-layout-reveal" style={{ "--lumina-delay": "180ms" }}>
            <figcaption className="lumina-image-title lumina-text-reveal"><span>Produktunivers</span></figcaption>
            <img src={lumina8} alt="Lumina produktgalleri" />
          </figure>
        </section>

        <figure className="lumina-persona lumina-captioned lumina-layout-reveal" style={{ "--lumina-delay": "120ms" }}>
          <figcaption className="lumina-image-title lumina-text-reveal"><span>Persona</span></figcaption>
          <img src={persona} alt="Persona for Lumina-projektet" />
        </figure>

        <section className="lumina-banner-stack lumina-bottom-banners">
          <figure className="lumina-captioned lumina-layout-reveal" style={{ "--lumina-delay": "260ms" }}>
            <figcaption className="lumina-image-title lumina-text-reveal"><span>Reklamekampagne — Slim</span></figcaption>
            <img src={lumina3} alt="Lumina Slim produktbanner" />
          </figure>
          <figure className="lumina-captioned lumina-layout-reveal" style={{ "--lumina-delay": "520ms" }}>
            <figcaption className="lumina-image-title lumina-text-reveal"><span>Reklamekampagne — Ultra</span></figcaption>
            <img src={lumina4} alt="Lumina Ultra produktbanner" />
          </figure>
        </section>
      </div>
    </article>
  );
}

export default LuminaProjectPage;

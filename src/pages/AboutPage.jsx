import { useEffect, useRef } from "react";
import aiPortrait from "../assets/images/aiai.svg";
import leisurePortrait from "../assets/images/bkbk.svg";
import portraitTwo from "../assets/images/portfolio-billede2.jpeg";

function AboutPage() {
  const pageRef = useRef(null);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return undefined;

    const elements = page.querySelectorAll(".about-reveal");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.16 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-editorial" ref={pageRef}>
      <header className="about-hero about-shell about-reveal">
        <h1>Benjamin Knudsen</h1>
        <p>
          Jeg er multimediedesigner med interesse for visuelle identiteter,
          digitale oplevelser og løsninger, der føles enkle at bruge.
        </p>
      </header>

      <section className="about-story about-shell" aria-labelledby="about-work-title">
        <figure className="about-visual about-reveal">
          <img src={portraitTwo} alt="Portræt af Benjamin" />
        </figure>
        <div className="about-copy about-reveal">
          <p className="about-kicker">Design og samarbejde</p>
          <h2 id="about-work-title">Fra idé til noget, der virker.</h2>
          <p>
            Jeg arbejder i krydsfeltet mellem UX/UI, grafisk design og frontend.
            For mig begynder et godt resultat med nysgerrighed: at forstå behovet,
            stille de rigtige spørgsmål og omsætte indsigter til et tydeligt visuelt koncept.
          </p>
          <p>
            I samarbejder bidrager jeg med struktur, åben sparring og lysten til at afprøve idéer.
            Mine projekter spænder fra digitale produkter og webshops til branding og visuelle identiteter.
          </p>
        </div>
      </section>

      <section className="about-story about-story-reverse about-shell" aria-labelledby="about-ai-title">
        <div className="about-copy about-reveal">
          <p className="about-kicker">Mine kompetencer med AI</p>
          <h2 id="about-ai-title">Et værktøj til at tænke bredere.</h2>
          <p>
            Jeg bruger AI som en kreativ og teknisk sparringspartner gennem designprocessen.
            Det kan være til research, idéudvikling, struktur, tekst, prototyper og som støtte,
            når et design skal omsættes til kode.
          </p>
          <p>
            Værktøjet erstatter ikke mine valg. Jeg vurderer, tilpasser og samler outputtet,
            så løsningen stadig har en tydelig retning og passer til brugeren og brandet.
          </p>
          <ul className="about-skills" aria-label="AI-kompetencer">
            <li>Idé og research</li>
            <li>Visuel udforskning</li>
            <li>Prototyping</li>
            <li>Kode og iteration</li>
          </ul>
        </div>
        <figure className="about-visual about-visual-coral about-reveal">
          <img src={aiPortrait} alt="Benjamin arbejder med AI" />
        </figure>
      </section>

      <section className="about-story about-shell" aria-labelledby="about-spare-time-title">
        <figure className="about-visual about-visual-contain about-reveal">
          <img src={leisurePortrait} alt="Benjamin i sin fritid" />
        </figure>
        <div className="about-copy about-reveal">
          <p className="about-kicker">Når jeg ikke går i skole</p>
          <h2 id="about-spare-time-title">Fodbold, mennesker og nye indtryk.</h2>
          <p>
            I min fritid fylder fodbold meget. Interessen for sporten er også blevet til
            kreative projekter, blandt andet mit redesign af Fortuna Hjørrings visuelle identitet.
          </p>
          <p>
            Jeg finder energi i at være sammen med andre og inspiration i de visuelle detaljer,
            jeg møder i hverdagen – fra mode og musik til digitale produkter og branding.
          </p>
        </div>
      </section>

      <section className="about-cv about-shell about-reveal" aria-labelledby="about-cv-title">
        <div>
          <p className="about-kicker">Erfaring og uddannelse</p>
          <h2 id="about-cv-title">Grafisk CV</h2>
        </div>
        <div className="about-cv-placeholder" role="img" aria-label="Plads til grafisk CV">
          <span>Grafisk CV indsættes her</span>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;

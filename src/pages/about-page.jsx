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
          <h2 id="about-work-title">Sådan arbejder jeg</h2>
          <p>
            Jeg interesserer mig for at skabe løsninger, der både fungerer visuelt og giver mening
            for brugeren. Et godt projekt starter for mig med at forstå behovet og omsætte det til
            et tydeligt visuelt koncept.
          </p>
          <p>
            Jeg trives i samarbejde, hvor idéer udvikles gennem sparring og feedback, men jeg sætter
            også pris på at arbejde selvstændigt og tage ansvar for at føre en idé hele vejen fra
            koncept til færdig løsning.
          </p>
        </div>
      </section>

      <section className="about-story about-story-reverse about-shell" aria-labelledby="about-ai-title">
        <div className="about-copy about-reveal">
          <p className="about-kicker">Mine kompetencer med AI</p>
          <h2 id="about-ai-title">Et værktøj til at tænke bredere.</h2>
          <p>
            AI er en naturlig del af min designproces og fungerer som en sparringspartner gennem hele
            projektet. Jeg bruger det til at udforske idéer, udvikle brandkoncepter, udfordre designvalg
            og finde nye perspektiver tidligt i processen. Derudover er det en kompetence for mig at
            skrive målrettede prompts, så AI leverer brugbare og relevante resultater, som understøtter
            projektets retning.
          </p>
          <p>
            AI hjælper mig også med at effektivisere mine arbejdsprocesser – fra research og idéudvikling
            til struktur, kodning og dokumentation – så jeg kan bruge mere tid på de kreative og strategiske
            beslutninger.
          </p>
          <p>
            Værktøjet erstatter ikke mine valg. Jeg vurderer, tilpasser og samler outputtet, så løsningen
            stadig har en tydelig retning og passer til brugeren og brandet.
          </p>
          <ul className="about-skills" aria-label="AI-kompetencer">
            <li>Idé og research</li>
            <li>Visuel udforskning</li>
            <li>Konceptudvikling</li>
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
            Fodbold fylder en stor del af min fritid, og jeg bruger også gerne tid på løb, padel og
            anden sport. Jeg kan godt lide at være aktiv og sætter stor pris på det sociale omkring
            sporten. Uden for banen nyder jeg at være sammen med venner, tage en tur i byen og opdage
            ny musik.
          </p>
          <p>
            Samtidig værdsætter jeg også alenetid, hvor jeg kan koble af og lade op. Den balance mellem
            et aktivt socialt liv og tid til mig selv betyder meget for mig og giver mig energi i hverdagen.
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

import bluntImage from "../assets/images/blunt.svg";
import luminaImage from "../assets/images/lumina2.svg";
import lynkImage from "../assets/images/lynk.svg";

import vuuhImage from "../assets/images/vuuh.logo.svg";

const projects = [
  {
    slug: "lynk",
    title: "Lynk",
    year: "2026",
    category: "Web app",
    accent: "#ff725e",
    categoryColor: "#315a45",
    summary:
      "En social platform, der gør det nemt at finde og deltage i lokale sportsaktiviteter.",
    description:
      "Lynk er et digitalt koncept med fokus på en enkel brugeroplevelse, et klart visuelt udtryk og gode forbindelser mellem mennesker.",
    tags: ["UI/UX", "Frontend", "Koncept"],
    image: lynkImage,
    links: [],
  },
  {
    slug: "blunt",
    title: "Blunt",
    year: "2026",
    category: "Customer experience",
    accent: "#b8d96b",
    summary:
      "En moderne webshop med fokus på streetwear, branding og en stærk digital oplevelse.",
    description:
      "Blunt samler visuel identitet og digitalt design i et konsekvent univers med personlighed og kant.",
    tags: ["Branding", "Grafisk design", "UI"],
    image: bluntImage,
    links: [],
  },
  {
    slug: "lumina",
    title: "Lumina",
    year: "2026",
    category: "Landingpage",
    accent: "#72b9f4",
    categoryColor: "#8d6a52",
    coverBackground: "#ffffff",
    summary:
      "En stilren landingpage med fokus på produktpræsentation, æstetik og brugeroplevelse.",
    description:
      "Lumina undersøger, hvordan stemning og funktion kan spille sammen i en overskuelig og indbydende weboplevelse.",
    tags: ["Webdesign", "Prototyping", "Frontend"],
    image: luminaImage,
    links: [],
  },
  {
    slug: "vuuh",
    title: "Vuuh",
    year: "2026",
    category: "UX/UI Design",
    accent: "#703BF1",
    categoryColor: "#703BF1",
    coverBackground: "#703BF1",
    summary: "Et redesign af onboarding med fokus på progression, kontekstbaseret hjælp og tydelig feedback.",
    description: "Vuuh – Design Better Onboarding. UX/UI Design · Product Optimization · 3. semester.",
    tags: ["UX-audit", "UI/UX", "Figma", "Prototyping"],
    image: vuuhImage,
    links: [],
  },
];

export default projects;

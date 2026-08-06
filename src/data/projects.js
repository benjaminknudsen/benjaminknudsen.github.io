import bluntImage from "../assets/images/blunt.svg";
import fortunaImage from "../assets/images/forsidekreativ.svg";
import landingConceptVideo from "../assets/images/hjemmehygge.mov";
import luminaImage from "../assets/images/lumina2.svg";
import lynkImage from "../assets/images/lynk.svg";

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
    slug: "sideprojekter",
    title: "Fortuna Hjørring",
    year: "2026",
    category: "Logo redesign",
    accent: "#2a8638",
    categoryColor: "#315a45",
    coverBackground: "transparent",
    summary:
      "Et redesign af Fortuna Hjørrings visuelle identitet med fokus på et moderne, enkelt og tidløst udtryk.",
    description:
      "Et editorial case study af et nyt og mere tidssvarende logo til Fortuna Hjørring.",
    tags: ["Branding", "Logo", "Visuel identitet"],
    image: fortunaImage,
    links: [],
  },
  {
    slug: "landingpage-koncept",
    title: "Landingpage",
    year: "2026",
    category: "Koncept",
    accent: "#5a466c",
    categoryColor: "#111111",
    coverBackground: "#f8f6f2",
    summary:
      "En landingpage udviklet som et kreativt fritidsprojekt med fokus på æstetik, animationer og moderne webdesign.",
    description:
      "En landingpage udviklet som et kreativt fritidsprojekt med fokus på æstetik, animationer og moderne webdesign.",
    tags: ["Figma", "UI", "Koncept"],
    image: fortunaImage,
    previewVideo: landingConceptVideo,
    links: [],
  },
];

export default projects;

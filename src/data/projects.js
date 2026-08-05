import bluntImage from "../assets/images/blunt.svg";
import fortunaImage from "../assets/images/fortuna3.svg";
import luminaImage from "../assets/images/lumina2.svg";
import lynkImage from "../assets/images/lynk.svg";

const projects = [
  {
    slug: "lynk",
    title: "Lynk",
    year: "2026",
    category: "Web app",
    accent: "#ff725e",
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
    title: "Kreative projekter",
    year: "2026",
    category: "EKSPERIMENTER",
    accent: "#bda0e8",
    coverBackground: "#f5f5f5",
    summary:
      "Personlige projekter, hvor jeg udforsker nye idéer, visuelle identiteter og digitale koncepter.",
    description:
      "En samling af mindre projekter og eksperimenter, hvor nye værktøjer, teknikker og visuelle idéer bliver afprøvet.",
    tags: ["Kreativ kodning", "Design", "Eksperimenter"],
    image: fortunaImage,
    links: [],
  },
];

export default projects;

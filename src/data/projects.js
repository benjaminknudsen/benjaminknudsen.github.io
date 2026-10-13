import bluntImage from "../assets/images/blunt.svg";
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
];

export default projects;

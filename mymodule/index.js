
// Defensive, CommonJS module with shared data for the views.
const site = {
  title: "My Portfolio",
  footer: "© 2025 My Portfolio. All rights reserved.",
  hero: {
    title: ["Discover my","Amazing","Work Space!"],
    crawl: [
      "Welcome — I'm Hans Lagmay, a 3rd year BS IT student who enjoys turning small ideas into useful, working software.",
      "I focus on web development and UI/UX: building clean, useful, and fast things."
    ]
  }
};

const nav = [
  { text: "Home", href: "/" },
  { text: "About", href: "/about" },
  { text: "Projects", href: "/projects" },
  { text: "Contact", href: "/contact" },
];

const projects = [
  {
    slug: "final-website",
    title: "Website for Final Project",
    year: 2019,
    icon: "computer",
    cta: { text: "View Project", href: "#" }
  },
  {
    slug: "itc-final",
    title: "Final Project for ITC",
    year: 2023,
    icon: "github",
    cta: { text: "View Project", href: "#" }
  },
  {
    slug: "dsa-final",
    title: "Final Project for DSA",
    year: 2024,
    icon: "doc",
    cta: { text: "Open", href: "#" }
  },
  { slug: "soon-1", title: "Coming Soon", year: "", icon: "plus", cta: { text: "Coming Soon", href: "#" }, soon: true },
  { slug: "soon-2", title: "Coming Soon", year: "", icon: "plus", cta: { text: "Coming Soon", href: "#" }, soon: true }
];

module.exports = { site, nav, projects };

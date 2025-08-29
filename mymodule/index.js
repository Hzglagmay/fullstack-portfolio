
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
    slug: "portfolio-website",
    title: "Portfolio Website",
    year: 2024,
    icon: "computer",
    cta: { text: "View Live", href: "https://hzglagmay.github.io/fullstack-portfolio" }
  },
  {
    slug: "itc-final",
    title: "ITC Final Project",
    year: 2023,
    icon: "github",
    cta: { text: "View Live", href: "https://hanslagmay.github.io/hzglagmay/" }
  },
  {
    slug: "dsa-final",
    title: "Data Structures Final",
    year: 2024,
    icon: "doc",
    cta: { text: "View Project", href: "#" }
  },
  { slug: "soon-1", title: "E-Commerce App", year: "", icon: "plus", cta: { text: "Coming Soon", href: "#" }, soon: true },
  { slug: "soon-2", title: "Mobile Game", year: "", icon: "plus", cta: { text: "Coming Soon", href: "#" }, soon: true },
  { slug: "soon-3", title: "AI Chat Bot", year: "", icon: "plus", cta: { text: "Coming Soon", href: "#" }, soon: true },
  { slug: "soon-4", title: "Machine Learning App", year: "", icon: "plus", cta: { text: "Coming Soon", href: "#" }, soon: true },
  { slug: "soon-5", title: "React Native App", year: "", icon: "plus", cta: { text: "Coming Soon", href: "#" }, soon: true },
  { slug: "soon-6", title: "Desktop Application", year: "", icon: "plus", cta: { text: "Coming Soon", href: "#" }, soon: true }
];

module.exports = { site, nav, projects };

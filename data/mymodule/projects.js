const projects = [
  {
    slug: 'final-website',
    title: 'Website for Final Project',
    year: '2019',
    badge: 'computer',
    cta: { text: 'View Project', href: 'https://example.com/final-website' }
  },
  {
    slug: 'itc',
    title: 'Final Project for ITC',
    year: '2023',
    badge: 'github',
    cta: { text: 'View Project', href: 'https://github.com/your-user/your-repo' }
  },
  {
    slug: 'dsa',
    title: 'Final Project for DSA',
    year: '2024',
    badge: null,
    cta: { text: 'Open', href: '/img/dsa.png' },
    isImage: true
  }
];

function getProjects() {
  return projects;
}

module.exports = { getProjects };


const year = new Date().getFullYear();

const site = {
  year,
  nav: [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/about' },
    { text: 'Projects', href: '/projects' },
    { text: 'Contact', href: '/contact' },
  ],
  profile: {
    name: 'Hans Lagmay',
    role: 'Developer',
    langs: ['EN', 'PH'],
    avatar: '/images/1.jpg',
    skills: [
      { label: 'Java', value: 65 },
      { label: 'Python', value: 55 },
    ],
    stats: [
      { value: 3, labelTop: 'Years', labelBottom: 'Experience (and counting)' },
      { value: 269, labelTop: 'ChatGPT', labelBottom: 'Prompts' },
      { value: 128, labelTop: 'trashtalked ai', labelBottom: '' },
      { value: 0, labelTop: 'Honors & Awards', labelBottom: '' },
    ]
  },
  hero: {
    // Welcoming crawl text (simple, non-Star-Wars, looping)
    crawl: [
      `Welcome — I'm Hans Lagmay, a 3rd year BS IT student who enjoys turning ideas into working software.`,
      `I work mostly with Java and Python, and I like building clean UIs and small, useful tools.`,
      `This portfolio is a living space for experiments, projects, and things I'm learning along the way.`,
      `Grab a keyboard and explore — I hope you find something interesting!`
    ]
  },
  about: {
    left: {
      name: 'Hans Lagmay',
      subtitle: '3rd year BS IT Student',
      langs: ['EN', 'PH'],
      skills: ['Time management', 'Creativity', 'Computer literacy', 'Critical thinking', 'Leadership skills'],
      interests: [
        { title: 'Sports', body: 'Hoops & running' },
        { title: 'Guitar', body: 'Acoustic noodling' },
        { title: 'Eat', body: 'Burgers, ramen' },
        { title: 'Sleep', body: '8h (best case)' },
      ]
    },
    right: {
      intro: `Hi, I'm Hans — a 3rd year BS IT Student who loves turning ideas into working software. I build small, useful tools and websites — learning by shipping.`,
      objective: `To leverage my expertise in web development and to create dynamic and user-friendly websites that meet client specifications and industry standards. Striving to enhance my skills in the latest technologies, I aim to contribute to innovative and efficient web solutions while ensuring a seamless user experience.`,
      education: [
        { title: 'College', school: 'Ateneo de Davao University', years: '2023 — Present' },
        { title: 'Senior High School', school: 'Ateneo de Davao University', years: '2021 — 2023' },
        { title: 'Junior High School', school: 'Ateneo de Davao University', years: '2017 — 2021' },
        { title: 'Elementary', school: 'Ateneo de Davao University', years: '2011 — 2017' },
      ]
    }
  },
  projects: {
    blurb: 'A few school builds and experiments. More to come.',
    items: [
      {
        slug: 'final-website',
        title: 'Website for Final Project',
        year: 2019,
        icon: 'computer',
        action: { text: 'View Project', href: 'https://example.com' }
      },
      {
        slug: 'final-itc',
        title: 'Final Project for ITC',
        year: 2023,
        icon: 'github',
        action: { text: 'View Project', href: 'https://github.com' }
      },
      {
        slug: 'final-dsa',
        title: 'Final Project for DSA',
        year: 2024,
        icon: 'image',
        action: { text: 'Open', href: '/images/dsa.png', target: '_blank' }
      },
    ],
    coming: [
      { title: 'Coming Soon', text: 'New build incoming.' },
      { title: 'Coming Soon', text: 'More projects will be added.' },
    ]
  }
};

module.exports = site;

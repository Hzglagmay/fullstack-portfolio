function getNav() {
  return [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/about' },
    { text: 'Projects', href: '/projects' },
    { text: 'Contact', href: '/contact' }
  ];
}

function getStats() {
  return {
    years: 3,
    prompts: 269,
    trashtalked: 128,
    awards: 0
  };
}

function getSite() {
  return {
    owner: 'Hans Lagmay',
    title: 'My Portfolio',
    profileImg: '/img/1.jpg',
    heroIntro: [
      `Hi! I’m Hans Lagmay — a 3rd-year BS IT student at Ateneo de Davao University. 
       I love turning small ideas into useful tools and clean interfaces. 
       I focus on modern web development (HTML/CSS/JS + EJS), sprinkle in UI/UX thinking, 
       and enjoy shipping tiny projects that make life easier. 
       When I’m not designing or coding, I’m probably debugging CSS at 2 a.m., 
       refactoring Java code, or sketching the next automation idea. 
       Welcome to my little corner of the web — explore freely and say hello!`
    ]
  };
}

module.exports = { getNav, getStats, getSite };

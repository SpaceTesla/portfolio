type Project = {
  name: string;
  description: string;
  image: string;
  text: string;
  demo: string;
  code: string;
};

const projects: Project[] = [
  {
    name: 'Mivro',
    description: 'AI-driven ingredient analyzer extension',
    image: '/projects/mivro.png',
    text: 'A Chrome extension that uses AI to analyze ingredients in foods, drinks, cosmetics, medicines, and pet foods, offering insights into nutrients, potential health risks, and suggesting better alternatives.',
    demo: '#',
    code: 'https://github.com/1MindLabs/mivro-extension',
  },
  {
    name: 'Muncheese',
    description: 'Fulfill your cheesey craving in minutes!',
    image: '/projects/muncheese.png',
    text: 'A web application built with Next.js and React for seamless food delivery, featuring real-time inventory management and a responsive UI and uses firebase for data storage.',
    demo: 'https://muncheese.vercel.app/',
    code: 'https://github.com/SpaceTesla/Muncheese',
  },
  {
    name: 'Crypta',
    description: 'An automated (DFIR) system',
    image: '/projects/crypta.png',
    text: 'Integrates AI/ML models to classify system risk levels, types, identify indicators of compromise (IoCs), and generate actionable insights from forensic disk images, memory dumps, and network traffic.',
    demo: 'https://crypta.vercel.app/',
    code: 'https://github.com/1MindLabs/crypta-backend',
  },
];

export default projects;

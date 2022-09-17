import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'sriram_portfolio', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Sriraman',
  subtitle: 'I am a web Developer.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am a fullstack web developer currently working on MERN stack.',
  paragraphTwo: 'In frontend i am familiar in React,express framework and backend i know Nodejs. i am also good at sql and magoDb in database',
  paragraphThree: 'I am self taught web developer .',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Appletv_clone',
    info: 'It is a clone of appletv streaming website.this website has many shows,webseries,sports live streaming.Appletv website is quiet good at UI design . It is built by using simple HTML ,CSS,Js without any framework.',
    info2: '',
    url: '',
    repo: 'hhttps://user-images.githubusercontent.com/101914524/174465411-bffb31e9-32c1-472b-a049-562181b972c3.png', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};

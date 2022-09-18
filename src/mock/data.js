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
  paragraphOne: 'I am a fullstack web developer (MERN stack).Currently pursuing BE(CSE) 3rd year and working in a freelance project',
  paragraphTwo: '	Tech Enthusiast and like to learn about new technologies.	Currently exploring Blockchain Email solution for Enterprise. ',
  paragraphThree: 'I had Done three main Projects, Namely Apple Clone (Frontend), Funtime(Backend), Porfolio (Static React). Checkout some of My works below.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.png',
    title: 'Appletv Clone (Frontend)',
    info: 'Created a apple clone website using HTML,css,javascript.Pretty much matched the latest Apple tv UI.Right Now implementing the backend service for video Streaming of free channels',
    info2: 'Which helped me to gain immense experience in frontend',
    url: 'https://apple-clone-ea340.web.app/',
    repo: 'https://github.com/sriram3720/Appletv_clone', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'Funtime (Backend)',
    info: 'Implemented RESTful API server for movie rental application.Built and deployed overall service infrastructure utilizing RestFul api, Experess by implenting Test Driven Deveopment(TDD) using Unit and Integration testing.Developed an Authentication and Authorisation protocol using Joi, JWT, bcrypt.',
    info2: 'Creted a model Genre, Movies, Users in MongoDb database to store the information.Created a middleware for Authentication, Error Logging, Validating User, and Validating Movies with express.Currently working on the frontend using React',
    url: 'https://github.com/sriram3720/Funtime',
    repo: 'https://github.com/sriram3720/Funtime', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.png',
    title: 'Portfolio (React)',
    info: 'Stack used MERN.Created a Static webpage using React, HTML and CSS.	Created a Component About, Contact us, Header, Footer, Portfolio, Resume and Testimonial using React to link.Implemneted the hyperLink at Header to link subsection',
    info2: 'Created ResumeData.js to input the data in json format.Implemented integration testing to prevent crashing.Implemneted ServiceWorker to load faster on subsequent visits.Built and deployed Static webite on firebase hoisting platform using firebase CLI and implemented the integeration testing in firebase cloud fuction',
    url: 'https://github.com/sriram3720/Sriram-Portfolio',
    repo: 'https://github.com/sriram3720/Sriram-Portfolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'sriram3720@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/Sriraman_offl',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/sriraman-shanmugam-139779250',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/sriram3720',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};

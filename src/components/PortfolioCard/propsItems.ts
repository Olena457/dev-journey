import { PetProgectsData } from '../../types/types';

export const PORTFOLIO_PROJECTS: PetProgectsData[] = [
 
  {
    id: 2,
    title: 'Events Board',
    skills: 'HTML, CSS, JavaScript, React-router, Redux, Firebase, Monorepo',
    role: 'Frontend Developer & UI/UX Design',
    imageProgect: '/img/projects/event-board.jpg',
    description:
      'Developing a monorepo website with routing. Creating own design and data structure. This application was built using HTML, CSS, JavaScript, React-router, Redux, and Firebase. It is a web application for organizers and participants to create and register for events.',
    liveHref: 'https://your-live-demo-eventboard.com/',
    repoHref: 'https://github.com/your-repo-link/event-board',
  },
  {
    id: 3,
    title: 'LearnLingo',
    skills:
      'HTML, CSS, JavaScript, React, Redux, React-router, React-modal, Firebase',
    role: 'Frontend Developer',
    imageProgect: '/img/projects/learnlingo.jpg',
    description:
      'Developing a monorepo website with routing, responsive design, and data filtering. This application was built using HTML, CSS, JavaScript, React, Redux, React-router, React-modal, and Firebase. This application is designed to help users find a teacher. It utilizes sorting and filtering features for efficient search.',
    liveHref: 'https://your-live-demo-learnlingo.com/',
    repoHref: 'https://github.com/your-repo-link/learnlingo',
  },
];

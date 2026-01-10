import { PetProgectsData } from '../../types/types';

export const PORTFOLIO_PROJECTS: PetProgectsData[] = [
  {
    id: 1,
    title: 'Weather Forecast',
    skills: 'Next.js 16, TypeScript, Jotai, React Query, Tailwind,Geolocation',
    role: 'Frontend Developer & UI/UX Design',
    imageProgect: '/img/weather.jpg',
    description:
      'An application designed for easy checking of the weather forecast. It provides a detailed forecast for the current day and an approximate forecast for the next 7 days. Key features include flexible location search, real-time updates, Geolocation Support, and friendly error handling. Built with Next.js 16 and TypeScript using Jotai and React Query for state management and Axios for data fetching. Fully optimized for mobile, tablet, and desktop screens.',
    liveHref: 'https://next-weather-amber.vercel.app/',
    repoHref: 'https://github.com/Olena457/next-weather.git',
  },

  {
    id: 2,
    title: 'AI Smart Chat',
    skills:
      'React, TypeScript, Mistral-tiny, Material UI, GSAP, Netlify Functions',
    role: 'Frontend Developer & UI/UX Design',
    imageProgect: '/img/smart.jpg',
    description:
      'A fully responsive web application for delivering a seamless and engaging chat experience. It integrates a lightweight AI search model, Mistral-tiny, and features thoughtful UI/UX elements, including an animated greeting using GSAP. The application is built with React + TypeScript for scalability, uses Material UI for styling (with Light and Dark theme support), and leverages Netlify Functions for lightweight serverless operations (proxy requests).',
    liveHref: 'https://ai-smart-chat.netlify.app/',
    repoHref: 'https://github.com/Olena457/smart-chat.git',
  },

  {
    id: 3,
    title: 'AI Photo Interpreter',
    skills:
      'React, Material UI, TensorFlow.js, Text-to-Speech API, AI integration,',
    role: 'Frontend Developer & UI/UX Design',
    imageProgect: '/img/reader.jpg',
    description:
      'A React-based application that analyzes images using a pre-trained AI model (@tensorflow-models/mobilenet). It generates a textual description, which is then converted to speech using the Text-to-Speech API. The app provides fast response time, a simple UI styled with Material UI, and supports interface language switching (Ukrainian and English). It is fully responsive and optimized for all devices.',
    liveHref: 'https://ai-clasification.netlify.app/',
    repoHref: 'https://github.com/Olena457/image-reader.git',
  },

  {
    id: 4,
    title: 'Wacanda Flow',
    skills:
      'React, GSAP, ScrollTrigger, HTML, CSS/Tailwind, JavaScript, Animations',
    role: 'Frontend Developer & UI/UX Design',
    imageProgect: '/img/wacanda.jpg',
    description:
      'A web application that immerses users in a dynamic, animated atmosphere where every scroll becomes part of the story. The app uses the GSAP animation library and its ScrollTrigger plugin to synchronize scroll behavior with smooth, high-performance animations, including distortion and deformation effects. It features a fully responsive, immersive design where the video container dynamically scales up or down.',
    liveHref: 'https://gsap-scroll-wacanda.netlify.app/',
    repoHref: 'https://github.com/Olena457/wacanda-flow.git',
  },

  {
    id: 5,
    title: 'IT Traveler',
    skills: 'Vuejs 3, Tailwind CSS, Mapbox, JavaScript, HTML, CSS, Routing',
    role: 'Frontend Developer',
    imageProgect: '/img/travel.jpg',
    description:
      'A personal travel companion web app designed to capture memories and favorite places. The app uses Mapbox integration to allow users to place custom markers on an interactive map and visualize their personal locations. Features include full registration/login, routing (public, private, protected routes), and forms to add, edit, or delete favorite spots and upload photos. The application is built with Vuejs 3 and Tailwind CSS.',
    liveHref: 'https://my-it-travel.netlify.app/',
    repoHref: 'https://github.com/Olena457/vue-project.git',
  },

  {
    id: 6,
    title: 'Food & Drinks - Cookbook',
    skills:
      'React, Redux, TypeScript, Tailwind, Axios, React Router, LocalStorage',
    role: 'Frontend Developer & UI/UX Design',
    imageProgect: '/img/food.jpg',
    description:
      'A stylish and intuitive web app for discovering recipes for meals and drinks. Users can search recipes, explore detailed nutrient content for each dish, and save favorite recipes directly in the browser using LocalStorage. It is built using TypeScript with Redux Toolkit for state management and Axios for API integration, ensuring fast navigation and responsive design.',
    liveHref: 'https://yumbook-typescript.netlify.app/',
    repoHref: 'https://github.com/Olena457/tastyfood-typescript.git',
  },

  {
    id: 7,
    title: 'AIDE - Landing Page',
    skills:
      'Redux Toolkit, Material UI, Framer Motion, React Slick, TypeScript, 3D Animation',
    role: 'Frontend Developer & UI/UX Design',
    imageProgect: '/img/aide.jpg',
    description:
      'A modern React-based landing page built to inspire developers and showcase modern UI/UX techniques. Key features include a 3D animated hero section, interactive animated cards, a dynamic form component, and a responsive slider (React Slick). The application uses Redux Toolkit for state management and Framer Motion for animations. It also features a section with curated links to official documentation and useful AI tools.',
    liveHref: 'https://slider-swiper.netlify.app/',
    repoHref: 'https://github.com/Olena457/slider-test.git',
  },
  {
    id: 8,
    title: 'Interspace - Landing Page',
    skills: 'React, TypeScript, SCSS, AOS, HTML, JavaScript, Responsive Design',
    role: 'Frontend Developer & UI/UX Design',
    imageProgect: '/img/inter.jpg',
    description:
      'A modern and responsive landing page template for creative design agencies. It features a clean, minimalistic UI with smooth scroll animations powered by AOS. The structure includes Header (with active navigation), Main (covering features, team, awards), and Footer. Built using a modern frontend stack with TypeScript for type-safe code and SASS for modular styles.',
    liveHref: 'https://inter-sp-agency.netlify.app/',
    repoHref: 'https://github.com/Olena457/ts-react-lending.git',
  },
  {
    id: 9,
    title: 'Quizlet Game',
    skills:
      'React, Redux, Firebase, JavaScript, API Integration, Responsive Design',
    role: 'Full-Stack Developer & UI/UX Design',
    imageProgect: '/img/quizlet.jpg',
    description:
      'An interactive and educational game where users can participate in quizzes and create their own quiz questions. Core features include: full user authentication via Firebase, state management with Redux, category selection, result tracking, and API integration for random bonus facts. The application is fully responsive and covers main pages, game flow pages, and user profile management.',
    liveHref: 'https://quizlt-app.vercel.app/',
    repoHref: 'https://github.com/Olena457/quizlt-app.git',
  },

  {
    id: 10,
    title: 'PetLove',
    skills: 'redux, axios, react-router, redux-persist, React, JavaScript',
    role: 'Frontend Developer',
    imageProgect: '/img/pet.jpg',
    description:
      'A convenient service called PetFinder for all animal lovers. Key features include: finding lost pets, posting missing notices, listing animals for sale, adopting pets, and accessing news about shelters. The application has 11 pages, uses responsive design, and is built for data fetching via HTTP requests to the backend.',
    liveHref: 'https://love-pets-life.netlify.app/',
    repoHref: 'https://github.com/Olena457/love-pets.git',
  },
  {
    id: 11,
    title: 'Events Board',
    skills: 'HTML, CSS, JavaScript, React-router, Redux, Firebase',
    role: 'Full-Stack Developer & UI/UX Design',
    imageProgect: '/img/event.jpg',
    description:
      'Developing a website with routing. Creating own design and data structure. This application was built using HTML, CSS, JavaScript, React-router, Redux, and Firebase. It is a web application for organizers and participants to create own and register for events.',
    liveHref: 'https://events-registration-ten.vercel.app/',
    repoHref: 'https://github.com/Olena457/events-registration.git',
  },
  {
    id: 12,
    title: 'Learn-easy',
    skills: 'JavaScript, React, Redux, React-router, React-modal, Firebase',
    role: 'Frontend Developer',
    imageProgect: '/img/learn.jpg',
    description:
      'Developing a monorepo website with routing, responsive design, and data filtering. This application was built using HTML, CSS, JavaScript, React, Redux, React-router, React-modal, and Firebase. This application is designed to help users find a teacher. It utilizes sorting and filtering features for efficient search.',
    liveHref: 'https://learn-easy-tau.vercel.app/',
    repoHref: 'https://github.com/Olena457/learn-easy.git',
  },
];

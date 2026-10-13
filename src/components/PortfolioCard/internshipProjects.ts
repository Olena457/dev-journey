import { PetProgectsData } from '../../types/types';

export const INTERNSHIP_PROJECTS: PetProgectsData[] = [
  {
    id: 17,
    title: 'Logistics AI CRM Platform.',
    skills:
      'LangGraph, LangChain, LangSmith, Socket.io, AWS, Storybook, NextJS, TypeScript, Zustand, NestJS, Prisma, PostgreSQL, Swagger, Material UI,',
    role: '[ElifTech] Full-Stack Developer',
    imageProject: '/img/crm-ai.jpg',
    isMaintenance: true,
    description:
      'An enterprise-grade CRM platform designed to streamline logistics and shipment operations through AI-powered email data parsing and automated invoice generation. The system integrates advanced data grids, scheduled cron operations, and structured workflows to simplify overall platform administration.',
    liveHref:
      'https://gamma.app/docs/Copy-of-GrowBox-data-management-system-hh2xc9a83l2sve5',
    repoHref: 'https://github.com/eliftech-school-2026-1/logistics-ai-crm',
  },
  {
    id: 14,
    title: 'GrowBox-smart box.',
    skills:
      'Next.js 16, TypeScript, Radix-ui, Recharts, Context API, Firebase, FireStore',
    role: '[TetaLab] Full-Stack Developer',
    imageProject: '/img/grow.png',
    isMaintenance: true,
    description:
      'The commercial project includes 23 pages, responsive design, and supports dark/light themes. Real-time data visualization and automated plant growth management. The system provides accurate charts for both real-time and historical data, with convenient parameter customization and continuous monitoring of key indicators.',
    liveHref: 'https://gamma.app/docs/GrowBox--sj46abc1da94p9u',
    repoHref: 'https://github.com/JulianaMitkevych/WEB-Internship-2025.git',
  },
  {
    id: 13,
    title: 'GrowBox API Service.[TetaLab]',
    skills:
      'NestJS, TypeScript, PostgreSQL, TypeORM, Swagger, Socket.io, firebase-admin',
    role: '[TetaLab] Full-Stack Developer (Backend)',
    imageProject: '/img/farm.jpeg',
    isMaintenance: true,
    description:
      'Robust backend architecture featuring a secure RESTful API. Implemented Role-Based Access Control (RBAC) with double verification for enhanced data protection. The system supports full CRUD operations, complex data filtering, multi-parameter sorting, and full-text search. Integrated TypeORM for efficient PostgreSQL database management and Swagger for interactive API documentation.',
    liveHref: 'https://gamma.app/docs/GrowBox--ssq9alxahcugau7',
    repoHref: 'https://github.com/Olena457/nest-project.git',
  },
];

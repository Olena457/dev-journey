// import { PORTFOLIO_PROJECTS } from './propsItems';
// import SkillsList from '../SkillsList/SkillsList';
// import styles from './PortfolioCard.module.scss';
// import LinkIcon from '@/public/icons/LinkIcon';
// import GitIcon from '@/public/icons/GitIcon';
// import ExpandDescription from '../ExpandDescription/EpandDescription';
// // import { useTranslation } from 'react-i18next';

// const PortfolioCard = () => {
//   //   const { t } = useTranslation();

//   return (
//     <>
//       <ul id="projects" className={styles.list}>
//         {/* <div className={styles.background}> </div> */}
//         <div className={`${styles.shadow} ${styles.shadow1}`}></div>
//         <div className={`${styles.shadow} ${styles.shadow3}`}></div>
//         <div className={`${styles.shadow} ${styles.shadow4}`}></div>
//         <div className={`${styles.shadow} ${styles.shadow2}`}></div>

//         <div className={styles.wraper}>
//           <h2 className={styles.mainTitle}>
//            My<span className={styles.accent}> Projects</span>
//           </h2>
//         </div>
//         {PORTFOLIO_PROJECTS.map(project => (
//           <li key={project.id} className={styles.item}>
//             <div className={styles.itemWrapper}>
//               <div className={styles.imageWrapper}>
//                 <img
//                   className={styles.image}
//                   alt={project.title}
//                   src={project.imageProgect}
//                 />
//               </div>
//               <div className={styles.contentWrapper}>
//                 <h3 className={styles.title}>{project.title}</h3>
//                 <SkillsList portfolio={true} list={project.skills} />
//                 <p className={styles.role}>{project.role}</p>
//                 <ExpandDescription text={project.description} />
//               </div>
//             </div>
//             <div className={styles.linksWrapper}>
//               <a
//                 className={styles.link}
//                 href={project.liveHref}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <LinkIcon id="link" className={styles.icon} />
//                 <p>Live</p>
//               </a>
//               <a
//                 className={styles.link}
//                 href={project.repoHref}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <GitIcon id="git" className={styles.icon} />
//                 <p>Git</p>
//               </a>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default PortfolioCard;
// _________________________________________________
// 'use client';
// import React, { useRef } from 'react';
// import { PORTFOLIO_PROJECTS } from './propsItems';
// import { PetProgectsData } from '../../types/types';

// import SkillsList from '../SkillsList/SkillsList';
// import styles from './PortfolioCard.module.scss';
// import LinkIcon from '@/public/icons/LinkIcon';
// import GitIcon from '@/public/icons/GitIcon';
// import ExpandDescription from '../ExpandDescription/EpandDescription';

// const PortfolioCard: React.FC = () => {
//   const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

//   const handleMouseMove = (
//     e: React.MouseEvent<HTMLDivElement>,
//     index: number
//   ) => {
//     const card = imageRefs.current[index];
//     if (!card) return;

//     const { left, top, width, height } = card.getBoundingClientRect();

//     // Координати від -0.5 до 0.5
//     const x = (e.clientX - left) / width - 0.5;
//     const y = (e.clientY - top) / height - 0.5;

//     // Збільшуємо multiplier для помітного нахилу (30-40 градусів)
//     const rotateMultiplier = 40;
//     // Додаємо зміщення (ніби картинка рухається за мишкою)
//     const moveMultiplier = 20;

//     card.style.transform = `
//       perspective(1000px)
//       rotateX(${-y * rotateMultiplier}deg)
//       rotateY(${x * rotateMultiplier}deg)
//       translateX(${x * moveMultiplier}px)
//       translateY(${y * moveMultiplier}px)
//       scale3d(1.07, 1.07, 1.07)
//     `;
//   };

//   const handleMouseLeave = (index: number) => {
//     const card = imageRefs.current[index];
//     if (card) {
//       card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1) translateX(0) translateY(0)`;
//     }
//   };

//   return (
//     <ul id="projects" className={styles.list}>
//       <div className={`${styles.shadow} ${styles.shadow1}`}></div>
//       <div className={`${styles.shadow} ${styles.shadow3}`}></div>
//       <div className={`${styles.shadow} ${styles.shadow4}`}></div>
//       <div className={`${styles.shadow} ${styles.shadow2}`}></div>

//       <div className={styles.wraper}>
//         <h2 className={styles.mainTitle}>
//           My<span className={styles.accent}> Projects</span>
//         </h2>
//       </div>

//       {PORTFOLIO_PROJECTS.map((project: PetProgectsData, index: number) => (
//         <li key={project.id} className={styles.item}>
//           <div className={styles.itemWrapper}>
//             <div
//               ref={el => {
//                 imageRefs.current[index] = el;
//               }}
//               className={styles.imageWrapper}
//               onMouseMove={e => handleMouseMove(e, index)}
//               onMouseLeave={() => handleMouseLeave(index)}
//             >
//               <img
//                 className={styles.image}
//                 alt={project.title}
//                 src={project.imageProgect}
//               />
//             </div>

//             <div className={styles.contentWrapper}>
//               <h3 className={styles.title}>{project.title}</h3>
//               <SkillsList portfolio={true} list={project.skills} />
//               <p className={styles.role}>{project.role}</p>
//               <ExpandDescription text={project.description} />
//             </div>
//           </div>

//           <div className={styles.linksWrapper}>
//             <a
//               className={styles.link}
//               href={project.liveHref}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <LinkIcon id="link" className={styles.icon} />
//               <p>Live</p>
//             </a>
//             <a
//               className={styles.link}
//               href={project.repoHref}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <GitIcon id="git" className={styles.icon} />
//               <p>Git</p>
//             </a>
//           </div>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default PortfolioCard;
'use client';
import React, { useRef } from 'react';
import { PORTFOLIO_PROJECTS } from './propsItems';
import { PetProgectsData } from '../../types/types';

import SkillsList from '../SkillsList/SkillsList';
import styles from './PortfolioCard.module.scss';
import LinkIcon from '@/public/icons/LinkIcon';
import GitIcon from '@/public/icons/GitIcon';
import ExpandDescription from '../ExpandDescription/EpandDescription';

const PortfolioCard: React.FC = () => {
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const glareRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    const card = imageRefs.current[index];
    const glare = glareRefs.current[index];
    if (!card || !glare) return;

    const { left, top, width, height } = card.getBoundingClientRect();

    // Розрахунок координат від -0.5 до 0.5
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;

    // Параметри 3D ефекту
    const rotateMultiplier = 40; // Кут нахилу
    const moveMultiplier = 20; // Зміщення по осях

    card.style.transform = `
      perspective(1000px) 
      rotateX(${-y * rotateMultiplier}deg) 
      rotateY(${x * rotateMultiplier}deg)
      translateX(${x * moveMultiplier}px)
      translateY(${y * moveMultiplier}px)
      scale3d(1.07, 1.07, 1.07)
    `;

    // Керування відблиском (glare)
    const glareX = x * 100;
    const glareY = y * 100;
    glare.style.transform = `translate(${glareX}%, ${glareY}%)`;
    glare.style.opacity = '0.4';
  };

  const handleMouseLeave = (index: number) => {
    const card = imageRefs.current[index];
    const glare = glareRefs.current[index];

    if (card) {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1) translateX(0) translateY(0)`;
    }
    if (glare) {
      glare.style.opacity = '0';
    }
  };

  return (
    <ul id="projects" className={styles.list}>
      {/* Декоративні фонові тіні */}
      <div className={`${styles.shadow} ${styles.shadow1}`}></div>
      <div className={`${styles.shadow} ${styles.shadow3}`}></div>
      <div className={`${styles.shadow} ${styles.shadow4}`}></div>
      <div className={`${styles.shadow} ${styles.shadow2}`}></div>

      <div className={styles.wraper}>
        <h2 className={styles.mainTitle}>
          My<span className={styles.accent}> Projects</span>
        </h2>
      </div>

      {PORTFOLIO_PROJECTS.map((project: PetProgectsData, index: number) => (
        <li key={project.id} className={styles.item}>
          <div className={styles.itemWrapper}>
            <div
              ref={el => {
                imageRefs.current[index] = el;
              }}
              className={styles.imageWrapper}
              onMouseMove={e => handleMouseMove(e, index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              {/* Шар скляного відблиску */}
              <div
                ref={el => {
                  glareRefs.current[index] = el;
                }}
                className={styles.glare}
              />

              <img
                className={styles.image}
                alt={project.title}
                src={project.imageProgect}
              />
            </div>

            <div className={styles.contentWrapper}>
              <h3 className={styles.title}>{project.title}</h3>
              <SkillsList portfolio={true} list={project.skills} />
              <p className={styles.role}>{project.role}</p>
              <ExpandDescription text={project.description} />
            </div>
          </div>

          <div className={styles.linksWrapper}>
            <a
              className={styles.link}
              href={project.liveHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkIcon id="link" className={styles.icon} />
              <p>Live</p>
            </a>
            <a
              className={styles.link}
              href={project.repoHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitIcon id="git" className={styles.icon} />
              <p>Git</p>
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PortfolioCard;
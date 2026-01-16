
'use client';
import React, { useRef } from 'react';
import { PORTFOLIO_PROJECTS } from './propsItems';
import { PetProgectsData } from '../../types/types';
import ScreenIcon from '@/public/icons/ScreenIcon';


import SkillsList from '../SkillsList/SkillsList';
import styles from './PortfolioCard.module.scss';
import LinkIcon from '@/public/icons/LinkIcon';
import GitIcon from '@/public/icons/GitIcon';
import ExpandDescription from '../ExpandDescription/EpandDescription';

const PortfolioCard: React.FC = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const { left, top, width, height } = card.getBoundingClientRect();

    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;

    const rotateMultiplier = 25; // Максимальний кут нахилу
    const moveMultiplier = 10; // Невелике зміщення по осях для об'єму

    card.style.transform = `
      perspective(1000px) 
      rotateX(${-y * rotateMultiplier}deg) 
      rotateY(${x * rotateMultiplier}deg)
      translateX(${x * moveMultiplier}px)
      translateY(${y * moveMultiplier}px)
      scale3d(1.05, 1.05, 1.05)
    `;
  };

  const handleMouseLeave = (index: number) => {
    const card = cardRefs.current[index];
    if (card) {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1) translateX(0) translateY(0)`;
    }
  };

  return (
    <ul id="projects" className={styles.list}>
      {/* <div className={`${styles.shadow} ${styles.shadow1}`}></div>
       <div className={`${styles.shadow} ${styles.shadow3}`}></div>
       <div className={`${styles.shadow} ${styles.shadow4}`}></div>
       <div className={`${styles.shadow} ${styles.shadow2}`}></div> */}
      {/* Фоновий декор */}

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
                cardRefs.current[index] = el;
              }}
              className={styles.imageWrapper}
              onMouseMove={e => handleMouseMove(e, index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <img
                className={styles.image}
                alt={project.title}
                src={project.imageProgect}
              />
            </div>

            <div className={styles.contentWrapper}>
              <div className={styles.titleWrapper}>
                <ScreenIcon
                  id="screen"
                  width="28px"
                  height="28px"
                  className={styles.projectIcon}
                />
                <h3 className={styles.title}>{project.title}</h3>
              </div>
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
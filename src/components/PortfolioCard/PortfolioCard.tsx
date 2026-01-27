'use client';
import React, { useRef, useState } from 'react';
import clsx from 'clsx';

import { PORTFOLIO_PROJECTS } from './propsItems';
import { PetProgectsData } from '../../types/types';
import ExpandDescription from '../ExpandDescription/EpandDescription';

import ScreenIcon from '@/public/icons/ScreenIcon';
import SkillsList from '../SkillsList/SkillsList';
import LinkIcon from '@/public/icons/LinkIcon';
import styles from './PortfolioCard.module.scss';

const PortfolioCard: React.FC = () => {
  const PROJECTS_PER_PAGE = 3;
  const [visibleCount, setVisibleCount] = useState(PROJECTS_PER_PAGE);

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const boundsRef = useRef<DOMRect | null>(null);

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + PROJECTS_PER_PAGE);
  };

  const visibleProjects = PORTFOLIO_PROJECTS.slice(0, visibleCount);

  const handleMouseEnter = (index: number) => {
    const card = cardRefs.current[index];
    if (card) boundsRef.current = card.getBoundingClientRect();
  };

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    const card = cardRefs.current[index];
    if (!card || !boundsRef.current) return;
    const { left, top, width, height } = boundsRef.current;
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    const rotateMultiplier = 25;
    const moveMultiplier = 10;
    card.style.transform = `perspective(1000px) rotateX(${-y * rotateMultiplier}deg) rotateY(${x * rotateMultiplier}deg) translateX(${x * moveMultiplier}px) translateY(${y * moveMultiplier}px) scale3d(1.05, 1.05, 1.05)`;
  };

  const handleMouseLeave = (index: number) => {
    const card = cardRefs.current[index];
    boundsRef.current = null;
    if (card)
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1) translateX(0) translateY(0)`;
  };

  return (
    <section id="projects" className={styles.sectionProjects}>
      <div className={styles.wraper}>
        <h2 className={styles.mainTitle}>
          My<span className={styles.accent}> Projects</span>
        </h2>
      </div>
      <ul className={styles.list}>
        {visibleProjects.map((project: PetProgectsData, index: number) => (
          <li key={project.id} className={clsx(styles.item, styles.visible)}>
            <div className={styles.itemWrapper}>
              <div
                ref={el => {
                  cardRefs.current[index] = el;
                }}
                className={styles.imageWrapper}
                onMouseEnter={() => handleMouseEnter(index)}
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
                <p>Visit</p>
              </a>
            </div>
          </li>
        ))}

        {visibleCount < PORTFOLIO_PROJECTS.length && (
          <div className={styles.btnContainer}>
            <button onClick={handleLoadMore} className={styles.loadMoreBtn}>
              Load More
            </button>
          </div>
        )}
      </ul>
    </section>
  );
};

export default PortfolioCard;

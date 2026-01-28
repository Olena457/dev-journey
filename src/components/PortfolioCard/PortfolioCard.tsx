'use client';
import React, { useRef, useState, useEffect } from 'react';
import clsx from 'clsx';

import { PORTFOLIO_PROJECTS } from './propsItems';
import { PetProgectsData } from '../../types/types';
import ExpandDescription from '../ExpandDescription/EpandDescription';
import InfoIcon from '@/public/icons/InfoIcon';
import ScreenIcon from '@/public/icons/ScreenIcon';
import SkillsList from '../SkillsList/SkillsList';
import LinkIcon from '@/public/icons/LinkIcon';
import styles from './PortfolioCard.module.scss';
import VolumeStartIcon from '@/public/icons/VolumeStartIcon';
import VolumeStopIcon from '@/public/icons/VolumeStopIcon';

const PortfolioCard: React.FC = () => {
  const PROJECTS_PER_PAGE = 3;

  const [visibleCount, setVisibleCount] = useState(PROJECTS_PER_PAGE);
  const [speakingProjectId, setSpeakingProjectId] = useState<number | null>(null);


  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);
  
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

  const openDialog = (e: React.MouseEvent) => {
    e.preventDefault(); 

    const dialog = document.getElementById(
      'project-info-dialog'
    ) as HTMLDialogElement;

    if (dialog) {
      dialog.showModal();

      const closeBtn = dialog.querySelector(
        `.${styles.dialogCloseBtn}`
      ) as HTMLElement;
      closeBtn?.focus({ preventScroll: true });
    }
  };

  const closeDialog = () => {
    const dialog = document.getElementById(
      'project-info-dialog'
    ) as HTMLDialogElement;
    dialog?.close();
  };
  // _______________speech _______________________
const toggleSpeech = (project: PetProgectsData) => {
  if (speakingProjectId === project.id) {
    window.speechSynthesis.cancel();
    setSpeakingProjectId(null);
    return;
  }

  
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(project.description);
  utterance.lang = 'en-US'; 
  utterance.rate = 0.9;

  utterance.onend = () => setSpeakingProjectId(null);
  utterance.onerror = () => setSpeakingProjectId(null);

  setSpeakingProjectId(project.id);
  window.speechSynthesis.speak(utterance);
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
                  {/* button sound */}
                  <button
                    type="button"
                    onClick={() => toggleSpeech(project)}
                    className={clsx(
                      styles.speechBtn,
                      speakingProjectId === project.id && styles.speaking
                    )}
                    aria-label="Toggle project description voice"
                  >
                    {speakingProjectId === project.id ? (
                      <VolumeStopIcon
                        id="volume-stop"
                        width="35px"
                        height="35px"
                        fill="#820f84"
                      />
                    ) : (
                      <VolumeStartIcon
                        id="volume-start"
                        width="35px"
                        height="35px"
                        fill="rgba(177, 172, 172, 0.7)"
                      />
                    )}
                  </button>

                  {/* isMaintenance: true */}
                  {project.isMaintenance && (
                    <span
                      className={styles.infoIconTrigger}
                      onClick={e => openDialog(e)}
                      role="button"
                    >
                      <InfoIcon
                        id="info"
                        width="20px"
                        height="20px"
                        fill="rgba(177, 172, 172, 0.7)"
                      />
                    </span>
                  )}
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

      {/* Структура діалогового вікна */}
      <dialog id="project-info-dialog" className={styles.dialog}>
        <div className={styles.dialogContent}>
          <button onClick={closeDialog} className={styles.dialogCloseBtn}>
            &times;
          </button>
          <h3 className={styles.dialogTitle}>Project Information</h3>
          <hr className={styles.dialogLine} />
          <p className={styles.dialogText}>
            This project is currently unavailable. The live demo will be
            available soon.
          </p>
        </div>
      </dialog>
    </section>
  );
};
  export default PortfolioCard;

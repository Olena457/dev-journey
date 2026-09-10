'use client';
import React from 'react';
import PortfolioCard from '../PortfolioCard/PortfolioCard';
import { INTERNSHIP_PROJECTS } from '../PortfolioCard/internshipProjects';
import styles from '../PortfolioCard/PortfolioCard.module.scss';

export const InternshipProjects: React.FC = () => {
  return (
    <PortfolioCard
      sectionId="internship"
      listClassName={styles.internshipList}
      title={
        <>
          Internship &<span className={styles.accent}> Team Projects</span>
        </>
      }
      projects={INTERNSHIP_PROJECTS}
      initialVisibleCount={1}
      loadMoreCount={2}
    />
  );
};

// 'use client';

import dynamic from 'next/dynamic';
import styles from './HeroComponent.module.scss';
import LetterAnimation from '../LetteAnimation/LetterAnimation';

export const HeroComponet: React.FC = () => {
  return (
    <div id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textBlock}>
            <h1 className={styles.title}>Frontend Developer</h1>
            <p className={styles.description}>
              I am a frontend developer focused on building scalable, efficient
              solutions through a structured approach. I am adept at driving
              both collaborative and independent projects, turning ideas into
              interactive, seamless digital experiences powered by modern
              frontend technologies.<br/> I am committed to continuous learning and
              applying diverse development approaches.
            </p>
          </div>
          <div className={styles.animationBlock}>
            <LetterAnimation />
          </div>
        </div>
      </div>
    </div>
  );
};

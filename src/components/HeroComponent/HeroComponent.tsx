// 'use client';

// import dynamic from 'next/dynamic';
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
              Transforming ideas into interactive and seamless digital
              experiences through modern frontend development. Driven by
              curiosity, continuous learning, and effective development
              methodologies.
            </p>
          </div>

          <div className={styles.animationBlock}>
            <div className={styles.codeContent}>
              <LetterAnimation />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

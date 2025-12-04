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
         <h1 className={styles.title}>Furontend Developer</h1>
            <p className={styles.description}>
              Frontend developer creating scalable, efficient solutions with a
              structured approach and strong contribute effectively to both team
              and individual projects.
            </p>
          </div>
          <div className={styles.animationBlock}>
            <LetterAnimation />
          </div>

          {/* <div className={styles.gitBlock}> */}

          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

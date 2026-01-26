
'use client';
import React, { useState } from 'react';
import LetterAnimation from '../LetteAnimation/LetterAnimation';
import styles from './HeroComponent.module.scss';

const QUOTES = [
  {
    text: 'Success is about the courage to undertake a journey that you believe in.',
    author: 'Steve Jobs',
  },
  {
    text: 'Your most unhappy customers are your greatest source of learning.',
    author: 'Bill Gates',
  },
  {
    text: 'If you stop learning, you stop being useful.',
    author: 'Eric Schmidt',
  },
  {
    text: 'The only way to do great work is to love what you do.',
    author: 'Steve Jobs',
  },
];

export const HeroComponent: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    // Якщо це остання цитата — повертаємося на початок, інакше йдемо вперед
    if (currentIndex === QUOTES.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const isLastQuote = currentIndex === QUOTES.length - 1;

  return (
    <div className={styles.hero}>
      <h2 className={styles.titleMain}>
        Success<span className={styles.accent}>Quotes</span>
      </h2>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textBlock}>
            <div className={styles.decor}></div>

            <div className={styles.quoteCard}>
              <div className={styles.quoteTextContainer}>
                {/* Додаємо ключовий індекс для перезапуску CSS анімації при зміні тексту */}
                <p key={currentIndex} className={styles.description}>
                  “{QUOTES[currentIndex].text}”
                </p>
                <span className={styles.author}>
                  - {QUOTES[currentIndex].author} -
                </span>
              </div>

              <button className={styles.nextButton} onClick={handleNext}>
                <span className={styles.buttonText}>
                  {isLastQuote ? 'Back' : 'Next'}
                </span>
              </button>
            </div>
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

export default HeroComponent;
'use client';

import React, { useRef } from 'react';
import { carouselData } from './valueData';
import styles from './CarouselCard.module.scss';

export const CarouselCard: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const moveDistance = clientWidth * 0.8;

      const scrollTo =
        direction === 'left'
          ? scrollLeft - moveDistance
          : scrollLeft + moveDistance;

      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.titleMain}>
         Development<span className={styles.accent}>& Lifecycle</span>
      </h2>
      {/* container with scroll */}
      <div className={styles.scrollContainer} ref={scrollRef}>
        <ul className={styles.content}>
          {carouselData.map(item => (
            <li key={item.id} className={styles.card}>
              <span className={styles.number}>{item.id}.</span>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* arrow */}
      <div className={styles.controls}>
        <button
          className={styles.arrow}
          onClick={() => scroll('left')}
          type="button"
        >
          <span>&#8592;</span>
        </button>
        <button
          className={styles.arrow}
          onClick={() => scroll('right')}
          type="button"
        >
          <span>&#8594;</span>
        </button>
      </div>
    </div>
  );
};

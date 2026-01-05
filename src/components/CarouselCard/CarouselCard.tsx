'use client';

import React, { useRef } from 'react';
import { carouselData } from './valueData';
import styles from './CarouselCard.module.scss';

export const CarouselCard: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      // clientWidth бере ширину видимої частини каруселі
      const { scrollLeft, clientWidth } = scrollRef.current;
      const moveDistance = clientWidth * 0.8; // Скролимо на 80% ширини для комфорту

      const scrollTo =
        direction === 'left'
          ? scrollLeft - moveDistance
          : scrollLeft + moveDistance;

      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.wrapper}>
      {/* Контейнер зі скролом */}
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

      {/* Кнопки керування */}
      <div className={styles.controls}>
        <button
          className={styles.arrow}
          onClick={() => scroll('left')}
          type="button"
        >
          <span>&#8592;</span> {/* Надійний код стрілки влево */}
        </button>
        <button
          className={styles.arrow}
          onClick={() => scroll('right')}
          type="button"
        >
          <span>&#8594;</span> {/* Надійний код стрілки вправо */}
        </button>
      </div>
    </div>
  );
};

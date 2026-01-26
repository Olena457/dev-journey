
'use client';
import React, { useRef, useEffect, useState } from 'react';
import { carouselData } from './valueData';
import { ControllsButton } from './ControllsButton';
import { ScannerCard } from './ScannerCard';
import styles from './CarouselCard.module.scss';

export const CarouselCard: React.FC = () => {
  const cardLineRef = useRef<HTMLUListElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [velocity, setVelocity] = useState(30);

  const stateRef = useRef({
    position: 0,
    isPaused: false,
    velocity: 30,
  });

  useEffect(() => {
    stateRef.current.isPaused = isPaused;
    stateRef.current.velocity = velocity;
  }, [isPaused, velocity]);

  useEffect(() => {
    let lastTime = 0;
    const cardWidth = 460 + 32;
    const totalWidth = carouselData.length * cardWidth;

    const animate = (currentTime: number) => {
      if (!lastTime) lastTime = currentTime;
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      if (!stateRef.current.isPaused && cardLineRef.current) {
        stateRef.current.position -= stateRef.current.velocity * deltaTime;
// reset
        if (Math.abs(stateRef.current.position) >= totalWidth) {
          stateRef.current.position = 0;
        }

        cardLineRef.current.style.transform = `translateX(${stateRef.current.position}px)`;

        const cards = cardLineRef.current.querySelectorAll(
          `.${styles.cardWrapper}`
        );
        const scannerX = window.innerWidth / 2;

        cards.forEach(card => {
          const rect = card.getBoundingClientRect();
          const relativeX = ((scannerX - rect.left) / rect.width) * 100;
          const clampedX = Math.max(0, Math.min(100, relativeX));
          (card as HTMLElement).style.setProperty(
            '--scan-prop',
            `${clampedX}%`
          );
        });
      }
      requestAnimationFrame(animate);
    };

    const animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.titleMain}>
        Development<span className={styles.accent}>& Lifecycle</span>
      </h2>

      <div className={styles.scrollContainer}>
        <div className={styles.scannerLine}>
          <div className={styles.scannerGlow} />
        </div>

        <ul className={styles.content} ref={cardLineRef}>
          {[...carouselData, ...carouselData].map((item, idx) => (
            <ScannerCard key={`${item.id}-${idx}`} item={item} />
          ))}
        </ul>
      </div>

      <div className={styles.controls}>
        <ControllsButton
          isPaused={isPaused}
          onTogglePause={() => setIsPaused(!isPaused)}
          velocity={velocity}
          onVelocityChange={setVelocity}
        />
      </div>
    </div>
  );
};

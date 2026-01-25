// 'use client';

// import React, { useRef } from 'react';
// import { carouselData } from './valueData';
// import PlayIcon from '@/public/icons/PlayIcon';
// import styles from './CarouselCard.module.scss';

// export const CarouselCard: React.FC = () => {
//   const scrollRef = useRef<HTMLDivElement>(null);

//   const scroll = (direction: 'left' | 'right') => {
//     if (scrollRef.current) {
//       const { scrollLeft, clientWidth } = scrollRef.current;
//       const moveDistance = clientWidth * 0.8;

//       const scrollTo =
//         direction === 'left'
//           ? scrollLeft - moveDistance
//           : scrollLeft + moveDistance;

//       scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
//     }
//   };

//   return (
//     <div className={styles.wrapper}>
//       <h2 className={styles.titleMain}>
//         Development<span className={styles.accent}>& Lifecycle</span>
//       </h2>
//       {/* container with scroll */}
//       <div className={styles.scrollContainer} ref={scrollRef}>
//         <ul className={styles.content}>
//           {carouselData.map(item => (
//             <li key={item.id} className={styles.card}>
//               <div className={styles.header}>
//                 <PlayIcon
//                   id="play"
//                   width="40px"
//                   height="40px"
//                   className={styles.icon}
//                 />
//                 <h3 className={styles.title}>{item.title}</h3>
//               </div>
//               <p className={styles.description}>{item.description}</p>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* arrow */}
//       <div className={styles.controls}>
//         <button
//           className={styles.arrow}
//           onClick={() => scroll('left')}
//           type="button"
//         >
//           <span>&#8592;</span>
//         </button>
//         <button
//           className={styles.arrow}
//           onClick={() => scroll('right')}
//           type="button"
//         >
//           <span>&#8594;</span>
//         </button>
//       </div>
//     </div>
//   );
// };
'use client';

import React, { useRef, useEffect, useState } from 'react';
import { carouselData } from './valueData';
import TeamIcon from '@/public/icons/TeamIcon';
import styles from './CarouselCard.module.scss';

const generateRandomCode = (length: number) => {
  const chars = '01<>[]{}/\\#@!$%&*+-=abcdefxyz';
  return Array.from(
    { length },
    () => chars[Math.floor(Math.random() * chars.length)]
  ).join('');
};

export const CarouselCard: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardLineRef = useRef<HTMLUListElement>(null);

  // Стан анімації
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(-1); // -1 вліво, 1 вправо
  const positionRef = useRef(0);
  const velocityRef = useRef(120); // Швидкість px/s

  useEffect(() => {
    let lastTime = 0;
    const cardWidth = 460 + 32; // Ширина картки + gap (змінюй під свій CSS)
    const totalWidth = carouselData.length * cardWidth;

    const animate = (currentTime: number) => {
      if (!lastTime) lastTime = currentTime;
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      if (!isPaused && cardLineRef.current) {
        // Вираховуємо нову позицію
        positionRef.current += velocityRef.current * direction * deltaTime;

        // Loop (нескінченний цикл)
        if (Math.abs(positionRef.current) >= totalWidth) {
          positionRef.current = 0;
        }

        cardLineRef.current.style.transform = `translateX(${positionRef.current}px)`;
        updateClipping();
      }
      requestAnimationFrame(animate);
    };

    const updateClipping = () => {
      if (!cardLineRef.current) return;
      const cards = cardLineRef.current.querySelectorAll(
        `.${styles.cardWrapper}`
      );
      const scannerX = window.innerWidth / 2;

      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const relativeX = ((scannerX - rect.left) / rect.width) * 100;
        const clampedX = Math.max(0, Math.min(100, relativeX));
        (card as HTMLElement).style.setProperty('--scan-prop', `${clampedX}%`);
      });
    };

    const animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [isPaused, direction]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.controls}>
        <button
          className={styles.controlBtn}
          onClick={() => setIsPaused(!isPaused)}
        >
          {isPaused ? '▶️ Play' : '⏸️ Pause'}
        </button>
        <button
          className={styles.controlBtn}
          onClick={() => setDirection(prev => prev * -1)}
        >
          ↔️ Direction
        </button>
      </div>

      <h2 className={styles.titleMain}>
        Development<span className={styles.accent}>& Lifecycle</span>
      </h2>

      <div className={styles.scannerLine}>
        <div className={styles.scannerGlow} />
      </div>

      <div className={styles.scrollContainer} ref={scrollRef}>
        <ul className={styles.content} ref={cardLineRef}>
          {/* Дублюємо масив для безшовного циклу */}
          {[...carouselData, ...carouselData].map((item, idx) => (
            <li key={`${item.id}-${idx}`} className={styles.cardWrapper}>
              <div className={`${styles.card} ${styles.cardNormal}`}>
                <div className={styles.header}>
                  <TeamIcon id="team" width="40" height="40" className={styles.icon} />
                  <h3 className={styles.title}>{item.title}</h3>
                </div>
                <p className={styles.description}>{item.description}</p>
                <div className={styles.cardNumber}>{item.id}</div>
              </div>

              <div className={`${styles.card} ${styles.cardCode}`}>
                <div className={styles.codeContent}>
                  {`// Module: ${item.title}\n`}
                  {`function process() {\n`}
                  {`  const id = "${item.id}";\n`}
                  {generateRandomCode(150)}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
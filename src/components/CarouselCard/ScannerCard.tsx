// 'use client';
// import React from 'react';
// import TeamIcon from '@/public/icons/TeamIcon';
// import styles from './CarouselCard.module.scss';

// interface ScannerCardProps {
//   item: { id: string; title: string; description: string };
//   randomCode: string;
// }

// export const ScannerCard: React.FC<ScannerCardProps> = ({
//   item,
//   randomCode,
// }) => {
//   return (
//     <li className={styles.cardWrapper}>
//       {/* Дизайн (справа від лінії) */}
//       <div className={`${styles.card} ${styles.cardNormal}`}>
//         <div className={styles.header}>
//           <TeamIcon id="team" width="40" height="40" className={styles.icon} />
//           <h3 className={styles.title}>{item.title}</h3>
//         </div>
//         <p className={styles.description}>{item.description}</p>
//         <div className={styles.cardNumber}>{item.id}</div>
//       </div>

//       {/* Код та іскри (зліва від лінії) */}
//       <div className={`${styles.card} ${styles.cardCode}`}>
//         {/* Анімований фон з іскрами */}
//         <div className={styles.particlesOverlay} />

//         <div className={styles.codeContent}>
//           {`// Module: ${item.title}\n`}
//           {`function init() {\n`}
//           {`  const status = "active";\n`}
//           {randomCode}
//         </div>
//       </div>
//     </li>
//   );
// };
'use client';
import React, { useMemo, useState, useEffect } from 'react';
import TeamIcon from '@/public/icons/TeamIcon';
import styles from './CarouselCard.module.scss';
import { ParticlesBackground } from '../ParticlesBackground/ParticlesBackground';

interface ScannerCardProps {
  item: { id: string; title: string; description: string };
}

export const ScannerCard: React.FC<ScannerCardProps> = ({ item }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Генеруємо символи для заповнення всієї картки
  const asciiBackground = useMemo(() => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[]{}|;:,.<>?';
    let res = '';
    // Збільшуємо кількість ітерацій, щоб текст заповнив усю картку повністю
    for (let i = 0; i < 1500; i++) {
      res += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return res;
  }, []);

  const CardContent = () => (
    <>
      <div className={styles.header}>
        <TeamIcon id="team" width="40" height="40" className={styles.icon} />
        <h3 className={styles.title}>{item.title}</h3>
      </div>
      <p className={styles.description}>{item.description}</p>
    </>
  );

  return (
    <li className={styles.cardWrapper}>
      <div className={`${styles.card} ${styles.cardCode}`}>
        <ParticlesBackground />
        {mounted && (
          <div className={styles.asciiOverlay}>{asciiBackground}</div>
        )}
      </div>

      {/* text */}
      <div className={`${styles.card} ${styles.cardNormal}`}>
        <CardContent />
      </div>
    </li>
  );
};


'use client';
import React, { useMemo, useState, useEffect } from 'react';
import ScreenIcon from '@/public/icons/ScreenIcon';
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

  const asciiBackground = useMemo(() => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[]{}|;:,.<>?';
    let res = '';
    for (let i = 0; i < 1500; i++) {
      res += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return res;
  }, []);

  const CardContent = () => (
    <>
      <div className={styles.header}>
        <ScreenIcon id="screen" width="30" height="30" className={styles.icon} />
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

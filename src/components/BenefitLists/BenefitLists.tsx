'use client';

import React from 'react';
import styles from './BenefitLists.module.scss';
import DotIcon from '@/public/icons/DotIcon';
import TimeIcon from '@/public/icons/TimeIcon';
import CircleIcon from '@/public/icons/CircleIcon';

export const benefits = [
  {
    title: 'Expertise',
    description:
      'With extensive experience in development, I have a deep understanding of programming and website development.',
    icon: <DotIcon id="diamonds" width="40px" height="40px" />,
  },
  {
    title: 'Communication',
    description:
      'Understanding your needs and wants is my priority and I am always available for discussions and open to corrections.',
    icon: <CircleIcon id="circles" width="40px" height="40px" />,
  },
  {
    title: 'Creativity',
    description:
      'Thanks to my creative nature, I am ready to accept challenges and help you bring your ideas to life.',
    icon: <DotIcon id="diamonds" width="40px" height="40px" />,
  },
  {
    title: 'Urgent execution',
    description:
      'I understand how important time is to you. Ready to work quickly and efficiently, without reducing the quality of work.',
    icon: <TimeIcon id="clock" width="40px" height="40px" />,
  },
];

export const BenefitLists: React.FC = () => {
  return (
    <div className={styles.list}>
      <div className={styles.gridTitle}>
        <h2 className={styles.title}>
        Benefits of <span className={styles.accent}> working</span> with me
        </h2>
      </div>

      {benefits.map((item, index) => (
        <div key={index} className={styles.item}>
         
          <div className={styles.titleIcon}>
            {item.icon}
            <h3 className={styles.name}>{item.title}</h3>
          </div>
          <p className={styles.description}>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

'use client';

import React from 'react';
import Image from 'next/image';
import PlanetImage from '@/public/img/planet.png';
import { faqData } from './facData';
import styles from './AccordionText.module.scss';

export const AccordionText: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Left side : Text  */}

        <div className={styles.backgroundPart}>
          <Image
            src={PlanetImage}
            alt="background"
            fill
            sizes="(min-width: 760px) 450px, 150px"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className={styles.infoSide}>
          <h2 className={styles.title}>
            Frequently <span className={styles.accent}>Asked</span>
            <span className={styles.accent}>Questions</span>for me
          </h2>
          <p className={styles.description}>
            I would be happy to hear from you and discuss web design, product
            development, or your new startup idea.
          </p>
        </div>

        {/* Right side: Accordeon */}
        <div className={styles.accordionSide}>
          {faqData.map(item => (
            <details key={item.id} className={styles.item}>
              <summary className={styles.summary}>
                <h3 className={styles.question}>{item.question}</h3>
                <span className={styles.icon}></span>
              </summary>
              <div className={styles.content}>
                <div className={styles.inner}>
                  <p className={styles.answer}>{item.answer}</p>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

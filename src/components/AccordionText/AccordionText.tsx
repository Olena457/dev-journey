'use client';

import React from 'react';
import { faqData } from './facData';
import styles from './AccordionText.module.scss';
import DonatIcon from '@/public/icons/DonatIcon';

export const AccordionText: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Left side : Text  */}
        <div className={styles.infoSide}>
          <h2 className={styles.title}>
            <span className={styles.iconWrapper}>
              <DonatIcon id="donat" width="25px" height="25px" />
            </span>
            Start <span className={styles.accent}>Now</span> With
            <span className={styles.accent}>Our</span>Service
          </h2>
          <p className={styles.description}>
            We'd love to hear from you to discuss web design, product
            development or to hear your new startup idea.
          </p>
          {/* <button className={styles.button}>Let's Work Together!</button> */}
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

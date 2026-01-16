'use client';

import React from 'react';
import { services } from './valueData';
import styles from './ServiceList.module.scss';
import DotIcon from '@/public/icons/DotIcon';
import DonatIcon from '@/public/icons/DonatIcon';



export const ServicesList: React.FC = () => {
  return (
    <div className={styles.WrapperService}>
      <section id="services" className={styles.services}>
        <div className={styles.leftContent}>
          <div className={styles.titleWrapper}>
            <span className={styles.label}>
              <DonatIcon id="donat" width="25px" height="25px" />
            </span>
            <h2 className={styles.title}>
             Which <span className={styles.accent}>Services I</span> Can
              Provide
            </h2>
          </div>
          <p className={styles.subtitle}>
            Develop digital interfaces with a focus on quality, adaptability,
            and stability. I have experience in both frontend and backend,
            working with modern frameworks. I confidently implement
            functionality, optimize code, and maintain clear structure.
          </p>
        </div>

        {/* left side */}
        <div className={styles.list}>
          {services.map((item, index) => {
            return (
              <div key={index} className={styles.item}>
                <div className={styles.iconWrapper}>
                  <DotIcon id="dot" width="25px" height="25px" />
                </div>
                <h3 className={styles.name}>{item.service}</h3>
                <hr className={styles.underline} />

                <p className={styles.description}>{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

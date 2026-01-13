

 'use client';

import React from 'react';
import { services, iconMap } from './valueData';
import styles from './ServiceList.module.scss';

export const ServicesList: React.FC = () => {
  return (
    <div className={styles.WrapperService}>
      <section id="services" className={styles.services}>
        <div className={styles.leftContent}>
          <h2 className={styles.title}>
            What <i>Services I</i> Provide
          </h2>
          <p className={styles.subtitle}>
            Develop digital interfaces with a focus on quality, adaptability,
            and stability. I have experience in both frontend and backend,
            working with modern frameworks. I confidently implement
            functionality, optimize code, and maintain clear structure.
          </p>
        </div>

        {/* Права частина: Картки */}
        <div className={styles.list}>
          {services.map((item, index) => {
            const Icon = iconMap[item.iconId];
            return (
              <div key={index} className={styles.item}>
                <div className={styles.iconWrapper}>
                  {Icon ? (
                    <Icon id={item.iconId} width="25px" height="25px" />
                  ) : (
                    <div className="placeholder-icon" />
                  )}
                </div>
                <h3 className={styles.name}>{item.service}</h3>
                <p className={styles.description}>{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
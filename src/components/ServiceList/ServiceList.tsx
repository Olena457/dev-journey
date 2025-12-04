'use client';

import React from 'react';
import { services } from './valueData';
import { IconComponent } from '../ui/IconComponent';
import styles from './ServiceList.module.scss';

export const ServicesList: React.FC = () => {
    return (
      <div  className={styles.WrapperService} >
    <section id="services" className={styles.services}>
      <h2 className={styles.title}>Services</h2>
      <ul className={styles.list}>
        {services.map((item, index) => (
          <li key={index} className={styles.item}>
            <div className={styles.iconWrapper}>
              <IconComponent
                id={item.iconId}
                width="24"
                height="24"
                className={styles.icon}
              />
            </div>
            <h4 className={styles.name}>{item.service}</h4>
            <p className={styles.description}>{item.description}</p>
          </li>
        ))}
      </ul>
            </section>
            </div>
  );
};

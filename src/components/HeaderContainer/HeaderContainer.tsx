'use client';

import React, { useState } from 'react';
import HeaderMenu from '@/src/components/HeaderMenu/HeaderMenu';
import styles from './HeaderContainer.module.scss';
import { IconComponent } from '../ui/IconComponent';
import clsx from 'clsx';
const HeaderComponent: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.header}>
      <div className="mylogo">
        <IconComponent id="logo" width={32} height={32} className="logoIcon" />
      </div>
      <div className={styles.wrapper}>
        <HeaderMenu isOpen={isMenuOpen} onClick={handleMenuClick} />
        {/* <button className={styles.burger} onClick={handleMenuClick}> */}
        <button
          className={clsx(styles.burger, { [styles.hidden]: isMenuOpen })}
          onClick={handleMenuClick}
        >
          <IconComponent
            id="burger"
            width={30}
            height={30}
            className="imageBurger"
          />
        </button>
      </div>
    </div>
  );
};

export default HeaderComponent;

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
      <HeaderMenu isOpen={isMenuOpen} onClick={handleMenuClick} />
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
      <div className={clsx(styles.mylogo, { [styles.hidden]: isMenuOpen })}>
        <div className="mylogo">
        <IconComponent id="logo" width={32} height={32} className="logoIcon" />
      </div>
    </div>
     </div>
  );
};

export default HeaderComponent;

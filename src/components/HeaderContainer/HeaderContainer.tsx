'use client';

import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './HeaderContainer.module.scss';
import { IconComponent } from '../ui/IconComponent';
import MenuBurger from '@/src/components/MenuBurger/MenuBurger';

const HeaderComponent: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.header}>
      <MenuBurger isOpen={isMenuOpen} onClick={handleMenuClick} />
      <button
        className={clsx(styles.burger, { [styles.hidden]: isMenuOpen })}
        onClick={handleMenuClick}
      >
        <IconComponent
          id="burger"
          width="30"
          height="30"
          className="imageBurger"
        />
      </button>
      <div className={clsx(styles.mylogo, { [styles.hidden]: isMenuOpen })}>
        <div className="mylogo">
          <IconComponent
            id="logo"
            // width="30"
            // height="30"
            className="logoIcon"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;

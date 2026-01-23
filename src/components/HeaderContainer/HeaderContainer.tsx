'use client';

import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './HeaderContainer.module.scss';
import LogoIcon from '@/public/icons/LogoIcon';
import MenuBurger from '@/src/components/MenuBurger/MenuBurger';
import BurgerIcon from '@/public/icons/BurgerIcon';

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
        <BurgerIcon
          id="burger"
          width="30"
          height="30"
          className="imageBurger"
        />
      </button>

      <div className={clsx(styles.mylogo, { [styles.hidden]: isMenuOpen })}>
        <LogoIcon id="logo" className={styles.logoIcon} />
        <div className={styles.logoText}>Altiora</div>

      </div>
    </div>
  );
};

export default HeaderComponent;

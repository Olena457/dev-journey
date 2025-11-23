
 "use client"
import React, { useState } from 'react';
import Image from 'next/image';
// my logo
import HeaderMenu from '@/src/components/HeaderMenu/HeaderMenu';
import burgerIcon from '../../assets/icons/burgerIcon.svg';
import styles from './HeaderContainer.module.scss';

const HeaderComponent: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <HeaderMenu isOpen={isMenuOpen} onClick={handleMenuClick} />
          <button className={styles.burger} onClick={handleMenuClick}>
            <Image
              src={burgerIcon} alt="burger" className={styles.imageBurger}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;

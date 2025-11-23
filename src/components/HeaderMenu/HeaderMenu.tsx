
'use client';
import { useEffect } from 'react';
import Image from 'next/image';

import clsx from 'clsx';
import { headerItems } from '../HeaderMenu/headerItems';
import crossIcon from '@/src/assets/icons/crossIcon.svg';
import styles from './HeaderMenu.module.scss';

interface NavItemProps {
  isOpen: boolean;
  onClick: () => void;
}

const HeaderMenu: React.FC<NavItemProps> = ({ isOpen, onClick }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  const showItemsMenu = headerItems.map(item => (
    <li key={item.id}>
      <a href={`#${item.link}`} onClick={onClick} className={styles.linkBurger}>
        {item.item}
      </a>
    </li>
  ));

  return (
    <nav className={clsx(styles.burger, { [styles.none]: !isOpen })}>
      <Image
        className={styles.close}
        src={crossIcon}
        onClick={onClick}
        alt="close menu"
      />
      <ul className={styles.menuList}>{showItemsMenu}</ul>
    </nav>
  );
};

export default HeaderMenu;

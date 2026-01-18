'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { optionsItems } from '../MenuBurger/options';
import CrossIcon from '@/public/icons/CrossIcon';
import styles from './MenuBurger.module.scss';

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

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const showItemsMenu = optionsItems.map((item, index) => (
    <li key={item.id}>
      <a
        href={`#${item.link}`}
        onClick={() => {
          setActiveIndex(index);
          onClick();
        }}
        className={clsx(
          styles.linkBurger,
          activeIndex === index && styles.active
        )}
      >
        {item.item}
      </a>
    </li>
  ));
  return (
    <nav className={clsx(styles.navMenu, { [styles['is-open']]: isOpen })}>
      <div className={styles.wrapperIcon}>
        <CrossIcon
          id="cross"
          width="30"
          height="30"
          onClick={onClick}
          className={styles.close}
        />
      </div>
      <ul className={styles.menuList}>{showItemsMenu}</ul>
    </nav>
  );
};

export default HeaderMenu;

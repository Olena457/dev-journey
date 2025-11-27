
'use client';
import { useEffect } from 'react';

import clsx from 'clsx';
import { headerItems } from '../HeaderMenu/headerItems';
import styles from './HeaderMenu.module.scss';
import { IconComponent } from '../ui/IconComponent';

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
    <ul key={item.id}>
      <a href={`#${item.link}`} onClick={onClick} className={styles.linkBurger}>
        {item.item}
      </a>
    </ul>
  ));

  return (
   
    <nav className={clsx(styles.navMenu, { [styles['is-open']]: isOpen })}>
      <div className={styles.wrapperIcon}>
        <IconComponent
          id="cross"
          width={30}
          height={30}
          onClick={onClick} 
          className={styles.close}
        />
      </div>
      <ul className={styles.menuList}>{showItemsMenu}</ul>
    </nav>
  );
};

export default HeaderMenu;
import styles from './HeaderItem.module.scss';
import { NavItemProps } from '@/src/types/types';

export const NavItem: React.FC<NavItemProps> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.dot}></span>
      {children}
    </div>
  );
};

import Link from 'next/link';
import styles from './TeamCard.module.scss';
import { TeamCardProps } from '@/src/types/types';


const TeamCard = ({
  title,
  description,
  role,
  imageMobile,
  imageDesktop,
  href,
}: TeamCardProps) => {
  return (
    <div className={styles.flipCard}>
      <div className={styles.flipInner}>
        {/* front */}

        <div className={`${styles.cardFront} ${styles.front}`}>
          <div
            className={`${styles.bg} ${styles.mobile}`}
            style={{ backgroundImage: `url(${imageMobile})` }}
          />

          <div
            className={`${styles.bg} ${styles.desktop}`}
            style={{ backgroundImage: `url(${imageDesktop})` }}
          />
          <div className={styles.overlay}></div>
          <div className={styles.title}>
            <Link href={href}>{title}</Link>
          </div>
        </div>
        {/* {back} */}
        <div className={`${styles.cardFront} ${styles.back}`}>
          <div
            className={`${styles.bg} ${styles.mobile}`}
            style={{ backgroundImage: `url(${imageMobile})` }}
          />

          <div
            className={`${styles.bg} ${styles.desktop}`}
            style={{ backgroundImage: `url(${imageDesktop})` }}
          />
          <div className={styles.overlay}></div>
          <div className={styles.title}>
            <Link href={href}>{title}</Link>
          </div>
          <div className={styles.role}>{role}</div>

          <div className={styles.description}>{description}</div>
        </div>
      </div>
    </div>
  );
};
export default TeamCard;
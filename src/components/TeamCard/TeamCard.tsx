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
    <div id="team" className={styles.flipCard}>
      <div className={styles.flipInner}>
        {/* front */}

        <div className={`${styles.cardFront} ${styles.front}`}>
          <div
            className={`${styles.background} ${styles.mobile}`}
            style={{ backgroundImage: `url(${imageMobile})` }}
          />

          <div
            className={`${styles.background} ${styles.desktop}`}
            style={{ backgroundImage: `url(${imageDesktop})` }}
          />
          <div className={styles.overlay}></div>
          <div className={styles.title}>
            <Link
              className={styles.link}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {title}
            </Link>
          </div>
        </div>
        {/* {back} */}
        <div className={`${styles.cardFront} ${styles.back}`}>
          <div
            className={`${styles.background} ${styles.mobile}`}
            style={{ backgroundImage: `url(${imageMobile})` }}
          />

          <div
            className={`${styles.background} ${styles.desktop}`}
            style={{ backgroundImage: `url(${imageDesktop})` }}
          />
          <div className={styles.overlay}></div>
          <div className={styles.wrapperRole}>
            <div className={styles.role}>{role}</div>
          </div>
          <div className={styles.title}>
            <Link
              className={styles.link}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {title}
            </Link>
          </div>
          <div className={styles.wrapperDescription}>
            <div className={styles.description}>{description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TeamCard;

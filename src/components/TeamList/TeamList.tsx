import styles from './TeamList.module.scss';
import TeamCard from '../TeamCard/TeamCard';
import { projectsData } from '../TeamCard/teamsCardData';
import { TeamCardProps } from '@/src/types/types';

const projects: TeamCardProps[] = projectsData;

const TeamList = () => {
  return (
    <div className={styles.wrapTeam}>
      <section className={styles.wrapper}>
        <div className={styles.category}>
          <div className={styles.headerList}>
            <h2 className={styles.title}>
             Team
              <span className={styles.accent}> Projects</span>
            </h2>
          </div>
        </div>
        <div className={styles.cardsWrapper}>
          {projects.map(item => (
            <TeamCard key={item.id} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
};
export default TeamList;

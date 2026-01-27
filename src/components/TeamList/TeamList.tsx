import styles from './TeamList.module.scss';
import { projectsData } from '../TeamCard/teamsCardData';
import { TeamCardProps } from '@/src/types/types';
import TeamCard from '../TeamCard/TeamCard';

const projects: TeamCardProps[] = projectsData;

const TeamList = () => {
  return (
    <div className={styles.wrapTeam}>
      <h2 className={styles.title}>
        Team
        <span className={styles.accent}> Projects</span>
      </h2>

      <section  className={styles.contentSection}>
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

import styles from './TeamList.module.scss';
import TeamCard from '../TeamCard/TeamCard';
import teamData from '@/src/components/TeamCard/teamData.json';
import { TeamCardProps } from '@/src/types/types';

const projects: TeamCardProps[] = teamData;

const TeamList = () => {
  return (
    <section className={styles.container}>
      <div className={styles.category}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Experience working in a team projects
          </h2>
        </div>
      </div>
      <div className={styles.cardsWrapper}>
        {projects.map(item => (
          <TeamCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};
export default TeamList;

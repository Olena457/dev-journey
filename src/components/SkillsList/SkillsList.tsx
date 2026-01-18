import clsx from 'clsx';
import styles from './SkillsList.module.scss';

interface SkillsListProps {
  list: string;
  portfolio?: boolean;
}

const SkillsList = ({ list, portfolio }: SkillsListProps) => {
  const skillsArray = list
    .split(',')
    .map(skill => skill.trim())
    .filter(skill => skill.length > 0);

  const skillClassName = clsx(styles.item, portfolio && styles.portfolio);

  return (
    <ul className={styles.list}>
      {skillsArray.map((skill, i) => (
        <li className={skillClassName} key={i}>
          {skill}
        </li>
      ))}
    </ul>
  );
};

export default SkillsList;

import styles from './TechnologyStack.module.scss';
import { technologiesData } from './technologiesData';
import { TechnologyItem } from '@/src/types/types';
import {IconComponent} from '@/src/components/ui/IconComponent'


const TechnologyStack = () => {
  const duplicatedTechnologies: TechnologyItem[] = [
   
    ...technologiesData,
    ...technologiesData,
  ];

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.gradient} ${styles.gradientLeft}`}></div>
      <div className={`${styles.gradient} ${styles.gradientRight}`}></div>
      <div className={styles.scroller}>
        {duplicatedTechnologies.map((tech, index) => (
          <div key={`${tech.id}-${index}`} className={styles.techItem}>
            <IconComponent
              id={tech.iconId}
              width="32"
              height="32"
              className={styles.icon}
            />
            <span className={styles.techName}>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologyStack;

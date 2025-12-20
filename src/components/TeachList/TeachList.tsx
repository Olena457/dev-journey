import styles from './TeachList.module.scss';
 import { IconProps } from '@/src/types/types';

// Імпортуємо всі іконки напряму
import HtmlIcon from '@/public/icons/HtmlIcon';
import CssIcon from '@/public/icons/CssIcon';
import StyleIcon from '@/public/icons/StyleIcon';
import ReactIcon from '@/public/icons/ReactIcon';
import ReduxIcon from '@/public/icons/ReduxIcon';
import JsIcon from '@/public/icons/JsIcon';
import TypeScriptIcon from '@/public/icons/TypeScriptIcon';
import NextIcon from '@/public/icons/NextIcon';
import VueIcon from '@/public/icons/VueIcon';
import NodeIcon from '@/public/icons/NodeIcon';
import TailwindIcon from '@/public/icons/TailwindIcon';
import MuiIcon from '@/public/icons/MuiIcon';
import FigmaIcon from '@/public/icons/FigmaIcon';
import FirebaseIcon from '@/public/icons/FirebaseIcon';
import GitIcon from '@/public/icons/GitIcon';
import MongoIcon from '@/public/icons/MongoIcon';
import MysqlIcon from '@/public/icons/MysqlIcon';
import OptimIcon from '@/public/icons/OptimIcon';

const technologiesData: { id: number; name: string; icon: React.FC<IconProps> }[] = [
  { id: 1, name: 'HTML5', icon: HtmlIcon },
  { id: 2, name: 'CSS3', icon: CssIcon },
  { id: 3, name: 'SCSS', icon: StyleIcon },
  { id: 4, name: 'React', icon: ReactIcon },
  { id: 5, name: 'Redux', icon: ReduxIcon },
  { id: 6, name: 'JavaScript', icon: JsIcon },
  { id: 7, name: 'TypeScript', icon: TypeScriptIcon },
  { id: 8, name: 'Next.js', icon: NextIcon },
  { id: 9, name: 'Vue.js', icon: VueIcon },
  { id: 10, name: 'Node.js', icon: NodeIcon },
  { id: 11, name: 'Tailwind CSS', icon: TailwindIcon },
  { id: 12, name: 'Material UI', icon: MuiIcon },
  { id: 13, name: 'Figma', icon: FigmaIcon },
  { id: 14, name: 'Firebase', icon: FirebaseIcon },
  { id: 15, name: 'Git', icon: GitIcon },
  { id: 16, name: 'MongoDB', icon: MongoIcon },
  { id: 17, name: 'MySQL', icon: MysqlIcon },
  { id: 18, name: 'Optim', icon: OptimIcon },
];

const TechnologyStack = () => {
  const duplicatedTechnologies = [...technologiesData, ...technologiesData];

  return (
    <div id="skills" className={styles.wrapper}>
      <div className={`${styles.gradient} ${styles.gradientLeft}`}></div>
      <div className={`${styles.gradient} ${styles.gradientRight}`}></div>
      <div className={styles.scroller}>
       {duplicatedTechnologies.map((tech, index) => {
  const Icon = tech.icon;
  return (
    <div key={`${tech.id}-${index}`} className={styles.techItem}>
      <Icon id={tech.name.toLowerCase()} width="32" height="32" className={styles.icon} />
      <span className={styles.techName}>{tech.name}</span>
    </div>
  );
})}

      </div>
    </div>
  );
};

export default TechnologyStack;

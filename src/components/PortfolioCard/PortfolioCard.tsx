
import { PORTFOLIO_PROJECTS } from './propsItems';
import SkillsList from '../SkillsList/SkillsList';
import styles from './PortfolioCard.module.scss';
import LinkIcon from '@/public/icons/LinkIcon';
import GitIcon from '@/public/icons/GitIcon';
import ExpandDescription from '../ExpandDescription/EpandDescription';
// import { useTranslation } from 'react-i18next';

const PortfolioCard= () => {
//   const { t } = useTranslation();

  return (
    <>
      <ul id="projects" className={styles.list}>
        <div className={styles.wraper}>
          <h2 className={styles.mainTitle}>My projects</h2>
        </div>
        {PORTFOLIO_PROJECTS.map(project => (
          <li key={project.id} className={styles.item}>
            <div className={styles.itemWrapper}>
              <div className={styles.imageWrapper}>
                <img
                  className={styles.image}
                  alt={project.title}
                  src={project.imageProgect}
                />
              </div>
              <div className={styles.contentWrapper}>
                <h2 className={styles.title}>{project.title}</h2>
                <SkillsList portfolio={true} list={project.skills} />
                <p className={styles.role}>{project.role}</p>
                <ExpandDescription text={project.description} />
              </div>
            </div>
            <div className={styles.linksWrapper}>
              <a
                className={styles.link}
                href={project.liveHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkIcon id="link" className={styles.icon} />
                <p>Live</p>
              </a>
              <a
                className={styles.link}
                href={project.repoHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitIcon id="git" className={styles.icon} />
                <p>GitHub</p>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PortfolioCard;


import { PORTFOLIO_PROJECTS } from './propsItems';

import SkillsList from '../SkillsList/SkillsList';
import styles from './PortfolioCard.module.scss';
import { IconComponent } from '../ui/IconComponent';
// import { useTranslation } from 'react-i18next';

const PortfolioCard= () => {
//   const { t } = useTranslation();

  return (
    <ul className={styles.list}>
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
              <p className={styles.description}>{project.description}</p>
            </div>
          </div>
          <div className={styles.linksWrapper}>
            {/* <p className={styles.checkText}>{t('portfolio.check')}</p> */}
            {/* <p className={styles.checkText}>{'portfolio.check'}</p> */}
            <a
              className={styles.link}
              href={project.liveHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconComponent id="link" className={styles.icon} />
              <p>Live</p>
            </a>
            <a
              className={styles.link}
              href={project.repoHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconComponent id="git" className={styles.icon} />
              <p>GitHub</p>
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PortfolioCard;

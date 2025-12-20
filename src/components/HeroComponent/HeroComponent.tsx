// 'use client';

import styles from './HeroComponent.module.scss';
import LetterAnimation from '../LetteAnimation/LetterAnimation';
import  GitIcon  from '@/public/icons/GitIcon';
import TelegramIcon from '@/public/icons/TelegramIcon';
import EmailIcon from '@/public/icons/EmailIcon';
import LinkedinIcon from '@/public/icons/LinkedinIcon';

const socialLinks = [
  {
    id: 1,
    href: 'https://github.com/Olena457', 
    icon: <GitIcon />,
  },
  {
    id: 2,
    href: 'https://t.me/lenOK890',
    icon: <TelegramIcon />,
  },
  {
    id: 3,
    href: 'mailto:olenademianenko42@gmail.com',
    icon: <EmailIcon />,
  },
  {
    id: 4,
    href: 'https://www.linkedin.com/in/olena-demianenko/', // уточніть повне посилання
    icon: <LinkedinIcon />,
  },
];

export const HeroComponet: React.FC = () => {
  return (
    <div id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textBlock}>
            <h1 className={styles.title}>Frontend Developer</h1>
            <p className={styles.description}>
              Transforming ideas into interactive and seamless digital
              experiences through modern frontend development. Driven by
              curiosity, continuous learning, and effective development
              methodologies.
            </p>

            <div className={styles.socialWrapper}>
              {socialLinks.map(link => (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className={styles.animationBlock}>
            <div className={styles.codeContent}>
              <LetterAnimation />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

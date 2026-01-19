



import styles from './HomeComponent.module.scss';
import GitIcon from '@/public/icons/GitIcon';
import TelegramIcon from '@/public/icons/TelegramIcon';
import EmailIcon from '@/public/icons/EmailIcon';
import LinkedinIcon from '@/public/icons/LinkedinIcon';

interface SocialLink {
  id: number;
  href: string;
  icon: React.ReactNode;
}

const socialLinks: SocialLink[] = [
  { id: 1, href: 'https://github.com/Olena457', icon: <GitIcon id="git" /> },
  {
    id: 2,
    href: 'https://t.me/lenOK890',
    icon: <TelegramIcon id="telegram" />,
  },
  {
    id: 4,
    href: 'https://www.linkedin.com/in/olena-demianenko0808-383991312/',
    icon: <LinkedinIcon id="linkedin" />,
  },
  {
    id: 3,
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=olenademianenko42@gmail.com',
    icon: <EmailIcon id="email" />,
  },
];

export const HomeComponent: React.FC = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textBlock}>
            <div className={styles.topContent}>
              <h2 className={styles.title}>
                <span className={styles.accent}>Frontend</span>Developer
              </h2>
              <p className={styles.description}>
                Transforming ideas into interactive and seamless digital
                experiences through modern frontend development.
              </p>
            </div>

            <div className={styles.socialWrapper}>
              {socialLinks.map(link => {
                const isEmail = link.href.includes('mail.google.com');
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    target={isEmail ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    {link.icon}
                  </a>
                );
              })}
            </div>
          </div>

          <div className={styles.imageBox}></div>
        </div>
      </div>
    </section>
  );
};

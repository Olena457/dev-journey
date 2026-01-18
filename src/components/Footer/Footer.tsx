
import styles from './Footer.module.scss';
import TelegramIcon from '@/public/icons/TelegramIcon';
import EmailIcon from '@/public/icons/EmailIcon';
import LinkedinIcon from '@/public/icons/LinkedinIcon';
import GitIcon from '@/public/icons/GitIcon';

export const Footer = () => {
  const socialLinks = [
    { id: 1, href: 'https://github.com/Olena457', icon: <GitIcon id="git" /> },
    {
      id: 4,
      href: 'https://www.linkedin.com/in/olena-demianenko0808-383991312/',
      icon: <LinkedinIcon id="linkedin" />,
    },
    {
      id: 2,
      href: 'https://t.me/lenOK890',
      icon: <TelegramIcon id="telegram" />,
    },
    {
      id: 3,
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=olenademianenko42@gmail.com',
      icon: <EmailIcon id="email" />,
    },
  ];

  return (
    <footer id="contacts" className={styles.footer}>
      <div className={styles.footerContainer}>
        <nav className={styles.footerNav}>
          {[
            'home',
            'skills',
            'projects',
            'team',
            'certificates',
            'services',
            'gallery',
            'contacts',
          ].map(link => (
            <a key={link} href={`#${link}`} className={styles.footerLink}>
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}
        </nav>

        <div className={styles.socialWrapper}>
          <div className={styles.socialList}>
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
      </div>
    </footer>
  );
};

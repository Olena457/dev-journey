// // 'use client';

// import styles from './Footer.module.scss';

// export const Footer = () => {
//   return (
//     <div className={styles.footer}>
//       <div className={styles.footerContainer}>
//         <nav className={styles.footerNav}>
//           <a href="#home" className={styles.footerLink}>
//             Home
//           </a>
//           <a href="#skills" className={styles.footerLink}>
//             Skills
//           </a>
//           <a href="#projects" className={styles.footerLink}>
//             Projects
//           </a>
//           <a href="#team" className={styles.footerLink}>
//             Team
//           </a>
//           <a href="#certificates" className={styles.footerLink}>
//             Certificates
//           </a>
//           <a href="#services" className={styles.footerLink}>
//             Services
//           </a>
//           <a href="#contacts" className={styles.footerLink}>
//             Contacts
//           </a>
//         </nav>

//         <h2 className={styles.footerQuote}>
//           “The only way to do great work is to love what you do.” - Steve Jobs
//         </h2>
//       </div>
//     </div>
//   );
// };
'use client';

import styles from './Footer.module.scss';
import TelegramIcon from '@/public/icons/TelegramIcon';
import EmailIcon from '@/public/icons/EmailIcon';
import LinkedinIcon from '@/public/icons/LinkedinIcon';
import GitIcon from '@/public/icons/GitIcon';

// import TableIcon from '@/public/icons/TableIcon';

export const Footer = () => {
  interface SocialLink {
    id: number;
    href: string;
    icon: React.ReactNode;
  }

  const socialLinks: SocialLink[] = [
    {
      id: 1,
      href: 'https://github.com/Olena457',
      icon: <GitIcon id="git" />,
    },

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
            'contacts',
          ].map(link => (
            <a key={link} href={`#${link}`} className={styles.footerLink}>
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}
        </nav>

        {/* <div className={styles.badgesContainer}>
          <a
            href="https://www.linkedin.com/in/olena-demianenko0808-383991312/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.staticBadge}
          > */}
        {/* <div className={styles.badgeHeader}>
              <div className={styles.linkedInIcon}>in</div>
              <span className={styles.brand}>LinkedIn</span>
            </div>
    
            <div className={styles.viewButton}>View Profile</div>
           <div className={styles.socialWrapper}>
              */}
        {/* </a> */}
        {socialLinks.map(link => {
          const isEmail = link.href.startsWith('mailto:');

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
    </footer>
  );
};

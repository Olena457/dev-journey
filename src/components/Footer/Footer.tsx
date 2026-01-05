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

import React from 'react';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Навігація */}
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

        <div className={styles.badgesContainer}>
          {/* Статичний LinkedIn Badge - надійний на 100% */}
          <a
            href="https://www.linkedin.com/in/olena-demianenko0808-383991312/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.staticBadge}
          >
            <div className={styles.badgeHeader}>
              <div className={styles.linkedInIcon}>in</div>
              <span className={styles.brand}>LinkedIn</span>
            </div>
            <div className={styles.profileInfo}>
              <span className={styles.name}>Olena Demianenko</span>
              <span className={styles.role}>
                Frontend Developer | Web Design
              </span>
            </div>
            <div className={styles.viewButton}>View Profile</div>
          </a>

          {/* Цитата з серцем */}
          <div className={styles.quoteBadge}>
            <p className={styles.footerQuote}>
              “The only way to do great work is to love
              <span className={styles.pulsingHeart}> ❤ </span>
              what you do.”
            </p>
            <span className={styles.author}>- Steve Jobs</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
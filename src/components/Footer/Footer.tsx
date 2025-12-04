'use client';

import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <nav className={styles.footerNav}>
          <a href="#home" className={styles.footerLink}>
            Home
          </a>
          <a href="#skills" className={styles.footerLink}>
            Skills
          </a>
          <a href="#projects" className={styles.footerLink}>
            Projects
          </a>
          <a href="#team" className={styles.footerLink}>
            Team
          </a>
          <a href="#certificates" className={styles.footerLink}>
            Certificates
          </a>
          <a href="#services" className={styles.footerLink}>
            Services
          </a>
          <a href="#contacts" className={styles.footerLink}>
            Contacts
          </a>
        </nav>

        <h2 className={styles.footerQuote}>
          “The only way to do great work is to love what you do.” - Steve Jobs
        </h2>
      </div>
    </div>
  );
};

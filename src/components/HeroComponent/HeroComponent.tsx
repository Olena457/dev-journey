import LetterAnimation from '../LetteAnimation/LetterAnimation';
import styles from './HeroComponent.module.scss';
import GitIcon from '@/public/icons/GitIcon';
import TelegramIcon from '@/public/icons/TelegramIcon';
import EmailIcon from '@/public/icons/EmailIcon';
import LinkedinIcon from '@/public/icons/LinkedinIcon';

// interface SocialLink {
//   id: number;
//   href: string;
//   icon: React.ReactNode;
// }

// const socialLinks: SocialLink[] = [
//   {
//     id: 1,
//     href: 'https://github.com/Olena457',
//     icon: <GitIcon id="git" />,
//   },
//   {
//     id: 2,
//     href: 'https://t.me/lenOK890',
//     icon: <TelegramIcon id="telegram" />,
//   },

//   {
//     id: 4,
//     href: 'https://www.linkedin.com/in/olena-demianenko0808-383991312/',
//     icon: <LinkedinIcon id="linkedin" />,
//   },
//   {
//     id: 3,
//     href: 'https://mail.google.com/mail/?view=cm&fs=1&to=olenademianenko42@gmail.com',
//     icon: <EmailIcon id="email" />,
//   },
// ];

export const HeroComponent: React.FC = () => {
  return (
    <div id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textBlock}>
            <h2 className={styles.title}>
              <span className={styles.accent}> Frontend</span>Developer
            </h2>
            <p className={styles.description}>
              Transforming ideas into interactive and seamless digital
              experiences through modern frontend development.
            </p>
            <div className={styles.quoteBadge}>
              {/* Цитата 1 */}
              <div className={styles.quoteItem}>
                <p className={styles.description}>
                  “The only way to do great work is to love
                  <span className={styles.pulsingHeart}> ❤ </span>
                  what you do.”
                </p>
                <span className={styles.author}>- Steve Jobs</span>
              </div>

              <div className={styles.divider} />

              {/* Цитата 2 */}
              <div className={styles.quoteItem}>
                <p className={styles.footerQuote}>
                  “Your most unhappy customers are your greatest source of
                  <span className={styles.pulsingHeart}> 💡 </span>
                  learning.”
                </p>
                <span className={styles.author}>- Bill Gates</span>
              </div>

              <div className={styles.divider} />

              {/* Цитата 3 */}
              <div className={styles.quoteItem}>
                <p className={styles.footerQuote}>
                  “If you stop learning,
                  <span className={styles.pulsingHeart}> 📚 </span>
                  you stop being useful.”
                </p>
                <span className={styles.author}>- Eric Schmidt</span>
              </div>
            </div>
            {/* <div className={styles.socialWrapper}>
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
            </div> */}
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
export default HeroComponent;

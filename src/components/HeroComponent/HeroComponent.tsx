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
    <div className={styles.hero}>
      <h2 className={styles.titleMain}>
        Success<span className={styles.accent}>Quotes</span>
      </h2>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textBlock}>
            <div className={styles.quoteBadge}>
              <div className={styles.descriptionWrap}>
                <p className={styles.description}>
                  “Succcess is about the courage to undertake a journey that you believe in.”
                </p>
                <span className={styles.author}>- Steve Jobs-</span>
              
              {/* <hr className={styles.divider} /> */}
                <p className={styles.description}>
                  “If you stop learning, you stop being useful.”
                </p>
                <span className={styles.author}>- Eric Schmidt -</span>
              </div>
              {/* <hr className={styles.divider} /> */}

              <div className={styles.descriptionWrap}>
                <p className={styles.description}>
                  “The only way to do great work is to love what you do.”
                </p>
                <span className={styles.author}>- Steve Jobs -</span>
              </div>

              {/* <hr className={styles.divider} /> */}

              <div className={styles.descriptionWrap}>
                <p className={styles.description}>
                  “Your most unhappy customers are your greatest source of
                  learning.”
                </p>
                <span className={styles.author}>- Bill Gates-</span>
              </div>

              {/* <hr className={styles.divider} /> */}
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
export default HeroComponent;

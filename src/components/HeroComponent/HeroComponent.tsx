import LetterAnimation from '../LetteAnimation/LetterAnimation';
import styles from './HeroComponent.module.scss';


export const HeroComponent: React.FC = () => {
  return (
    <div className={styles.hero}>
      <h2 className={styles.titleMain}>
        Success<span className={styles.accent}>Quotes</span>
      </h2>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textBlock}>
<div className={styles.decor}></div>
            <div className={styles.quoteBadge}>
              <div className={styles.descriptionWrap}>
               
                <p className={styles.description}>
                  “Succcess is about the courage to undertake a journey that you
                  believe in.”
                </p>
                <span className={styles.author}>- Steve Jobs-</span>

                <p className={styles.description}>
                  “If you stop learning, you stop being useful.”
                </p>
                <span className={styles.author}>- Eric Schmidt -</span>
              </div>

              <div className={styles.descriptionWrap}>
                <p className={styles.description}>
                  “The only way to do great work is to love what you do.”
                </p>
                <span className={styles.author}>- Steve Jobs -</span>
              </div>

              <div className={styles.descriptionWrap}>
                <p className={styles.description}>
                  “Your most unhappy customers are your greatest source of
                  learning.”
                </p>
                <span className={styles.author}>- Bill Gates-</span>
              </div>

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

import { MARQUEE_IMAGES } from '@/src/components/PhotoMarquee/teamMarqImages'; 
import styles from './PhotoMarquee.module.scss';


const PhotoMarquee = () => {
  const renderRow = (images: typeof MARQUEE_IMAGES, speedClass: string) => (
    <div   className={`${styles.marqueeInner} ${speedClass}`}>
      {[...images, ...images, ...images].map((item, index) => (
        <div key={`${item.id}-${index}`} className={styles.photoCard}>
          <img src={item.imageProgect} alt="Project" className={styles.image} />
        </div>
      ))}
    </div>
  );

  return (
    <div id="gallery" className={styles.wrapTeam}>
      <h2 className={styles.title}>
        <span className={styles.accent}> Photo</span>Gallery
      </h2>
      <div className={styles.wrapTeam}>
        <div className={styles.marqueeContainer}>
          {renderRow(MARQUEE_IMAGES.slice(0, 6), styles.fast)}
          {renderRow(MARQUEE_IMAGES.slice(3, 9), styles.medium)}
          {renderRow(MARQUEE_IMAGES.slice(6, 22), styles.slow)}
          {renderRow([...MARQUEE_IMAGES].reverse(), styles.slow)}
        </div>
      </div>
    </div>
  );
};

export default PhotoMarquee;
import Image from 'next/image';
import { diplomas } from './diplomasData';
import { Diploma } from '@/src/types/types';
import styles from './DiplomaGallery.module.scss';

export const DiplomaGallery: React.FC = () => {
  return (
    <div id="sertificates" className={styles.section}>
      <section id="services" className={styles.sertificates}>
        <h2 className={styles.title}>Sertificates</h2>

        <div className={styles.container}>
          {diplomas.map((item: Diploma) => (
            <div key={item.id} className={styles.hexagon}>
              <div className={styles.hexInner}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={350}
                  height={350}
                  className={styles.img}
                />
                <div className={styles.borderLine}></div>
              </div>
              <span className={styles.label}>{item.title}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

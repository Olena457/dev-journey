

'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './DiplomaGallery.module.scss';
import { diplomas } from './diplomasData';
import { Diploma } from '@/src/types/types';

export const DiplomaGallery: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const closeModal = () => setSelectedImg(null);

  const columns = [[], [], [], []] as Diploma[][];
  diplomas.forEach((item, index) => {
    columns[index % 4].push(item);
  });

  return (
    <div id="certificates" className={styles.section}>
      <h2 className={styles.title}>Certificates</h2>

      <div className={styles.gridContainer}>
        {columns.map((column, colIndex) => (
          <div key={colIndex} className={styles.column}>
            {column.map(item => (
              <div
                key={item.id}
                className={styles.gridItem}
                onClick={() => setSelectedImg(item.image)}
              >
                <div className={styles.imgWrapper}>
                  <Image
                    src={item.image}
                    alt={item.title || 'Certificate'}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className={styles.img}
                  />
                </div>
                <div className={styles.overlay}>
                  <span className={styles.label}>{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {selectedImg && (
        <div className={styles.lightbox} onClick={closeModal}>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={closeModal}
          >
            &times;
          </button>
          <div
            className={styles.lightboxContent}
            onClick={e => e.stopPropagation()}
          >
            <Image
              src={selectedImg}
              alt="Zoomed certificate"
              width={1200}
              height={800}
              className={styles.fullImg}
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
};
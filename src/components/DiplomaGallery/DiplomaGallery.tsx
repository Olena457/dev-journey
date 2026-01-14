

'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './DiplomaGallery.module.scss';
import { diplomas } from './diplomasData';
import { Diploma } from '@/src/types/types';

export const DiplomaGallery: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const closeModal = () => setSelectedImg(null);
  const openDialog = () => {
    const dialog = document.getElementById('info-dialog') as HTMLDialogElement;
    dialog?.showModal();
    setIsDialogOpen(true);
  };
  const closeDialog = () => {
    const dialog = document.getElementById('info-dialog') as HTMLDialogElement;
    dialog?.close();
    setIsDialogOpen(false);
  };
  const columns = [[], [], [], []] as Diploma[][];
  diplomas.forEach((item, index) => {
    columns[index % 4].push(item);
  });

  return (
    <div id="sertificates" className={styles.section}>
      <h2 className={styles.title}>
        Skills & <span className={styles.accent}>Certificates</span>
        <span
          className={styles.infoIcon}
          onClick={openDialog}
          role="button"
          title="Info"
        >
          &#8505;
        </span>
      </h2>
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
      <div className="dialogBox">
        <dialog id="info-dialog" closedby="any" className={styles.dialog}>
          <h3 className={styles.hedline}>Information</h3>
          <hr className={styles.line} />
          <p className={styles.text}>
            “ Zoom function is available - click on any certificate to open it
            in an enlarged view.”
          </p>
          <button onClick={closeDialog} className={styles.closeBtn}>
            &times;
          </button>
        </dialog>
      </div>
    </div>
  );
};


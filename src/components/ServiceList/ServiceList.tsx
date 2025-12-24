// 'use client';

// import React from 'react';
// import { services, iconMap } from './valueData';
// import styles from './ServiceList.module.scss';

// export const ServicesList: React.FC = () => {
//   return (
//     <div className={styles.WrapperService}>
//       <section id="services" className={styles.services}>
//         <h2 className={styles.title}>Services</h2>
//         <ul className={styles.list}>
//           {services.map((item, index) => {
//             const Icon = iconMap[item.iconId];

//             return (
//               <li key={index} className={styles.item}>
//                 <div className={styles.iconWrapper}>
//                   {Icon ? (
//                     <Icon id={item.iconId} width="25px" height="25px" />
//                   ) : (
//                     <div className="placeholder-icon" />
//                   )}
//                 </div>
//                 <h4 className={styles.name}>{item.service}</h4>
//                 <p className={styles.description}>{item.description}</p>
//               </li>
//             );
//           })}
//         </ul>
//       </section>
//     </div>
//   );
// };

 'use client';

import React from 'react';
import { services, iconMap } from './valueData';
import styles from './ServiceList.module.scss';

export const ServicesList: React.FC = () => {
  return (
    <div className={styles.WrapperService}>
      <section id="services" className={styles.services}>
        {/* Ліва частина: Заголовок та текст */}
        <div className={styles.leftContent}>
          <h2 className={styles.title}>Services</h2>
          <p className={styles.subtitle}>
            Ми створюємо сучасні цифрові рішення, фокусуючись на якості та
            інноваціях.
          </p>
        </div>

        {/* Права частина: Картки */}
        <div className={styles.list}>
          {services.map((item, index) => {
            const Icon = iconMap[item.iconId];
            return (
              <div key={index} className={styles.item}>
                <div className={styles.iconWrapper}>
                  {Icon ? (
                    <Icon id={item.iconId} width="25px" height="25px" />
                  ) : (
                    <div className="placeholder-icon" />
                  )}
                </div>
                <h4 className={styles.name}>{item.service}</h4>
                <p className={styles.description}>{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
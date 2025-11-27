// import styles from './TechnologyStack.module.scss';
// import { technologiesData } from './technologiesData';
// import { TechnologyItem } from '@/src/types/types';


// const TechnologyStack = () => {
//   const duplicatedTechnologies: TechnologyItem[] = [
   
//     ...technologiesData,
//   ];

//   return (
//     <div className={styles.wrapper}>
//       <div className={styles.gradientLeft}></div>
//       <div className={styles.gradientRight}></div>

//       <div className={styles.scroller}>
//         {duplicatedTechnologies.map((tech, index) => (
//           <div key={`${tech.id}-${index}`} className={styles.techItem}>
//             <img
//               src={tech.src}
//               alt={tech.name}
//               className={styles.icon}
//               width="30"
//               height="30"
//               loading="lazy"
//             />
//             <span className={styles.techName}>{tech.name}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TechnologyStack;

// 'use client';
// import React from 'react';
// import styles from './CarouselCard.module.scss';

// interface ControlsProps {
//   isPaused: boolean;
//   onTogglePause: () => void;
//   velocity: number;
//   onVelocityChange: (value: number) => void;
// }

// export const ControllsButton: React.FC<ControlsProps> = ({
//   isPaused,
//   onTogglePause,
//   velocity,
//   onVelocityChange,
// }) => {
//   return (
//     <div className={styles.controls}>
//       <button className={styles.controlBtn} onClick={onTogglePause}>
//         {isPaused ? 'Play' : 'Pause'}
//       </button>

//       <div className={styles.speedControl}>
//         <span>Speed: {velocity}px/s</span>
//         <input
//           type="range"
//           min="0"
//           max="90"
//           step="10"
//           value={velocity}
//           onChange={e => onVelocityChange(Number(e.target.value))}
//         />
//       </div>
//     </div>
//   );
// };
'use client';
import React from 'react';
import styles from './CarouselCard.module.scss';

// імпортуй свої іконки
import PauseIcon from '@/public/icons/PauseIcon';
import TeamIcon from '@/public/icons/TeamIcon';

interface ControlsProps {
  isPaused: boolean;
  onTogglePause: () => void;
  velocity: number;
  onVelocityChange: (value: number) => void;
}

export const ControllsButton: React.FC<ControlsProps> = ({
  isPaused,
  onTogglePause,
  velocity,
  onVelocityChange,
}) => {
  return (
    <div className={styles.controls}>
      <button className={styles.controlBtn} onClick={onTogglePause}>
        {isPaused ? (
          <PauseIcon id='pause' width="24px" height="24px" />
        ) : (
          <TeamIcon id='team' width="24px" height="24px" />
        )}
      </button>

      <div className={styles.speedControl}>
        <span>Speed: {velocity}px/s</span>
        <input
          type="range"
          min="0"
          max="80"
          step="10"
          value={velocity}
          onChange={e => onVelocityChange(Number(e.target.value))}
        />
      </div>
    </div>
  );
};

// import * as React from 'react';
// import { IconProps } from '@/src/types/types';

// const LogoIcon: React.FC<IconProps> = ({
//   id = 'custom-icon',
//   width = '24px',
//   height = '24px',
//   className,
//   ...rest
// }) => {
//   return (
//     <svg
//       id={id}
//       width={width}
//       height={height}
//       className={className}
//       viewBox="0 0 108.89 94.31"
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       {...rest}
//     >
//       <path
//         d="M45.38,62.87l-9.07,15.72-9.08,15.72h18.15l9.07-15.72,9.07-15.72,9.08-15.72h18.14l-9.07-15.72h-18.15l-9.07,15.72-9.07,15.72Z"
//         fill="#00eb8f"
//         fillRule="evenodd"
//       />
//       <path
//         d="M81.67,62.87l-9.07,15.72-9.08,15.72h18.15s9.07-15.72,9.07-15.72h18.15l-9.07-15.72h-18.15Z"
//         fill="#00eb8f"
//         fillRule="evenodd"
//       />
//       <path
//         d="M18.15,78.58l9.07-15.72,9.08-15.72,9.07-15.72,9.07-15.72h18.15L63.52,0h-18.14L0,78.58l9.08,15.72,9.07-15.72Z"
//         fill="#00eb8f"
//         fillRule="evenodd"
//       />
//     </svg>
//   );
// };

// export default LogoIcon;
import * as React from 'react';
import { IconProps } from '@/src/types/types';

const LogoIcon: React.FC<IconProps> = ({
  id = 'custom-icon',
  width = '24px',
  height = '24px',
  className,
  ...rest
}) => {
  return (
    <svg
      id={id}
      width={width}
      height={height}
      className={className}
      viewBox="0 0 108.89 94.31"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#820f84" />
          <stop offset="100%" stopColor="#6de8f5" />
        </linearGradient>
      </defs>

      <path
        d="M45.38,62.87l-9.07,15.72-9.08,15.72h18.15l9.07-15.72,9.07-15.72,9.08-15.72h18.14l-9.07-15.72h-18.15l-9.07,15.72-9.07,15.72Z"
        fill="url(#gradient)"
        fillRule="evenodd"
      />
      <path
        d="M81.67,62.87l-9.07,15.72-9.08,15.72h18.15s9.07-15.72,9.07-15.72h18.15l-9.07-15.72h-18.15Z"
        fill="url(#gradient)"
        fillRule="evenodd"
      />
      <path
        d="M18.15,78.58l9.07-15.72,9.08-15.72,9.07-15.72,9.07-15.72h18.15L63.52,0h-18.14L0,78.58l9.08,15.72,9.07-15.72Z"
        fill="url(#gradient)"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default LogoIcon;

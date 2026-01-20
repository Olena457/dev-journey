// import * as React from 'react';
// import { IconProps } from '@/src/types/types';

// const CodeIcon: React.FC<IconProps> = ({
//   id = 'code',
//   width = '20px',
//   height = '20px',
//   className,
//   ...rest
// }) => {
//   return (
//     <svg
//       id={id}
//       width={width}
//       height={height}
//       className={className}
//       viewBox="0 0 22 14"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       {...rest}
//     >
//       <path
//         d="M15 13L21 7L15 1M7 1L1 7L7 13"
//         stroke="currentColor"
//         strokeWidth={2}
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// };

// export default CodeIcon;
import * as React from 'react';
import { IconProps } from '@/src/types/types';

const CodeIcon: React.FC<IconProps> = ({
  id = 'code',
  width = '32px',
  height = '32px',
  className,
  ...rest
}) => {
  return (
    <svg
      id={id}
      width={width}
      height={height}
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <defs>
        <linearGradient id="codeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#820f84" />
          <stop offset="100%" stopColor="#6de8f5" />
        </linearGradient>
      </defs>

      <path
        d="M15 13L21 7L15 1M7 1L1 7L7 13"
        stroke="url(#codeGradient)"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CodeIcon;

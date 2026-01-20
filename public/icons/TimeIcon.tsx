// import * as React from 'react';
// import { IconProps } from '@/src/types/types';

// const ClockIcon: React.FC<IconProps> = ({
//   id = 'clock',
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
//       viewBox="0 0 24 24"
//       fill="#d200da"
//       xmlns="http://www.w3.org/2000/svg"
//       {...rest}
//     >
//       <path
//         fillRule="evenodd"
//         clipRule="evenodd"
//         d="M12,2 C17.5228,2 22,6.4772 22,12 C22,17.5228 17.5228,22 12,22 
//            C6.4772,22 2,17.5228 2,12 C2,6.4772 6.4772,2 12,2 Z 
//            M12,4 C7.5817,4 4,7.5817 4,12 C4,16.4183 7.5817,20 12,20 
//            C16.4183,20 20,16.4183 20,12 C20,7.5817 16.4183,4 12,4 Z 
//            M12,6 C12.5128,6 12.9355,6.3860 12.9933,6.8834 L13,7 L13,11.5858 
//            L14.7071,13.2929 C15.0976,13.6834 15.0976,14.3166 14.7071,14.7071 
//            C14.3466,15.0676 13.7794,15.0953 13.3871,14.7903 L13.2929,14.7071 
//            L11.2929,12.7071 C11.1366,12.5508 11.0374,12.3481 11.0087,12.1314 
//            L11,12 L11,7 C11,6.4477 11.4477,6 12,6 Z"
//         fill="#d200da"
//       />
//     </svg>
//   );
// };

// export default ClockIcon;
import * as React from 'react';
import { IconProps } from '@/src/types/types';

const TimeIcon: React.FC<IconProps> = ({
  id = 'clock',
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
        <linearGradient id="clockGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#820f84" />
          <stop offset="100%" stopColor="#6de8f5" />
        </linearGradient>
      </defs>

      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="url(#clockGradient)"
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M12 7v5l3 3"
        stroke="url(#clockGradient)"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default TimeIcon;

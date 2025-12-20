import * as React from 'react';
import { IconProps } from '@/src/types/types';

const EmailIcon: React.FC<IconProps> = ({
  id = 'email',
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
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
      {...rest}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        <circle cx={32} cy={32} r={32} fill="#60abff" />
        <path
          d="M32,54c-12.1,0-22-9.9-22-22s9.9-22,22-22s22,9.9,22,22c0,4.5-1.4,8.9-3.9,12.6c-0.6,0.8-1.7,1.1-2.6,0.6 
             c-0.3-0.2-8.1-4.2-8.1-13.1v-8.8c0-1.1,0.9-2,2-2c1.1,0,2,0.9,2,2v8.8c0,4.3,2.6,7.1,4.4,8.5C49.2,38,50,35,50,32 
             c0-9.9-8.1-18-18-18s-18,8.1-18,18s8.1,18,18,18c2.9,0,5.7-0.7,8.2-2c1-0.5,2.2-0.1,2.7,0.9c0.5,1,0.1,2.2-0.9,2.7 
             C39,53.2,35.5,54,32,54z"
          fill="#FFFFFF"
        />
        <path
          d="M32,24.6c4.1,0,7.4,3.3,7.4,7.4s-3.3,7.4-7.4,7.4s-7.4-3.3-7.4-7.4S27.9,24.6,32,24.6 
             M32,20.6c-6.3,0-11.4,5.1-11.4,11.4S25.7,43.4,32,43.4S43.4,38.3,43.4,32S38.3,20.6,32,20.6z"
          fill="#FFFFFF"
        />
      </g>
    </svg>
  );
};

export default EmailIcon;

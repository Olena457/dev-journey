import * as React from 'react';
import { IconProps } from '@/src/types/types';

const TeamIcon: React.FC<IconProps> = ({
  id = 'gradient',
  width="100%",
  height="100%",
  viewBox="0 0 64 64",
  preserveAspectRatio="xMidYMid slice" ,
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
      {...rest}
    >
      <defs>
        {/* Градієнт з ефектом розчинення */}
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(130, 15, 132, 0)" />
          <stop offset="50%" stopColor="rgba(72, 24, 63, 0.4)" />
          <stop offset="100%" stopColor="#6de8f5" />
        </linearGradient>
      </defs>

      {/* Тут можна прописати будь-яку форму іконки */}
      <circle
        cx="32"
        cy="32"
        r="28"
        fill="none"
        stroke="url(#gradient)"
        strokeWidth="4"
      />
      <path
        d="M26 20 L44 32 L26 44 Z"
        fill="url(#gradient)"
        stroke="url(#gradient)"
        strokeWidth="2"
      />
    </svg>
  );
};

export default TeamIcon;

import * as React from 'react';
import { IconProps } from '@/src/types/types';

const CircleIcon: React.FC<IconProps> = ({
  id = 'overlapping-circles',
  width = '64px',
  height = '64px',
  className,
  ...rest
}) => {
  return (
    <svg
      id={id}
      width={width}
      height={height}
      className={className}
      viewBox="0 0 140 140"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#820f84" />
          <stop offset="100%" stopColor="#6de8f5" />
        </linearGradient>
      </defs>

      <circle
        cx="70"
        cy="80"
        r="40"
        fill="none"
        stroke="url(#gradient)"
        strokeWidth="4"
      />
{/* cy -bias */}
      <circle
        cx="70"
        cy="60"
        r="40"
        fill="none"
        stroke="url(#gradient)"
        strokeWidth="4"
      />
    </svg>
  );
};

export default CircleIcon;

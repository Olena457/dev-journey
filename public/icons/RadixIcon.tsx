import * as React from 'react';
import { IconProps } from '@/src/types/types';

const RadixIcon: React.FC<IconProps> = ({
  id = 'radix',
  width = '42px',
  height = '42px',
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
        <linearGradient id="radixGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6de8f5" />
          <stop offset="100%" stopColor="#820f84" />
        </linearGradient>
      </defs>

      <g fill="url(#radixGradient)" transform="scale(1.5)">
        <rect x="12" y="12" width="16" height="16" rx="2" />
        <circle cx="36" cy="20" r="8" />
        <path d="M12 36a8 8 0 0 0 8 8v-16a8 8 0 0 0 -8 8z" />
      </g>
    </svg>
  );
};

export default RadixIcon;

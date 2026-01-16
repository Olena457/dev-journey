import * as React from 'react';
import { IconProps } from '@/src/types/types';

const PlayIcon: React.FC<IconProps> = ({
  id = 'play',
  width = '96px',
  height = '96px',
  className,
  ...rest
}) => {
  return (
    <svg
      id={id}
      width={width}
      height={height}
      className={className}
      viewBox="0 0 62 74"
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
        d="M8.2998 73.2001V11.6001L61.5998 42.4001L8.2998 73.2001ZM11.3998 17.1001V67.8001L55.2998 42.4001L11.3998 17.1001Z"
        fill="url(#gradient)"
        stroke="url(#gradient)"
      />
      <path
        d="M0 61.5V0L53.3 30.8L0 61.5ZM3.09999 5.29999V56L47 30.6L3.09999 5.29999Z"
        fill="url(#gradient)"
        stroke="url(#gradient)"
      />
    </svg>
  );
};

export default PlayIcon;

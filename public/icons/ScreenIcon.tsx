import * as React from 'react';
import { IconProps } from '@/src/types/types';

const ScreenIcon: React.FC<IconProps> = ({
  id = 'screen',
  width = '40px',
  height = '40px',
  className,
  ...rest
}) => {
  return (
    <svg
      id={id}
      width={width}
      height={height}
      className={className}
      viewBox="0 0 93 88"
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
        d="M92.6646 74.8291L18.3447 74.8291L18.3447 0.509254L92.6646 0.509251L92.6646 74.8291ZM23.3621 69.9685L87.804 69.9685L87.804 5.52662L23.3621 5.52662L23.3621 69.9685Z"
        fill="url(#gradient)"
        stroke="url(#gradient)"
      />
      <path
        d="M74.3199 88L0 88L-3.24862e-06 13.6801L74.3199 13.6801L74.3199 88ZM5.01739 83.1394L69.4593 83.1394L69.4593 18.6975L5.01739 18.6975L5.01739 83.1394Z"
        fill="url(#gradient)"
        stroke="url(#gradient)"
      />
    </svg>
  );
};

export default ScreenIcon;

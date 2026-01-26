

import * as React from 'react';
import { IconProps } from '@/src/types/types';

const CssIcon: React.FC<IconProps> = ({
  id = 'css',
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
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...rest}
    >
      <defs>
        <linearGradient id="cssGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#820f84" />
          <stop offset="100%" stopColor="#6de8f5" />
        </linearGradient>
      </defs>

      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        <title>{'CSS-color'}</title>
        <desc>{'Created with Sketch.'}</desc>
        <g
          id="Icons"
          stroke="none"
          strokeWidth={1}
          fill="none"
          fillRule="evenodd"
        >
          <g id="Color-" fill="url(#cssGradient)">
            <path d="M6 28L4 3H28L26 28L16 31L6 28Z" />
            <path d="M26 5H16V29.5L24 27L26 5Z" />
            <path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default CssIcon;

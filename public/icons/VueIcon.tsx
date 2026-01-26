
import * as React from 'react';
import { IconProps } from '@/src/types/types';

const VueIcon: React.FC<IconProps> = ({
  id = 'vue',
  width = '22px',
  height = '22px',
  className,
  ...rest
}) => {
  return (
    <svg
      id={id}
      width={width}
      height={height}
      className={className}
      viewBox="0 -17.5 256 256"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...rest}
    >
      <defs>
        <linearGradient id="vueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
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
        <title>{'Vue-color'}</title>
        <path
          d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36z"
          fill="url(#vueGradient)"
        />
        <path
          d="M0 0l128 220.8L256 0h-51.2L128 132.48 50.56 0H0z"
          fill="url(#vueGradient)"
        />
        <path
          d="M50.56 0L128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56z"
          fill="#35495E"
        />
      </g>
    </svg>
  );
};

export default VueIcon;

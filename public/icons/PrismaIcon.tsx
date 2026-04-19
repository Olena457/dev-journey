import * as React from 'react';
import { IconProps } from '@/src/types/types';

const PrismaIcon: React.FC<IconProps> = ({
  id = 'prisma',
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
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <defs>
        <linearGradient id="prismaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2396ED" />
          <stop offset="100%" stopColor="#00C6FB" />
        </linearGradient>
      </defs>

      <g id="SVGRepo_iconCarrier">
        <title>{'prisma'}</title>
        <path
          d="M25.21,24.21,12.739,27.928a.525.525,0,0,1-.667-.606L16.528,5.811a.43.43,0,0,1,.809-.094l8.249,17.661A.6.6,0,0,1,25.21,24.21Zm2.139-.878L17.8,2.883h0A1.531,1.531,0,0,0,16.491,2a1.513,1.513,0,0,0-1.4.729L4.736,19.648a1.592,1.592,0,0,0,.018,1.7l5.064,7.909a1.628,1.628,0,0,0,1.83.678l14.7-4.383a1.6,1.6,0,0,0,1-2.218Z"
          fill="url(#prismaGradient)"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
};

export default PrismaIcon;

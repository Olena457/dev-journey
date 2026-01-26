import * as React from 'react';
import { IconProps } from '@/src/types/types';

const TableIcon: React.FC<IconProps> = ({
  id = 'table',
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
      viewBox="0 0 101 99"
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
        d="M22.8438 21.3474L22.8438 98.1475H99.6437V21.3474H22.8438Z"
        fill="url(#gradient)"
        stroke="url(#gradient)"
        strokeWidth={2}
        strokeMiterlimit={10}
      />

      {[75.5, 68.8, 62, 55.2, 48.4, 41.7, 34.9, 28.1, 21.3, 14.6, 7.8, 1].map(
        (y, i) => (
          <path
            key={i}
            d={`M0 ${y}H74.6`}
            stroke="url(#gradient)"
            strokeWidth={4}
            strokeLinecap="round"
          />
        )
      )}
    </svg>
  );
};

export default TableIcon;

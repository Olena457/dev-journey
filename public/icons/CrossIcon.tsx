import * as React from 'react';
import { IconProps } from '@/src/types/types';

const CrossIcon: React.FC<IconProps> = ({
  id = 'cross',
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
      {...rest}
    >
      <path
        stroke="#f7f5f1"
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeMiterlimit={4}
        strokeWidth={2.6667}
        d="M24 8l-16 16M8 8l16 16"
      />
    </svg>
  );
};

export default CrossIcon;

import * as React from 'react';
import { IconProps } from '@/src/types/types';

const BurgerIcon: React.FC<IconProps> = ({
 id= 'burger',
  width = '36px',
  height = '36px',
  className,
  ...rest
}) => {
  return (
    <svg
      id='burger'
      width={width}
      height={height}
      className={className}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M4.5 18H31.5"
        stroke="#f7f5f1"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 9H31.5"
        stroke="#f7f5f1"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 27H31.5"
        stroke="#f7f5f1"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BurgerIcon;

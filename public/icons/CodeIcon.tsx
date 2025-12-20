import * as React from 'react';
import { IconProps } from '@/src/types/types';

const CodeIcon: React.FC<IconProps> = ({
  id = 'code',
  width = '22px',
  height = '14px',
  className,
  ...rest
}) => {
  return (
    <svg
      id={id}
      width={width}
      height={height}
      className={className}
      viewBox="0 0 22 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M15 13L21 7L15 1M7 1L1 7L7 13"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CodeIcon;

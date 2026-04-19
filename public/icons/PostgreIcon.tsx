import * as React from 'react';
import { IconProps } from '@/src/types/types';

const PostgreIcon: React.FC<IconProps> = ({
  id = 'postgres',
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
      viewBox="-4 0 264 264"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      {...rest}
    >
      <defs>
        <linearGradient
          id="postgresGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#2396ED" />
          <stop offset="100%" stopColor="#00C6FB" />
        </linearGradient>
      </defs>

      <g id="SVGRepo_iconCarrier">
        <title>{'postgresql'}</title>
        <path
          d="M255.007926,158.085617 C253.473109,153.437413 249.452194,150.199279 244.251788,149.42182 ..."
          fill="url(#postgresGradient)"
        />
        <path
          d="M237.905589,160.722476 C208.165838,166.857016 206.121386,156.78788 ..."
          fill="url(#postgresGradient)"
        />
        <path
          d="M108.076342,81.5250624 C105.396915,81.152 102.969349,81.4972748 ..."
          fill="#FFFFFF"
        />
        <path
          d="M196.860453,81.5989654 L196.859861,81.5989654 ..."
          fill="#FFFFFF"
        />
        <path
          d="M247.802088,160.025423 C246.66812,156.596323 ..."
          fill="#FFFFFF"
        />
      </g>
    </svg>
  );
};

export default PostgreIcon;

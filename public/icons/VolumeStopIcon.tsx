import * as React from 'react';
import { IconProps } from '@/src/types/types';

const VolumeStopIcon: React.FC<IconProps> = ({
  id = 'volume-stop',
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
      viewBox="-20 0 190 190"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M130.466 117.217L123.796 124.141L112.24 112.782L101.015 124.3L94.091 117.629L105.433 106.091L93.885 94.7381L100.428 87.9411L112.095 99.3121L123.492 87.7171L130.29 94.2601L118.901 105.945L130.466 117.217ZM55.973 85.2681L84.98 65.5911L85.557 146.142L55.283 125.659L55.973 85.2681ZM30.573 117.566C30.573 114.158 30.429 99.4881 30.429 92.4051C30.429 86.3011 33.495 84.2981 38.396 84.2981C42.948 84.2981 47.433 84.7521 47.433 84.7521L47.719 126.563C47.719 126.563 41.97 127.244 38.624 127.244C33.069 127.243 30.573 124.291 30.573 117.566Z"
          fill="#808080"
        />
      </g>
    </svg>
  );
};

export default VolumeStopIcon;

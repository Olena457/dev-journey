import * as React from 'react';
import { IconProps } from '@/src/types/types';

const MuiIcon: React.FC<IconProps> = ({
  id = 'mui',
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
      viewBox="0 -26 256 256"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="#000000"
      {...rest}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        <g>
          <polygon
            fill="#d200da"
            points="0 110.848 0 0 96 55.424 96 92.3733333 32 55.424 32 129.322667"
          />
          <polygon
            fill="#6de8f5"
            points="96 55.424 192 0 192 110.848 128 147.797333 96 129.322667 160 92.3733333 160 55.424 96 92.3733333"
          />
          <polygon
            fill="#d200da"
            points="96 129.322667 96 166.272 160 203.221333 160 166.272"
          />
          <path
            d="M160,203.221333 L256,147.797333 L256,73.8986667 L224,92.3733333 L224,129.322667 L160,166.272 L160,203.221333 Z M224,55.424 L224,18.4746667 L256,0 L256,36.9493333 L224,55.424 Z"
            fill="#6de8f5"
          />
        </g>
      </g>
    </svg>
  );
};

export default MuiIcon;


import * as React from 'react';
import { IconProps } from '@/src/types/types';

const LinkIcon: React.FC<IconProps> = ({
  id = 'link',
  width = '24px',
  height = '24px',
  className,
  ...rest
}) => {
  return (
    <svg
      id={id}
      width={width}
      height={height}
      className={className}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        id="Path_113"
        data-name="Path 113"
        d="M37,9.5v4A2.5,2.5,0,0,1,34.5,16h-11A2.5,2.5,0,0,1,21,13.5V2.5A2.5,2.5,0,0,1,23.5,0h4a.5.5,0,0,1,0,1h-4A1.5,1.5,0,0,0,22,2.5v11A1.5,1.5,0,0,0,23.5,15h11A1.5,1.5,0,0,0,36,13.5v-4a.5.5,0,0,1,1,0ZM36.962.309A.5.5,0,0,0,36.5,0h-5a.5.5,0,0,0,0,1h3.793L25.146,11.146a.5.5,0,0,0,.708.708L36,1.707V5.5a.5.5,0,0,0,1,0V.5A.5.5,0,0,0,36.962.309Z"
        transform="translate(-21)"
        fill="#820f84"
        stroke="#820f84"
        strokeWidth={1}
      />
    </svg>
  );
};

export default LinkIcon;

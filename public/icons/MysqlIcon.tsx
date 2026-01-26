
import * as React from 'react';
import { IconProps } from '@/src/types/types';

const MysqlIcon: React.FC<IconProps> = ({
  id = 'mysql',
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
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <defs>
        <linearGradient id="mysqlGreen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#820f84" />
          <stop offset="100%" stopColor="#6de8f5" />
        </linearGradient>

        <linearGradient id="mysqlDark" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#333333" />
          <stop offset="100%" stopColor="#111111" />
        </linearGradient>
      </defs>

      <g id="SVGRepo_iconCarrier">
        <path
          d="M117 608.4v178.5c1.5 93.7 155.7 169.5 395 169.5s393.4-75.8 395-169.5V608.4H117z"
          fill="url(#mysqlGreen)"
        />
        <path
          d="M907 607.7c0 99.4-154.8 180-395 180s-395-80.6-395-180 154.8-180 395-180 395 80.5 395 180z"
          fill="url(#mysqlDark)"
        />
        <path
          d="M117 428.4v158.5c1.5 93.7 155.7 179.5 395 179.5s393.4-85.8 395-179.5V428.4H117z"
          fill="url(#mysqlGreen)"
        />
        <path
          d="M907 427.7c0 99.4-154.8 180-395 180s-395-80.6-395-180 154.8-180 395-180 395 80.5 395 180z"
          fill="url(#mysqlDark)"
        />
        <path
          d="M117 248.4v158.5c1.5 93.7 155.7 179.5 395 179.5s393.4-85.8 395-179.5V248.4H117z"
          fill="url(#mysqlGreen)"
        />
        <path
          d="M907 247.7c0 99.4-154.8 180-395 180s-395-80.6-395-180 154.8-180 395-180 395 80.5 395 180z"
          fill="url(#mysqlGreen)"
        />
      </g>
    </svg>
  );
};

export default MysqlIcon;

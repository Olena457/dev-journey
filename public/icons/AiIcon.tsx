import * as React from 'react';
import { IconProps } from '@/src/types/types';

const AiIcon: React.FC<IconProps> = ({
  id = 'ai',
  width = '22px',
  height = '20px',
  className,
  ...rest
}) => {
  return (
    <svg
      id={id}
      width={width}
      height={height}
      className={className}
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M5.00146 1.25781V3.25781M5.00146 3.25781V5.25781M5.00146 3.25781H7.00146M5.00146 3.25781H3.00146M3.18848 14.7607V16.7607M3.18848 16.7607V18.7607M3.18848 16.7607H5.18848M3.18848 16.7607H1.18848M9.48035 7.81807L3.62823 9.54336C3.15008 9.68432 3.15008 10.3616 3.62823 10.5025L9.48035 12.2278C9.64319 12.2758 9.77055 12.4032 9.81855 12.566L11.5438 18.4182C11.6848 18.8963 12.3621 18.8963 12.503 18.4182L14.2283 12.566C14.2763 12.4032 14.4037 12.2758 14.5665 12.2278L20.4186 10.5025C20.8968 10.3616 20.8968 9.68432 20.4186 9.54336L14.5665 7.81807C14.4037 7.77006 14.2763 7.6427 14.2283 7.47987L12.503 1.62774C12.3621 1.14959 11.6848 1.14959 11.5438 1.62774L9.81855 7.47987C9.77055 7.6427 9.64319 7.77006 9.48035 7.81807Z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default AiIcon;

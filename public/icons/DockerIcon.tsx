import * as React from 'react';
import { IconProps } from '@/src/types/types';

const DockerIcon: React.FC<IconProps> = ({
  id = 'docker',
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
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g id="SVGRepo_iconCarrier">
        <title>{'docker'}</title>
        <path
          d="M12.342 4.536l.15-.227.262.159.116.083c.28.216.869.768.996 1.684.223-.04.448-.06.673-.06.534 0 .893.124 1.097.227l.105.057.068.045.191.156-.066.2a2.044 2.044 0 01-.47.73c-.29.299-.8.652-1.609.698l-.178.005h-.148c-.37.977-.867 2.078-1.702 3.066a7.081 7.081 0 01-1.74 1.488 7.941 7.941 0 01-2.549.968c-.644.125-1.298.187-1.953.185-1.45 0-2.73-.288-3.517-.792-.703-.449-1.243-1.182-1.606-2.177a8.25 8.25 0 01-.461-2.83.516.516 0 01.432-.516l.068-.005h10.54l.092-.007.149-.016c.256-.034.646-.11.92-.27-.328-.543-.421-1.178-.268-1.854a3.3 3.3 0 01.3-.81l.108-.187z"
          fill="#6de8f5"
        />
        <path d="M2.89 5.784h1.413v1.315H2.89z" fill="#6de8f5" />
        <path d="M4.837 5.784h1.413v1.315H4.837z" fill="#820f84" />
        <path d="M6.789 5.784h1.412v1.315H6.789z" fill="#6de8f5" />
        <path d="M8.741 5.784h1.411v1.315H8.741z" fill="#820f84 " />
        <path d="M4.835 3.892h1.412v1.315H4.835z" fill="#6de8f5" />
        <path d="M6.811 3.892h1.412v1.315H6.811z" fill="#820f84 " />
        <path d="M6.811 2h1.412v1.316H6.811z" fill="#6de8f5" />
      </g>
    </svg>
  );
};

export default DockerIcon;

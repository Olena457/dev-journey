import { IconProps } from "@/src/types/types";

export const IconComponent: React.FC<IconProps> = ({
  id,
  width = '24px',
  height = '24px',
  className,
  onClick,
}) => {
  return (
    <svg
      width={width}
      height={height}
      aria-label={id}
      onClick={onClick}
      className={` transition-all easy-in-out ${className}`}
    >
      <use xlinkHref={`/icons/sprite.svg#${id}`} />
    </svg>
  );
};
